import json
from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login
from django.http import JsonResponse
from django.views import View
from django.views.decorators.csrf import csrf_exempt
from django.utils.decorators import method_decorator
import os
from django.conf import settings
from .ai_service import AIService

@method_decorator(csrf_exempt, name='dispatch')
class AIAnalysisView(View):
    def post(self, request):
        # verificar si hay archivos en la solicitud
        if 'file' not in request.FILES:
            return JsonResponse({'status': 'error', 'message': 'No file provided'}, status=400)

        # obtener el archivo de la solicitud
        image = request.FILES['file']
     
        # definir la ruta para almacenar temporalmente la imagen
        image_path = os.path.join(settings.MEDIA_ROOT, 'tempimg.jpg')
     
        # escribir la imagen en el disco
        with open(image_path, 'wb') as f:
            for chunk in image.chunks():
                f.write(chunk)

        # instanciar el servicio de IA y realizar el análisis
        ai_service = AIService()
        result = ai_service.analyze_images(image_path)
     
        # devolver el resultado del análisis como respuesta JSON
        return JsonResponse({'status': 'success', 'result': result})

@method_decorator(csrf_exempt, name='dispatch')
class LoginView(View):
    def post(self, request):
        data = json.loads(request.body)
        email = data.get('email')
        password = data.get('password')
     
        user = authenticate(request, username=email, password=password)
        if user is not None:
            login(request, user)
            return JsonResponse({'message': 'Login successful'})
        else:
            return JsonResponse({'error': 'Invalid credentials'}, status=400)

@method_decorator(csrf_exempt, name='dispatch')
class RegisterView(View):
    def post(self, request):
        data = json.loads(request.body)
        email = data.get('email')
        password = data.get('password')
     
        user = User.objects.create_user(username=email, email=email, password=password)
        return JsonResponse({'message': 'User registered successfully'})

@method_decorator(csrf_exempt, name='dispatch')
class MapDataView(View):
    def get(self, request):
        # lógica para obtener datos del mapa
        data = {"key": "value"}
        return JsonResponse(data)
