from django.urls import path
from .views import FilmedMovies, NetflixOriginals


urlpatterns = [
    path('index/filmed/', FilmedMovies.as_view()),
    path('index/netflix/originals', NetflixOriginals.as_view()),
    path('index/horror/', FilmedMovies.as_view()),
    path('index/action/', FilmedMovies.as_view()),
    path('index/romance/', FilmedMovies.as_view()),
    path('index/documentary/', FilmedMovies.as_view()),
]
