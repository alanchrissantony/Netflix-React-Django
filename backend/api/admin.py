from django.contrib import admin
from .models import filmedmovie, netflixorginals, action, horror, romance, documentary

# Register your models here.
admin.site.register(filmedmovie)
admin.site.register(netflixorginals)
admin.site.register(action)
admin.site.register(horror)
admin.site.register(romance)
admin.site.register(documentary)