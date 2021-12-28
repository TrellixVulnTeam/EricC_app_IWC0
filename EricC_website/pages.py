from django.http import HttpResponse;
from django.template import loader as ldr;
from django.shortcuts import render as rnd;
import sqlite3 as sql;
import os,sys;
from json import dumps;

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
	# flnm_tmp = next(os.walk('./'),(None, None,[]))[2]  # [] if no file
	# print(flnm_tmp);
	def get_dat() :
		db_conn = sql.connect('./EricC_website/pages/dbs/eqns.db');
		db_curs = db_conn.cursor();
		# print('successful conn to db');
		db_data = db_curs.execute('''SELECT * FROM "eqns"''');
		db_out = [];
		for dat in db_data : 
			entry = {
			'id': dat[0],
			'name': dat[1],
			'eqn': dat[2],
			'vars': dat[3],
			'defs': dat[4],
			'other_names': dat[5],
			'other_eqns': dat[6],
			'other_vars': dat[7],
			'other_defs': dat[8]
			};
			# print(entry);
			db_out.append(entry);

		db_conn.close();
		return db_out;

	tmp_dat = get_dat();
	data_out = dumps(tmp_dat);

	return rnd(request, 'projects/eqn/eqn_search.html', {'data': data_out});

def eqn_view(request) :
	return rnd(request, 'projects/eqn/eqn_view.html');




# def profile(request) :
# 	return rnd(request, 'profile.html');