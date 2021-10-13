from django.http import HttpResponse as response;
from django.template import loader as ldr;
from django.shortcuts import render as rnd;

def home(request) :
	# long way round
	#tmp = ldr.get_template('home.html');
	#return response(tmp.render({},request));
	# shortcut way
	return rnd(request,'home.html');