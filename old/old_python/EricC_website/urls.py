"""EricC_website URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin;
from django.urls import path;
from django.views.generic.base import TemplateView;
from django.contrib.auth import views as auth_vw;
from . import views as vw;

urlpatterns = [
    path('admin/', admin.site.urls),
    #path('', TemplateView.as_view(template_name='home.html'), name='home'),
    path('',vw.home,name='home'),
    path('projects',vw.projects,name='projects'),
    path('notes',vw.notes,name='notes'),
    path('about',vw.about,name='about'),

    # auth
    path('login', auth_vw.LoginView.as_view(template_name='login.html'),name='login'),
    path('logout', auth_vw.LogoutView.as_view(),name='logout'),
    path('profile',vw.ProfileView.as_view(),name='profile'),

]

# for django own
# path ('accounts/',include(;django.contrib.auth.urls)),