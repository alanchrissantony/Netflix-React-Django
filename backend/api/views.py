from django.shortcuts import render
from django.http import JsonResponse
from django.views import View
from .models import filmedmovie, netflixorginals, horror, action, romance, documentary
from .serializers import FilmedMovieSerializer, NetflixOriginalsSerializer, HorrorSerializer, ActionSerializer, RomanceSerializer, DocumentarySerializer




# Create your views here.
class FilmedMovies(View):
    def get(self, request, *args, **kwargs):
        movies= filmedmovie.objects.all()
        data = FilmedMovieSerializer(movies, many= True)

        return JsonResponse(data.data, safe=False)


class NetflixOriginals(View):
    def get(self, request, *args, **kwargs):
        movies= netflixorginals.objects.all()
        print(netflixorginals.objects.all())
        data = NetflixOriginalsSerializer(movies, many= True)

        return JsonResponse(data.data, safe=False)
        

class HorrorMovies(View):
    def get(self, request, *args, **kwargs):
        movies= horror.objects.all()
        data = HorrorSerializer(movies, many= True)

        return JsonResponse(data.data, safe=False)


class ActionMovies(View):
    def get(self, request, *args, **kwargs):
        movies= action.objects.all()
        print(netflixorginals.objects.all())
        data = ActionSerializer(movies, many= True)

        return JsonResponse(data.data, safe=False)


class RomanceMovies(View):
    def get(self, request, *args, **kwargs):
        movies= romance.objects.all()
        data = RomanceSerializer(movies, many= True)

        return JsonResponse(data.data, safe=False)


class DocumentaryMovies(View):
    def get(self, request, *args, **kwargs):
        movies= documentary.objects.all()
        print(netflixorginals.objects.all())
        data = DocumentarySerializer(movies, many= True)

        return JsonResponse(data.data, safe=False)