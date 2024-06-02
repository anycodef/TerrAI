from django.http import JsonResponse
from django.views import View

class AIAnalysisView(View):
    def post(self, request):
        data = request.POST
        images = data.get('images')
        
        results = self.analyze_images(images)
        
        return JsonResponse({'results': results})

    def analyze_images(self, images):
        return 'análisis completado'
