"""
Concrete implementation of Service Overview One-Pager.
Positioned for bioinformatics and data analysis for biotech teams and labs.
"""

from typing import List
from ..models.document_model import BaseDocument, DocumentMetadata, DocumentCategory, Section


class ServiceOnePagerDocument(BaseDocument):
    """
    Single-page executive brief covering data analysis packages, pricing, and workflow.
    """

    def __init__(self):
        meta = DocumentMetadata(
            title="BioIT Clarity - Resumen de Servicios (One-Pager)",
            subtitle="Bioinformatica y analisis de datos para laboratorios y startups biotech",
            filename="Resumen_Servicio_BioIT_Clarity_OnePager.pdf",
            category=DocumentCategory.RESUMENES,
            version="2026.2",
            confidential=False
        )
        super().__init__(meta)

    def get_sections(self) -> List[Section]:
        return [
            Section.create(
                "Promesa Central",
                [
                    "Converti datos biologicos en resultados claros y ahorra tiempo en tu proximo paper.",
                    "Ayudo a laboratorios y startups a analizar sus datos, generar figuras listas para",
                    "publicacion y entender que pasos dar despues, sin informes eternos ni jerga innecesaria."
                ]
            ),
            Section.create(
                "Nuestros 3 Paquetes de Servicio",
                [
                    "1. Data Check (Desde US$ 100):",
                    "   - Revision rapida del conjunto de datos antes de una inversion mayor.",
                    "   - Llamada corta para alinear preguntas cientificas y objetivos.",
                    "   - Plan claro y estructurado de analisis.",
                    "",
                    "2. Analysis + Report - MAS ELEGIDO (Desde US$ 500):",
                    "   - Analisis acordado (exploratorio, estadistico, visualizaciones, etc.).",
                    "   - Graficos y tablas listos para insertar en papers o presentaciones.",
                    "   - Reporte simple explicando los resultados en lenguaje directo y practico.",
                    "   - Llamada de presentacion y revision de hallazgos clave.",
                    "",
                    "3. Ongoing Analysis Support (Desde US$ 300 / mes):",
                    "   - Acompanamiento mensual continuo para analisis y nuevos lotes de datos.",
                    "   - Respuestas a preguntas practicas y revision continua de graficos/reportes."
                ]
            ),
            Section.create(
                "Forma de Trabajo en 4 Pasos",
                [
                    "Paso 1: Me contas sobre tus datos y tus metas (llamada de 20 min sin compromiso).",
                    "Paso 2: Analizo los datos con codigo reproducible (Python/R).",
                    "Paso 3: Recibis figuras de alta resolucion, tablas y un reporte directo.",
                    "Paso 4: Revisamos los resultados juntos en una llamada paso a paso."
                ]
            ),
            Section.create(
                "Contacto Directo y Confidencialidad",
                [
                    "Email: micaela.bioinformatics@gmail.com",
                    "Confidencialidad: Modelo de NDA mutuo disponible previo al envio de archivos.",
                    "Agenda tu llamada inicial gratuita de 20 minutos para conversar sobre tus datos."
                ]
            )
        ]
