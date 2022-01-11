from django.db import models

# Create your models here.

class History(models.Model):
    Url = models.CharField(max_length=128)

class Bookmarks(models.Model):
    Url = models.CharField(max_length=128)
