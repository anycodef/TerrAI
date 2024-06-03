from PIL import Image
from reportlab.lib.pagesizes import letter
from reportlab.pdfgen import canvas
from reportlab.lib.units import cm
import os
from django.conf import settings
from datetime import datetime

class AIService:
    def analyze_images(self, image_path):
        try:
            # Agregar un registro para verificar la ruta del archivo
            print(f"Opening image from: {image_path}")
            
            # Abrir la imagen
            image = Image.open(image_path)
            image = image.convert('RGB')
        except Exception as e:
            print(f"Error opening image: {str(e)}")
            return {"error": f'Error opening image: {str(e)}'}
        
        # Obtener los píxeles de la imagen
        pixels = list(image.getdata())
        
        # Inicializar los valores de suma para cada canal de color
        r_total = g_total = b_total = 0
        total_pixels = len(pixels)
        
        # Sumar los valores de cada canal de color para todos los píxeles
        for r, g, b in pixels:
            r_total += r
            g_total += g
            b_total += b
        
        # Calcular el promedio para cada canal de color
        r_avg = r_total // total_pixels
        g_avg = g_total // total_pixels
        b_avg = b_total // total_pixels
        
        # Convertir el color promedio a código hexadecimal
        avg_hex_color = f'#{r_avg:02x}{g_avg:02x}{b_avg:02x}'
        
        # Calcular el nivel de riesgo
        max_hex_value = int("FFFFFF", 16)
        avg_hex_value = (r_avg << 16) + (g_avg << 8) + b_avg
        risk_level = (avg_hex_value / max_hex_value) * 100
        
        # Obtener la fecha y hora del análisis
        analysis_datetime = datetime.now()
        analysis_datetime_str = analysis_datetime.strftime("%Y-%m-%d %H:%M:%S")
        
        # Guardar el resultado como PDF
        pdf_path = self.save_result_as_pdf(avg_hex_color, risk_level, analysis_datetime_str, image_path)
        
        # Devolver el resultado y la ruta del PDF
        return {
            "nivel de riesgo": risk_level,
            "pdf_path": pdf_path,
            "analysis_datetime": int(analysis_datetime.timestamp())
        }
    
    def save_result_as_pdf(self, avg_hex_color, risk_level, analysis_datetime_str, image_path):
        # Definir la ruta del archivo PDF
        pdf_path = os.path.join(settings.MEDIA_ROOT, 'result.pdf')
        
        # Crear un lienzo para el PDF
        c = canvas.Canvas(pdf_path, pagesize=letter)
        width, height = letter
        
        # Añadir título y fecha y hora del análisis
        c.setFont("Helvetica-Bold", 16)
        c.drawString(100, height - 40, "Análisis de imagen")
        
        c.setFont("Helvetica", 12)
        c.setFillColorRGB(0.5, 0.5, 0.5)  # Gris
        c.drawString(100, height - 60, analysis_datetime_str)
        
        # Añadir el subtítulo "imagen"
        c.setFont("Helvetica-Bold", 14)
        c.setFillColorRGB(0, 0, 0)  # Negro
        c.drawString(100, height - 110, "Imagen")
        
        # Añadir la imagen redimensionada manteniendo las proporciones
        img = Image.open(image_path)
        img = img.convert('RGB')  # Convertir a RGB para asegurar compatibilidad con JPEG
        img.thumbnail((10 * cm, 10 * cm), Image.Resampling.LANCZOS)
        img_path_resized = os.path.join(settings.MEDIA_ROOT, 'tempimg_resized.jpg')
        img.save(img_path_resized, format='JPEG')
        
        # Obtener las dimensiones de la imagen
        img_width, img_height = img.size
        
        # Calcular la posición de la imagen centrada
        img_x = (width - img_width) / 2
        img_y = height - 11.25 * cm
        
        c.drawImage(img_path_resized, img_x, img_y, img_width, img_height)
        
        # Añadir los resultados
        c.setFillColorRGB(0, 0, 0)  # Negro
        c.setFont("Helvetica-Bold", 14)
        c.drawString(100, height - 14 * cm, "Resultados")
        
        c.setFont("Helvetica", 12)
        c.drawString(100, height - 15.25 * cm, f"Nivel de riesgo: {risk_level:.2f}%")
        
        # Guardar el PDF
        c.save()
        
        return pdf_path
