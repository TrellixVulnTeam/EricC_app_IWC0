import sys,os,sqlite3;
import numpy as np;

def int_lst(list_in) :
	return [int(i) for i in list_in];

def lst_conv(list_in) :
	return [i for i in list_in];

def reverse(list_in) :
	i_list = range(0,len(list_in));
	list_out = [];
	for i in i_list :
		ind = i_list[-1] - i;
		list_out.append(list_in[ind]);
	return list_out;

def fnames(folder) :
	flnm_tmp = next(os.walk('%s' % folder),(None, None,[]))[2]  # [] if no file
	return reverse(flnm_tmp);

filenames = fnames('in/')
print(filenames);

ind_list = np.loadtxt('ind.txt');
# print(ind_list);
inds = int_lst(ind_list);
print(inds);
index = inds[-1];

ind_file = open('ind.txt','a');

conn = sqlite3.connect('eqns.db');
cursor = conn.cursor();

for f in filenames :
	index += 1;
	ind_file.write('\n%d' % index);
	
	print();
	tmp = np.loadtxt('in/%s' % f, dtype=str, delimiter='\n');
	inputs = lst_conv(tmp);

	for i in inputs : print(i);

	cmd = '''INSERT INTO "eqns" VALUES (%d,"%s","%s","%s","%s","%s","%s","%s","%s")''' % (index,inputs[0],inputs[1],inputs[2],inputs[3],inputs[4],inputs[5],inputs[6],inputs[7])
	print(cmd);

	cursor.execute(cmd);
	data=cursor.execute('''SELECT * FROM "eqns"''');
	
	for row in data : print(row);


	os.popen('mv in/%s done/' % f);




conn.commit();
conn.close();
ind_file.close();