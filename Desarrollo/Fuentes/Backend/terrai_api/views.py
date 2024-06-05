import json
from django.http import JsonResponse
from django.views import View
from django.views.decorators.csrf import csrf_exempt
from django.utils.decorators import method_decorator
import os
from django.conf import settings
from .ai_service import AIService

# datos de usuario en memoria
users = {
    "wsdwsd@asdfg": "123456",
}

@method_decorator(csrf_exempt, name='dispatch')
class AIAnalysisView(View):
    def post(self, request):
        if 'file' not in request.FILES:
            return JsonResponse({'status': 'error', 'message': 'no file provided'}, status=400)

        image = request.FILES['file']
        
        # definir la ruta para almacenar temporalmente la imagen
        image_path = os.path.join(settings.MEDIA_ROOT, 'tempimg.jpg')
        
        # agregar un registro para verificar la ruta del archivo
        print(f"saving image to: {image_path}")
        
        try:
            with open(image_path, 'wb') as f:
                for chunk in image.chunks():
                    f.write(chunk)
            print(f"image saved to: {image_path}")
        except Exception as e:
            print(f"error saving image: {str(e)}")
            return JsonResponse({'status': 'error', 'message': f'error saving image: {str(e)}'}, status=500)
        
        # instanciar el servicio de ia y realizar el análisis
        ai_service = AIService()
        result = ai_service.analyze_images(image_path)
        
        return JsonResponse({'status': 'success', 'result': result})

@method_decorator(csrf_exempt, name='dispatch')
class LoginView(View):
    def post(self, request):
        data = json.loads(request.body)
        email = data.get('email')
        password = data.get('password')
        
        print(f"received login attempt: {email}, {password}")  # agregar mensaje de depuración
        
        # verificar credenciales
        if email in users and users[email] == password:
            print("authentication successful")  # mensaje de depuración
            return JsonResponse({'message': 'login successful'})
        else:
            print("authentication failed")  # mensaje de depuración
            return JsonResponse({'error': 'invalid credentials'}, status=400)

@method_decorator(csrf_exempt, name='dispatch')
class RegisterView(View):
    def post(self, request):
        data = json.loads(request.body)
        email = data.get('email')
        password = data.get('password')
        
        # registrar nuevo usuario
        if email in users:
            return JsonResponse({'error': 'user already exists'}, status=400)
        users[email] = password
        return JsonResponse({'message': 'user registered successfully'})

@method_decorator(csrf_exempt, name='dispatch')
class MapDataView(View):
    def get(self, request):
        # lógica para obtener datos del mapa
        data = {"key": "value"}
        return JsonResponse(data)
