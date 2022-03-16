from django.urls import path
from .views import FilmedMovies


urlpatterns = [
    path('movies/', FilmedMovies.as_view())
]
