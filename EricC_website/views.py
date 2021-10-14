from django.shortcuts import render as rnd;
from django.views.generic.base import TemplateView;
from django.contrib.auth.mixins import LoginRequiredMixin;

def home(request) :
	return rnd(request, 'home.html');

def projects(request) :
	return rnd(request, 'projects.html');

def notes(request) :
	return rnd(request, 'notes.html');

def about(request) :
	return rnd(request, 'about.html');

class ProfileView(LoginRequiredMixin,TemplateView) :
	template_name = 'profile.html';


################################################################################
################################################################################

# from django.http import HttpResponse as response;
# from django.template import loader as ldr;
# def index(request) :
# 	# long way round
# 	#tmp = ldr.get_template('home.html');
# 	#return response(tmp.render({},request));
# 	# shortcut way
# 	return rnd(request,'index.html');