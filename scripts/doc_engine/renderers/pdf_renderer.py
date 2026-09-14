"""
PDF Renderer module implementing PDF stream generation.
Encapsulates PDF 1.4 serialization without external heavy dependencies.
"""

from abc import ABC, abstractmethod
import os
from typing import List
from ..models.document_model import BaseDocument


class IDocumentRenderer(ABC):
    """Renderer interface for document outputs."""

    @abstractmethod
    def render(self, document: BaseDocument, destination_path: str) -> None:
        """Render the given document to destination_path."""
        pass


class PdfRenderer(IDocumentRenderer):
    """
    Object-Oriented PDF generator.
    Encapsulates text streams, coordinates, page layout, and PDF dictionary objects.
    """

    PAGE_WIDTH = 595
    PAGE_HEIGHT = 842

    def __init__(self, contact_email: str = "micaela.bioinformatics@gmail.com"):
        self.contact_email = contact_email

    def _sanitize(self, text: str) -> str:
        """Escapes parenthesis and special characters for PDF literal strings."""
        return text.replace("(", "\\(").replace(")", "\\)")

    def render(self, document: BaseDocument, destination_path: str) -> None:
        meta = document.metadata
        sections = document.get_sections()

        stream_lines: List[str] = []
        
        # Header - Title
        stream_lines.append(f"BT /F1 18 Tf 50 770 Td ({self._sanitize(meta.title)}) Tj ET")
        # Header - Subtitle
        stream_lines.append(f"BT /F1 11 Tf 50 748 Td ({self._sanitize(meta.subtitle)}) Tj ET")
        
        # Metadata banner
        conf_label = "Confidencial" if meta.confidential else "Público"
        meta_line = f"BioIT Clarity | Versión {meta.version} | {conf_label} | {meta.author}"
        stream_lines.append(f"BT /F1 9 Tf 50 732 Td ({self._sanitize(meta_line)}) Tj ET")
        
        # Divider line
        stream_lines.append("0.2 w 50 722 m 545 722 l S")

        # Sections
        current_y = 700
        for section in sections:
            if current_y < 120:
                break
            # Section Title
            stream_lines.append(f"BT /F1 12 Tf 50 {current_y} Td ({self._sanitize(section.heading)}) Tj ET")
            current_y -= 18
            
            # Bullet items
            for point in section.points:
                if current_y < 100:
                    break
                stream_lines.append(f"BT /F1 10 Tf 55 {current_y} Td ({self._sanitize(point)}) Tj ET")
                current_y -= 15
            current_y -= 10

        # Footer
        stream_lines.append("0.2 w 50 60 m 545 60 l S")
        footer_text = f"BioIT Clarity - Procesos Claros para Biotecnología | Contacto: {self.contact_email}"
        stream_lines.append(f"BT /F1 8 Tf 50 48 Td ({self._sanitize(footer_text)}) Tj ET")

        stream_bytes = "\n".join(stream_lines).encode("latin-1", "replace")

        # PDF object tree
        objects = [
            b"<< /Type /Catalog /Pages 2 0 R >>",
            b"<< /Type /Pages /Kids [3 0 R] /Count 1 >>",
            f"<< /Type /Page /Parent 2 0 R /MediaBox [0 0 {self.PAGE_WIDTH} {self.PAGE_HEIGHT}] /Resources << /Font << /F1 4 0 R >> >> /Contents 5 0 R >>".encode(),
            b"<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>",
            f"<< /Length {len(stream_bytes)} >>\nstream\n".encode() + stream_bytes + b"\nendstream"
        ]

        out_chunks = [b"%PDF-1.4\n"]
        offsets = []
        for i, obj in enumerate(objects, start=1):
            offsets.append(sum(len(c) for c in out_chunks))
            out_chunks.append(f"{i} 0 obj\n".encode() + obj + b"\nendobj\n")

        xref_offset = sum(len(c) for c in out_chunks)
        out_chunks.append(f"xref\n0 {len(objects)+1}\n0000000000 65535 f \n".encode())
        for off in offsets:
            out_chunks.append(f"{off:010d} 00000 n \n".encode())
        out_chunks.append(f"trailer\n<< /Size {len(objects)+1} /Root 1 0 R >>\nstartxref\n{xref_offset}\n%%EOF\n".encode())

        os.makedirs(os.path.dirname(destination_path), exist_ok=True)
        with open(destination_path, "wb") as f:
            f.write(b"".join(out_chunks))
