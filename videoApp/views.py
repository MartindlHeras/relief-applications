from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse

from videoApp.models import History, Bookmarks
from videoApp.serializers import HistorySerializer, BookmarksSerializer

# Create your views here.
@csrf_exempt
def historyApi(request):
    if request.method == 'GET':
        history = History.objects.all()
        history_serializer = HistorySerializer(history, many=True)
        return JsonResponse(history_serializer.data, safe=False)

    elif request.method == 'POST':
        history_data = JSONParser().parse(request)
        history_serializer = HistorySerializer(data=history_data, many=True)
        if history_serializer.is_valid():
            history_serializer.save()
            return JsonResponse("Ok", safe=False)
        return JsonResponse("Error", safe=False)

@csrf_exempt
def bookmarksApi(request):
    if request.method == 'GET':
        bookmarks = Bookmarks.objects.all()
        bookmarks_serializer = BookmarksSerializer(bookmarks, many=True)
        return JsonResponse(bookmarks_serializer.data, safe=False)
        
    elif request.method == 'POST':
        bookmarks_data = JSONParser().parse(request)
        bookmarks_serializer = BookmarksSerializer(data=bookmarks_data, many=True)
        if bookmarks_serializer.is_valid():
            bookmarks_serializer.save()
            return JsonResponse("Ok", safe=False)
        return JsonResponse("Error", safe=False)
