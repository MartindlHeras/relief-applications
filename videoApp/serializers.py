from django.db.models import fields
from rest_framework import serializers
from videoApp.models import History, Bookmarks

class HistorySerializer(serializers.ModelSerializer):
    class Meta:
        model = History
        fields = ('id','Url')

class BookmarksSerializer(serializers.ModelSerializer):
    class Meta:
        model = Bookmarks
        fields = ('id','Url')