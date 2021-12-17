from django.contrib import admin;
from django.urls import path;
from django.views.generic.base import TemplateView as tmpv;
from django.contrib.auth import views as auth;

from . import pages;

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', pages.home, name='home'),
    path('about', pages.about, name='about'),
    path('contact', pages.contact, name='contact')
]



# profile stuff
# path('profile', pages.profile, name='profile'),
# path('login', auth.LoginView.as_view(template_name='login.html'), name='login'),
# path('logout', auth.LogoutView.as_view(), name='logout')