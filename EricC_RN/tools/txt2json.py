# get dir of proj
import pathlib;
DIR = str(pathlib.Path().resolve());

# import the txt file + data
FILE_IN = open('%s/tmp/txt_test.txt' % DIR,'r');
DATA = FILE_IN.readlines();
FILE_IN.close();

# print(DATA);
TO_JSON = '';
for ln in DATA :
	ln_str = '';
	for ch in ln :
		if ch != '\n' :
			ln_str += ch;
		if ch == '\\' :
			ln_str += '\\'
		# else :
		# 	ln_str += '\\n';
	TO_JSON += ln_str;

# print(TO_JSON);

OUTP = '''{
	"text" : "%s"
}
''' % TO_JSON;

# print into a JSON file
FILE_OUT = open('%s/tmp/test.json' % DIR, 'w');
FILE_OUT.write(OUTP);
FILE_OUT.close();