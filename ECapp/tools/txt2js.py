# get dir of proj
import pathlib,os;
DIR = str(pathlib.Path().resolve());

# import the txt file + data
FILE_IN = open('%s/tmp/txt_test.txt' % DIR,'r');
DATA = FILE_IN.readlines();
FILE_IN.close();

# print(DATA);
TO_JS = '';
for ln in DATA :
	ln_str = '';
	for ch in ln :
		if ch != '\n' :
			ln_str += ch;
		if ch == '\\' :
			ln_str += '\\'
		# else :
		# 	ln_str += '\\n';
	TO_JS += ln_str;

# add a compression algorithm here
# -- CHOOSING TO DO HUFFMAN ENCODING --
def huffman(string) :
	lc = 0;
	symb_set = set();
	symb_cnt = {};
	ch_cnt = len(string);

	# makes set and dict of symbols and freq
	for ch in string :
		if ch not in symb_set :
			symb_set.add(ch);
			symb_cnt[ch] = 1;
		else :
			symb_cnt[ch] += 1;
		#print('%d - %s' % (lc,ch), end='\r');
		lc += 1;
 
	# reformats dict for freq and symbols
	cnt_symb = {};
	for i in symb_cnt :
		if symb_cnt[i] in cnt_symb :
			cnt_symb[symb_cnt[i]].append(i);
		else :
			cnt_symb[symb_cnt[i]] = [i];

	# dict to list for sorting
	list_to_sort = [];
	for i in cnt_symb :
		list_to_sort.append([i,cnt_symb[i]]);

	# sort list according to freq values
	list_to_sort.sort();
	freq_symb_list = list_to_sort;

	# non listed chars w/ probs
	freq_symb_full = [];
	for i in range(0,len(freq_symb_list)) :
		for ch in freq_symb_list[i][1] :
			freq_symb_full.append([freq_symb_list[i][0],ch]);

	#for i in range(0,len(freq_symb_full)) : print(i,freq_symb_full[i]);

	# turning above list into the huffman tree
	loop = 0;
	code_dict = {};
	current_level = freq_symb_full;
	while True :
		len_list = len(current_level);
		ind_list = range(0,len_list-1);
		next_level_probs = [];
		inds_and_probs = [];

		# attain the probs of pairs
		for i in ind_list :
			combined_prob = current_level[i][0]+current_level[i+1][0];
			inds_and_probs.append([i, i+1, combined_prob]);
			next_level_probs.append([combined_prob]);

		# finding minimum pair and their indecies in the char set
		ind = 0;
		min_prob = min(next_level_probs);
		min_pair = None;
		for prob in next_level_probs :
			if prob == min_prob :
				min_pair = inds_and_probs[ind];
				break;
			ind += 1;

		# which letter code is assigned an additional one or zero
		zero = str(current_level[min_pair[1]][1]);
		one = str(current_level[min_pair[0]][1]);
		
		# psuedo node for the tree to put back in the list
		node_id = '%s%s' % (zero, one);
		node = [min_pair[-1],node_id]
		print('new node str -',node_id);
		
		# appending the additional 0/1 to th dictionary, adding a value if needed
		if zero not in code_dict :
			code_dict[zero] = '';

		if one not in code_dict :
			code_dict[one] = '';

		code_dict[zero] += '0';
		code_dict[one] += '1';

		# updating the current_level list
		new_node_in = 0;
		new_level = [];
		ind_list = range(0,len_list);
		for i in ind_list :
			if new_node_in != 0 and i not in [ind,ind+1] :
				new_level.append(current_level[i]);
				# print(i,'old in',current_level[i])
				continue;
			if new_node_in == 0 and i in [ind,ind+1] :
				new_level.append(node);
				# print(i,'new in',current_level[i])
				new_node_in = 1;
				continue;

		print('loop -',loop);
		print('inds to comb -', ind, ind+1);
		print(current_level[0]);
		print(new_level[0]);
		print(code_dict);
		# early break for testing purposes
		if loop == 1 :
			break;
		loop += 1; print();
		current_level = new_level;





huffman(TO_JS);


# with the compressed txt put into js file, then need to write decompressor in js

OUTP = '''const TXT_TEST = '%s';
export default TXT_TEST;
''' % TO_JS;

# print into a JSON file
FILE_OUT = open('%s/tmp/test.js' % DIR, 'w');
FILE_OUT.write(OUTP);
FILE_OUT.close();