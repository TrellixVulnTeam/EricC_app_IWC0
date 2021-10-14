from django.shortcuts import render as rnd;

def home(request) :
	return rnd(request, 'home.html');

def projects(request) :
	return rnd(request, 'projects.html');

def notes(request) :
	return rnd(request, 'notes.html');

def about(request) :
	return rnd(request, 'about.html');

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