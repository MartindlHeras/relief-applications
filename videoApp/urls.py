from django.urls.conf import re_path
from videoApp import views

urlpatterns = [
    re_path(r'^history/$', views.historyApi),
    re_path(r'^bookmarks/$', views.bookmarksApi)
]