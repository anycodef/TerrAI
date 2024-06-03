from PIL import Image
from reportlab.lib.pagesizes import letter
from reportlab.pdfgen import canvas
import os
from django.conf import settings

class AIService:
    def analyze_images(self, image_path):
        try:
            # abrir la imagen
            image = Image.open(image_path)
            image = image.convert('RGB')
        except Exception as e:
            return {"error": f'Error opening image: {str(e)}'}
        
        # obtener los píxeles de la imagen
        pixels = list(image.getdata())
        
        # inicializar los valores de suma para cada canal de color
        r_total = g_total = b_total = 0
        total_pixels = len(pixels)
        
        # sumar los valores de cada canal de color para todos los píxeles
        for r, g, b in pixels:
            r_total += r
            g_total += g
            b_total += b
        
        # calcular el promedio para cada canal de color
        r_avg = r_total // total_pixels
        g_avg = g_total // total_pixels
        b_avg = b_total // total_pixels
        
        # convertir el color promedio a código hexadecimal
        avg_hex_color = f'#{r_avg:02x}{g_avg:02x}{b_avg:02x}'
        
        # guardar el resultado como PDF
        pdf_path = self.save_result_as_pdf(avg_hex_color)
        
        # devolver el resultado y la ruta del PDF
        return {"nivel de riesgo": avg_hex_color, "pdf_path": pdf_path}
    
    def save_result_as_pdf(self, avg_hex_color):
        # definir la ruta del archivo PDF
        pdf_path = os.path.join(settings.MEDIA_ROOT, 'result.pdf')
        
        # crear un lienzo para el PDF
        c = canvas.Canvas(pdf_path, pagesize=letter)
        width, height = letter
        
        # añadir contenido al PDF
        c.drawString(100, height - 100, f"Color promedio de la imagen: {avg_hex_color}")
        
        # guardar el PDF
        c.save()
        
        return pdf_path
