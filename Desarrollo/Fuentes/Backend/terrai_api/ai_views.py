import os
from django.http import JsonResponse, FileResponse, Http404
from django.views import View
from django.views.decorators.csrf import csrf_exempt
from django.utils.decorators import method_decorator
from django.conf import settings
from .ai_service import AIService

@method_decorator(csrf_exempt, name='dispatch')
class AIAnalysisView(View):
    def post(self, request):
        if 'file' not in request.FILES:
            return JsonResponse({'status': 'error', 'message': 'No file provided'}, status=400)

        image = request.FILES['file']
        
        # Definir la ruta para almacenar temporalmente la imagen
        image_path = os.path.join(settings.MEDIA_ROOT, 'tempimg.jpg')
        
        # Agregar un registro para verificar la ruta del archivo
        print(f"Saving image to: {image_path}")
        
        try:
            with open(image_path, 'wb') as f:
                for chunk in image.chunks():
                    f.write(chunk)
            print(f"Image saved to: {image_path}")
        except Exception as e:
            print(f"Error saving image: {str(e)}")
            return JsonResponse({'status': 'error', 'message': f'Error saving image: {str(e)}'}, status=500)
        
        # Verificar si el archivo se guarda correctamente
        if not os.path.exists(image_path):
            print(f"File not found after saving: {image_path}")
            return JsonResponse({'status': 'error', 'message': 'File not found after saving'}, status=500)
        
        # Instanciar el servicio de IA y realizar el análisis
        ai_service = AIService()
        result = ai_service.analyze_images(image_path)
        
        return JsonResponse({'status': 'success', 'result': result})


class GetTempImageView(View):
    def get(self, request):
        image_path = os.path.join(settings.MEDIA_ROOT, 'tempimg.jpg')
        if os.path.exists(image_path):
            return FileResponse(open(image_path, 'rb'), content_type='image/jpeg')
        else:
            raise Http404("Image not found")


class GetResultPDFView(View):
    def get(self, request):
        pdf_path = os.path.join(settings.MEDIA_ROOT, 'result.pdf')
        if os.path.exists(pdf_path):
            return FileResponse(open(pdf_path, 'rb'), content_type='application/pdf')
        else:
            raise Http404("PDF not found")
