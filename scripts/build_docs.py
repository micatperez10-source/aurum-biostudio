#!/usr/bin/env python3
"""
CLI entry point for BioIT Clarity Document Generation.
Uses pure Object-Oriented Architecture (models, renderers, storage, documents, orchestrator).
"""

import os
import sys

# Ensure script directory is in python module search path
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))

from doc_engine.storage.folder_manager import FolderManager
from doc_engine.renderers.pdf_renderer import PdfRenderer
from doc_engine.orchestrator import DocumentOrchestrator


def main():
    root_dir = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", "public", "docs"))
    
    print("=" * 60)
    print(" BioIT Clarity - Generador de Documentos Segmentados (POO)")
    print("=" * 60)
    print(f"Directorio de destino: {root_dir}\n")

    folder_manager = FolderManager(root_docs_dir=root_dir)
    renderer = PdfRenderer(contact_email="micaela.bioinformatics@gmail.com")
    orchestrator = DocumentOrchestrator(folder_manager=folder_manager, renderer=renderer)

    manifest = orchestrator.execute_build()

    print("\n" + "=" * 60)
    print(" Árbol de Carpetas Segmentadas Creado:")
    print("=" * 60)
    for category, items in manifest.items():
        print(f"\n📂 public/docs/{category}/")
        for item in items:
            print(f"   └── 📄 {item['filename']}")
            print(f"       • Título: {item['title']}")
            print(f"       • URL Web: {item['web_url']}")

    print("\n" + "=" * 60)
    print(" [OK] Proceso finalizado sin mezclar archivos. Segmentación completa.")
    print("=" * 60)


if __name__ == "__main__":
    main()
