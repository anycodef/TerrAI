from django.http import JsonResponse
from django.views import View
from .ai_service import AIService

class AIAnalysisView(View):
    def post(self, request):
        data = request.POST
        images = data.get('images')
        
        results = self.analyze_images(images)
        
        return JsonResponse({'results': results})

    def analyze_images(self, images):
        ai_service = AIService()
        return ai_service.analyze_images(images)
