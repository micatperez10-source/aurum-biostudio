"""
Document Orchestrator: Coordinates directory segmentation, models, and rendering.
Follows Dependency Injection and Open/Closed Principle.
"""

from typing import List, Optional, Dict
from .models.document_model import BaseDocument
from .renderers.pdf_renderer import IDocumentRenderer, PdfRenderer
from .storage.folder_manager import FolderManager
from .documents.diagnostic_report import DiagnosticReportDocument
from .documents.service_onepager import ServiceOnePagerDocument
from .documents.nda_agreement import NdaAgreementDocument
from .documents.pipeline_backlog import PipelineBacklogDocument


class DocumentOrchestrator:
    """
    Main coordinator for compiling and segmenting all domain documents.
    """

    def __init__(
        self,
        folder_manager: FolderManager,
        renderer: Optional[IDocumentRenderer] = None,
        documents: Optional[List[BaseDocument]] = None
    ):
        self.folder_manager = folder_manager
        self.renderer = renderer or PdfRenderer()
        self.documents: List[BaseDocument] = documents or [
            DiagnosticReportDocument(),
            ServiceOnePagerDocument(),
            NdaAgreementDocument(),
            PipelineBacklogDocument()
        ]

    def register_document(self, document: BaseDocument) -> None:
        """Register a new document class dynamically (OCP compliance)."""
        self.documents.append(document)

    def execute_build(self) -> Dict[str, List[Dict[str, str]]]:
        """
        Executes the segmented build pipeline:
        1. Prepares segmented folder tree.
        2. Renders each polymorphic document into its designated category folder.
        3. Maintains root backward-compatibility.
        4. Returns structured execution summary.
        """
        print("[Orchestrator] Inicializando estructura de carpetas segmentadas...")
        self.folder_manager.initialize_structure(clean_existing=False)

        manifest: Dict[str, List[Dict[str, str]]] = {}

        for doc in self.documents:
            cat_name = doc.category.value
            if cat_name not in manifest:
                manifest[cat_name] = []

            # 1. Resolve segmented target path
            target_path = self.folder_manager.get_target_path(doc.category, doc.filename)
            web_path = self.folder_manager.get_relative_web_path(doc.category, doc.filename)

            # 2. Render document using renderer
            print(f" -> Generando [{cat_name.upper()}]: {doc.filename}")
            self.renderer.render(doc, target_path)

            # 3. Fallback sync to root /public/docs/ for seamless direct access
            self.folder_manager.replicate_to_root(target_path, doc.filename)

            manifest[cat_name].append({
                "title": doc.metadata.title,
                "filename": doc.filename,
                "category": cat_name,
                "disk_path": target_path,
                "web_url": web_path
            })

        print(f"[Orchestrator] Éxito: {len(self.documents)} documentos generados y segmentados.")
        return manifest
