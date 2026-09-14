"""
Concrete implementation of Mutual Non-Disclosure Agreement (NDA).
"""

from typing import List
from ..models.document_model import BaseDocument, DocumentMetadata, DocumentCategory, Section


class NdaAgreementDocument(BaseDocument):
    """
    Standard bilateral mutual NDA securing genomic sequences and proprietary pipelines.
    """

    def __init__(self):
        meta = DocumentMetadata(
            title="Acuerdo de Confidencialidad Mutuo (NDA)",
            subtitle="Garantia de proteccion de datos cientificos y propiedad intelectual",
            filename="Modelo_NDA_Confidencialidad_BioIT.pdf",
            category=DocumentCategory.LEGAL,
            version="2026.1",
            confidential=True
        )
        super().__init__(meta)

    def get_sections(self) -> List[Section]:
        return [
            Section.create(
                "Partes del Acuerdo",
                [
                    "De una parte: La Empresa / Laboratorio de Biotecnologia.",
                    "De otra parte: Micaela / BioIT Clarity (Consultoria Tecnica Bioinformatica)."
                ]
            ),
            Section.create(
                "Clausula 1: Definicion de Informacion Confidencial",
                [
                    "Incluye secuencias, pipelines, metodologias propietarias, arquitecturas de software,",
                    "credenciales de infraestructura y datos experimentales del laboratorio."
                ]
            ),
            Section.create(
                "Clausula 2: Compromiso de No Divulgacion",
                [
                    "- Se prohibe expresamente compartir informacion con terceros.",
                    "- La informacion solo se utilizara para el diagnostico y optimizacion de procesos.",
                    "- Accesos de solo lectura concedidos seran revocados al concluir el analisis."
                ]
            ),
            Section.create(
                "Clausula 3: Destruccion de Datos Temporales",
                [
                    "Al finalizar el diagnostico, cualquier copia local de analisis sera eliminada de inmediato."
                ]
            )
        ]
