from django.http import HttpResponse;
from django.template import loader as ldr;
from django.shortcuts import render as rnd;

def home(request) :
	return rnd(request, 'home.html');

def contact(request) :
	return rnd(request, 'contact.html');

def about(request) :
	return rnd(request, 'about.html');

def projects(request) :
	return rnd(request, 'projects.html');

def education(request) :
	return rnd(request, 'education.html');

def eqn_search(request) :
	return rnd(request, 'projects/eqn/eqn_search.html');

def eqn_view(request) :
	return rnd(request, 'projects/eqn/eqn_view.html');




# def profile(request) :
# 	return rnd(request, 'profile.html');