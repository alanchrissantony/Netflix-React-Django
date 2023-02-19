from django.shortcuts import render
from django.http import JsonResponse
from unicodedata import category
from django.views import View
from .models import Movie
from .serializers import MovieSerializer

# Create your views here.

class Movies(View):
    def get(self, request, *args, **kwargs):
        movies= Movie.objects.all()
        data = MovieSerializer(movies, many= True)

        return JsonResponse(data.data, safe=False)


class PremiereMovies(View):
    def get(self, request, *args, **kwargs):
        movies= Movie.objects.filter(premiere='YES')
        data = MovieSerializer(movies, many= True)

        return JsonResponse(data.data, safe=False)


class NetflixOriginals(View):
    def get(self, request, *args, **kwargs):
        movies= Movie.objects.filter(category ='Originals')

        data = MovieSerializer(movies, many= True)

        return JsonResponse(data.data, safe=False)
        

class HorrorMovies(View):
    def get(self, request, *args, **kwargs):
        movies= Movie.objects.filter(category ='Horror')
        data = MovieSerializer(movies, many= True)

        return JsonResponse(data.data, safe=False)


class ActionMovies(View):
    def get(self, request, *args, **kwargs):
        movies= Movie.objects.filter(category ='Action')
        data = MovieSerializer(movies, many= True)

        return JsonResponse(data.data, safe=False)


class RomanceMovies(View):
    def get(self, request, *args, **kwargs):
        movies= Movie.objects.all()
        data = MovieSerializer(movies, many= True)

        return JsonResponse(data.data, safe=False)


class DocumentaryMovies(View):
    def get(self, request, *args, **kwargs):
        movies= Movie.objects.all()

        data = MovieSerializer(movies, many= True)

        return JsonResponse(data.data, safe=False)


class TrendingMovies(View):
    def get(self, request, *args, **kwargs):
        movies= Movie.objects.filter(status ='Trending')
        data = MovieSerializer(movies, many= True)

        return JsonResponse(data.data, safe=False)


class PopularMovies(View):
    def get(self, request, *args, **kwargs):
        movies= Movie.objects.filter(status ='Popular')
        data = MovieSerializer(movies, many= True)

        return JsonResponse(data.data, safe=False)



class NewReleaseMovies(View):
    def get(self, request, *args, **kwargs):
        movies= Movie.objects.filter(status ='New Release')
        data = MovieSerializer(movies, many= True)

        return JsonResponse(data.data, safe=False)


class MostWatchedMovies(View):
    def get(self, request, *args, **kwargs):
        movies= Movie.objects.filter(status ='Most Watched')
        data = MovieSerializer(movies, many= True)

        return JsonResponse(data.data, safe=False)


class MovieDetails(View):
    def get(self, request, *args, **kwargs):
        id = request.path.split('/')[3]
        movies= Movie.objects.filter(uuid=id)

        data = MovieSerializer(movies, many= True)

        return JsonResponse(data.data, safe=False)
