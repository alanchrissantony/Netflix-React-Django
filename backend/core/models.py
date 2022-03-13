from datetime import datetime
from django.db import models

# Create your models here.

class User(models.Model):
    email = models.CharField(unique=True, max_length=255)
    password =  models.CharField(max_length=255)
    createdAt = datetime.now()