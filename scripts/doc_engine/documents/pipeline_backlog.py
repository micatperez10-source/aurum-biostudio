"""
Concrete implementation of Prioritized Pipeline Backlog Template.
"""

from typing import List
from ..models.document_model import BaseDocument, DocumentMetadata, DocumentCategory, Section


class PipelineBacklogDocument(BaseDocument):
    """
    Actionable backlog template categorized by Effort vs Impact for pipelines and scientific data.
    """

    def __init__(self):
        meta = DocumentMetadata(
            title="Plantilla de Backlog Priorizado para Biotecnologia",
            subtitle="Matriz Esfuerzo vs Impacto para pipelines y datos",
            filename="Backlog_Priorizado_Pipelines_Template.pdf",
            category=DocumentCategory.PLANTILLAS,
            version="2026.1",
            confidential=False
        )
        super().__init__(meta)

    def get_sections(self) -> List[Section]:
        return [
            Section.create(
                "Nivel 1: Quick Wins (Semana 1 - Bajo Esfuerzo, Alto Impacto)",
                [
                    "[ ] Activar backups diarios de la base de datos de muestras.",
                    "[ ] Migrar scripts locales sueltos a un repositorio Git centralizado.",
                    "[ ] Apagar instancias de prueba inactivas en AWS/GCP (ahorro inmediato)."
                ]
            ),
            Section.create(
                "Nivel 2: Estandarizacion (Mes 1 - Medio Esfuerzo, Alto Impacto)",
                [
                    "[ ] Crear imagenes Docker para congelar versiones de paquetes de Python/R.",
                    "[ ] Escribir SOP de 1 pagina para la ejecucion de corridas de secuenciacion.",
                    "[ ] Configurar alertas automaticas cuando un analisis falla o se detiene."
                ]
            ),
            Section.create(
                "Nivel 3: Escalabilidad (Trimestre 1)",
                [
                    "[ ] Migrar ejecuciones manuales a Nextflow / Snakemake para trazabilidad total.",
                    "[ ] Implementar politicas de ciclo de vida en S3/Cloud Storage para datos historicos."
                ]
            )
        ]
