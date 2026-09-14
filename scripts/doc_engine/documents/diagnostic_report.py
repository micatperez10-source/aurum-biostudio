"""
Concrete implementation of Diagnostic & Analysis Sample Report.
Positioned for biological data analysis and exploratory findings.
"""

from typing import List
from ..models.document_model import BaseDocument, DocumentMetadata, DocumentCategory, Section


class DiagnosticReportDocument(BaseDocument):
    """
    Sample plain-language analysis report highlighting dataset structure, statistics, and figures.
    """

    def __init__(self):
        meta = DocumentMetadata(
            title="Informe de Analisis de Datos - BioIT Clarity (Muestra)",
            subtitle="Ejemplo de reporte sintetico en lenguaje claro para laboratorio",
            filename="Diagnostico_Ejecutivo_Ejemplo_BioIT_Clarity.pdf",
            category=DocumentCategory.INFORMES,
            version="2026.2",
            confidential=False
        )
        super().__init__(meta)

    def get_sections(self) -> List[Section]:
        return [
            Section.create(
                "1. Resumen Exploratorio del Conjunto de Datos",
                [
                    "- Evaluacion de calidad sobre 48 muestras experimentales (ensayos qPCR / expresion).",
                    "- Distribucion homogenea tras normalizacion log2; 3 valores atipicos identificados y documentados.",
                    "- Estructura de metadatos validada sin valores faltantes criticos."
                ]
            ),
            Section.create(
                "2. Analisis Estadistico e Interpretacion Directa",
                [
                    "- Prueba de hipotesis (t-test pareado / ANOVA): 12 variables muestran cambio significativo (p < 0.01).",
                    "- Correccion por comparaciones multiples (FDR Benjamini-Hochberg) aplicada de forma transparente.",
                    "- Conclusiones explicadas en terminos practicos para la toma de decisiones experimentales."
                ]
            ),
            Section.create(
                "3. Figuras y Tablas Entregadas",
                [
                    "- Figura 1: Grafico volcano de alta resolucion (300 DPI, listo para paper).",
                    "- Figura 2: Diagrama de cajas (boxplots) de los biomarcadores mas relevantes.",
                    "- Tabla 1: Resumen de medias, desviaciones estandar e intervalos de confianza (CSV y Excel)."
                ]
            ),
            Section.create(
                "4. Pasos Sugeridos y Documentacion Reproducible",
                [
                    "- Scripts en Python / R adjuntos con instrucciones claras para replicar el analisis.",
                    "- Recomendacion de validar los 3 biomarcadores prioritarios en la proxima tanda experimental."
                ]
            )
        ]
