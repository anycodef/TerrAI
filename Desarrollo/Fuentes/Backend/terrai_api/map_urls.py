from django.urls import path
from .views import MapDataView

urlpatterns = [
    path('data/', MapDataView.as_view(), name='map-data'),
]
