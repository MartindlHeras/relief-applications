from django.conf.urls import url
from videoApp import views

urlpatterns = [
    url(r'^history/$', views.historyApi),
    url(r'^history/([0-9]+)$', views.historyApi),
    url(r'^bookmarks/$', views.bookmarksApi),
    url(r'^bookmarks/([0-9]+)$', views.bookmarksApi)
]