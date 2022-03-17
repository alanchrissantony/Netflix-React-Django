from django.urls import path
from .views import PremiereMovies, NetflixOriginals, HorrorMovies, ActionMovies, RomanceMovies, DocumentaryMovies, Movies, TrendingMovies, PopularMovies, NewReleaseMovies, MostWatchedMovies


urlpatterns = [
    path('movies/all', Movies.as_view()),
    path('movies/premiere/', PremiereMovies.as_view()),
    path('movies/originals', NetflixOriginals.as_view()),
    path('movies/horror/', HorrorMovies.as_view()),
    path('movies/action/', ActionMovies.as_view()),
    path('movies/romance/', RomanceMovies.as_view()),
    path('movies/documentary/', DocumentaryMovies.as_view()),
    path('movies/trending/', TrendingMovies.as_view()),
    path('movies/popular/', PopularMovies.as_view()),
    path('movies/newrelease/', NewReleaseMovies.as_view()),
    path('movies/mostwatched/', MostWatchedMovies.as_view()),
]
