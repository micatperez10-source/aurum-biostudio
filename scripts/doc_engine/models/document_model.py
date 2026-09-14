"""
Data models and Abstract Base Classes for documents.
Enforces separation of concerns and pure Object-Oriented principles.
"""

from abc import ABC, abstractmethod
from dataclasses import dataclass, field
from enum import Enum
from typing import List, Tuple


class DocumentCategory(Enum):
    """Enumeration for strict folder segmentation."""
    INFORMES = "informes"
    RESUMENES = "resumenes"
    LEGAL = "legal"
    PLANTILLAS = "plantillas"


@dataclass(frozen=True)
class Section:
    """Represents a logical section within a document."""
    heading: str
    points: Tuple[str, ...]

    @classmethod
    def create(cls, heading: str, points: List[str]) -> "Section":
        return cls(heading=heading, points=tuple(points))


@dataclass
class DocumentMetadata:
    """Metadata container for every generated document."""
    title: str
    subtitle: str
    filename: str
    category: DocumentCategory
    version: str = "1.0"
    confidential: bool = True
    author: str = "BioIT Clarity - Micaela"


class BaseDocument(ABC):
    """
    Abstract Base Class representing a domain document.
    Enforces that every document defines its metadata and sections polymorphically.
    """

    def __init__(self, metadata: DocumentMetadata):
        self._metadata = metadata

    @property
    def metadata(self) -> DocumentMetadata:
        return self._metadata

    @property
    def filename(self) -> str:
        return self._metadata.filename

    @property
    def category(self) -> DocumentCategory:
        return self._metadata.category

    @abstractmethod
    def get_sections(self) -> List[Section]:
        """Returns the structured sections of the document."""
        pass
