from django.urls import path
from .ai_views import AIAnalysisView, GetTempImageView, GetResultPDFView

urlpatterns = [
    path('analyze/', AIAnalysisView.as_view(), name='analyze'),
    path('tempimg/', GetTempImageView.as_view(), name='get_temp_image'),
    path('resultpdf/', GetResultPDFView.as_view(), name='get_result_pdf'),
]
