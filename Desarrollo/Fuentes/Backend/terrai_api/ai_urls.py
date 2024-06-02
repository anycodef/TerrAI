from django.urls import path
from .ai_views import AIAnalysisView

urlpatterns = [
    path('analyze/', AIAnalysisView.as_view(), name='analyze'),
]
