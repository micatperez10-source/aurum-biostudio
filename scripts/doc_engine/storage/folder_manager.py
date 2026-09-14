"""
Folder Manager module for directory segmentation and path resolution.
Follows Single Responsibility Principle (SRP).
"""

import os
import shutil
from typing import Dict
from ..models.document_model import DocumentCategory


class FolderManager:
    """
    Manages filesystem directory creation and segmentation for documents.
    Prevents file collision and ensures a clean, isolated directory structure.
    """

    def __init__(self, root_docs_dir: str):
        self.root_docs_dir = os.path.abspath(root_docs_dir)
        self._category_dirs: Dict[DocumentCategory, str] = {}

    def initialize_structure(self, clean_existing: bool = False) -> None:
        """Creates the root directory and segmented subdirectories for each category."""
        if clean_existing and os.path.exists(self.root_docs_dir):
            shutil.rmtree(self.root_docs_dir)

        os.makedirs(self.root_docs_dir, exist_ok=True)

        for category in DocumentCategory:
            category_path = os.path.join(self.root_docs_dir, category.value)
            os.makedirs(category_path, exist_ok=True)
            self._category_dirs[category] = category_path

    def get_category_dir(self, category: DocumentCategory) -> str:
        """Returns the absolute path to the directory designated for this category."""
        if category not in self._category_dirs:
            category_path = os.path.join(self.root_docs_dir, category.value)
            os.makedirs(category_path, exist_ok=True)
            self._category_dirs[category] = category_path
        return self._category_dirs[category]

    def get_target_path(self, category: DocumentCategory, filename: str) -> str:
        """Resolves target absolute path within the designated category subdirectory."""
        return os.path.join(self.get_category_dir(category), filename)

    def get_relative_web_path(self, category: DocumentCategory, filename: str) -> str:
        """Returns relative path suitable for web browser downloads (/docs/category/filename)."""
        return f"/docs/{category.value}/{filename}"

    def replicate_to_root(self, source_path: str, filename: str) -> None:
        """
        Creates a copy directly in the root docs directory as a convenience/backward-compatible fallback.
        """
        root_fallback = os.path.join(self.root_docs_dir, filename)
        shutil.copy2(source_path, root_fallback)

    def get_tree_summary(self) -> Dict[str, list]:
        """Inspects and returns the segmented directory tree."""
        summary: Dict[str, list] = {}
        for category in DocumentCategory:
            cat_dir = self.get_category_dir(category)
            files = sorted(os.listdir(cat_dir)) if os.path.exists(cat_dir) else []
            summary[category.value] = files
        return summary
