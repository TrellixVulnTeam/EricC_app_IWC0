from django.http import HttpResponse;
from django.template import loader as ldr;
from django.shortcuts import render as rnd;

def home(request) :
	return rnd(request, 'home.html');

def contact(request) :
	return rnd(request, 'contact.html');

def about(request) :
	return rnd(request, 'about.html');