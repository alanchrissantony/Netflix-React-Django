from django.urls import path
from .views import Movies


urlpatterns = [
    path('movies/', Movies.as_view())
]
