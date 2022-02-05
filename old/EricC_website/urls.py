from django.contrib import admin;
from django.urls import path;
from django.views.generic.base import TemplateView as tmpv;
from django.contrib.auth import views as auth;
from django.contrib.staticfiles.storage import staticfiles_storage;
from django.views.generic.base import RedirectView;
from django.conf import settings;

from . import pages;

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', pages.home, name='home'),
    path('about', pages.about, name='about'),
    path('contact', pages.contact, name='contact'),
    path('projects', pages.projects, name='projects'),
    path('education', pages.education, name='education'),
    path('projects/eqn/search', pages.eqn_search, name='eqn_search'),


    # favicon
    path('favicon.ico',
        RedirectView.as_view(url=staticfiles_storage.url('favicon.ico')),
    ),
]



# profile stuff
# path('profile', pages.profile, name='profile'),
# path('login', auth.LoginView.as_view(template_name='login.html'), name='login'),
# path('logout', auth.LogoutView.as_view(), name='logout')