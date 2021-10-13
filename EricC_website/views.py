from django.http import HttpResponse as response;

def index(request) :
	return response('homepage');