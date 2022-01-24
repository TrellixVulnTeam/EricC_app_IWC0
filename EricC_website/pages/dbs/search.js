// GLOBAL VARIABLES FOR PAGES STATE CHANGES //
var field = '';
var data = JSON.parse("{{data|escapejs}}");

var name_search = true;
var var_search = false;
var list_view = true;
var box_view = false;

const symbols_en =[['a','A'],['b','B'],
					['c','C'],['d','D'],
					['e','E'],['f','F'],
					['g','G'],['h','H'],
					['i','I'],['j','J'],
					['k','K'],['l','L'],
					['m','M'],['n','N'],
					['o','O'],['p','P'],
					['q','Q'],['r','R'],
					['s','S'],['t','T'],
					['u','U'],['v','V'],
					['w','W'],['x','X'],
					['y','Y'],['z','Z']];

const symbols_gr = [['phi','varphi','Phi'],
					['theta','vartheta','Theta'],
					['epsilon','varepsilon','Epsilon'],
					['rho','varrho','Rho'],
					['pi','varpi','Pi'],
					['sigma','varsigma','Sigma'],
					['kappa','varkappa','Kappa'],
					['alpha','Alpha'],
					['beta','Beta'],
					['gamma','Gamma'],
					['delta','Delta'],
					['zeta','Zeta'],
					['eta','Eta'],
					['iota','Iota'],
					['lambda','Lambda'],
					['mu','Mu'],
					['nu','Nu'],
					['xi','Xi'],
					['omicron','Omicron'],
					['tau','Tau'],
					['upsilon','Upsilon'],
					['chi','Chi'],
					['psi','Psi'],
					['omega','Omega'],
					['digamma','Digamma']];

const symbols_ma = ['partial','infty','ell','nabla','int','hbar','prime','sqrt','dot','ddot','hat','vec','sum','bar','tilde','overline','underline','oint','prod','sin','cos','tan','sinh',''];

// BUTTON FUNCTIONS //

function clear_search() {
	document.getElementById("search_field").value = '';
	field = '';
}

function search_for_var() {
	var ns = document.getElementById("name_search");
	var vs = document.getElementById("var_search");
	var search_inp = document.getElementById("search_field");
	search_inp.placeholder = 'Type Var symbol...';	
	
	if (var_search == false && name_search == true) {
		var_search = true;
		name_search = false;
	}
	// console.log(name_search,var_search);
	if (var_search == true) {
		vs.style.boxShadow = '0pt 0pt 2pt 1pt rgba(240, 240, 240, 1.0)';
		vs.style.color = 'rgba(240, 240, 240, 1.0)';
		vs.style.backgroundColor = 'var(--dark)';

		ns.style.boxShadow = '0pt 0pt 2pt 1pt var(--dark)';
		ns.style.color = 'var(--dark)';
		ns.style.backgroundColor = 'var(--light)';
	}
}

function search_for_name() {
	var ns = document.getElementById("name_search");
	var vs = document.getElementById("var_search");
	var search_inp = document.getElementById("search_field");
	search_inp.placeholder = 'Type Eqn name...';

	if (name_search == false && var_search == true) {
		name_search = true;
		var_search = false;
	}
	// console.log(name_search,var_search);
	if (name_search == true) {
		ns.style.boxShadow = '0pt 0pt 2pt 1pt rgba(240, 240, 240, 1.0)';
		ns.style.color = 'rgba(240, 240, 240, 1.0)';
		ns.style.backgroundColor = 'var(--dark)';

		vs.style.boxShadow = '0pt 0pt 2pt 1pt var(--dark)';
		vs.style.color = 'var(--dark)';
		vs.style.backgroundColor = 'var(--light)';
	}
}

function view_as_box() {
	var lv = document.getElementById("list_view");
	var bv = document.getElementById("box_view");
	var wrap = document.getElementById("result_wrapper");
	wrap.style = 'border-style: solid solid solid solid; border-width: 1px; border-color: var(--dark); padding: 4pt; display: flex; flex-wrap: wrap; flex-direction: row;';


	if (box_view == false && list_view == true) {
		box_view = true;
		list_view = false;
	}
	if (box_view == true) {
		bv.style.boxShadow = '0pt 0pt 2pt 1pt rgba(240, 240, 240, 1.0)';
		bv.style.color = 'rgba(240, 240, 240, 1.0)';
		bv.style.backgroundColor = 'var(--dark)';

		lv.style.boxShadow = '0pt 0pt 2pt 1pt var(--dark)';
		lv.style.color = 'var(--dark)';
		lv.style.backgroundColor = 'var(--light)';
	}
}

function view_as_list() {
	var lv = document.getElementById("list_view");
	var bv = document.getElementById("box_view");
	var wrap = document.getElementById("result_wrapper");
	wrap.style = 'border-style: solid solid solid solid; border-width: 1px; border-color: var(--dark); padding: 4pt;';

	if (list_view == false && box_view == true) {
		list_view = true;
		box_view = false;
	}
	if (list_view == true) {
		lv.style.boxShadow = '0pt 0pt 2pt 1pt rgba(240, 240, 240, 1.0)';
		lv.style.color = 'rgba(240, 240, 240, 1.0)';
		lv.style.backgroundColor = 'var(--dark)';

		bv.style.boxShadow = '0pt 0pt 2pt 1pt var(--dark)';
		bv.style.color = 'var(--dark)';
		bv.style.backgroundColor = 'var(--light)';
	}	
}

// SEARCH FIELD FUNCTIONS //

function update_field() {
	console.log('before: ' + field);
	var search_inp = document.getElementById("search_field").value;
	field = search_inp;
	console.log('after: ' + field);
}

function search(term) { // not needed..?



	if (var_search == true) {
		console.log(term);

	}
	if (name_search == true) {

	}
}

// for implementing a search function
function similarity(str0, str1) {

}

function list_result(data_line) {
	return(''
	+ '<div class="result_line">'
	+ '<span class="line_result_id">id: ' + data_line['id'] + '</span>'
	+ '<span class="vert_sep"></span>'
	+ '<span class="line_result_name">' + data_line['name'] + '</span>'
	+ '<span class="vert_sep"></span>'
	+ '<span class="line_result_eqn">$ ' + data_line['eqn'] + ' $</span>'
	+ '<span class="vert_sep"></span>'
	+ '<span class="line_result_view">' + '<a class="view_link">view</a>' + '</span>'
	+ '</div>');
}

function box_result(data_line) {
	return(''
	+ '<div class="result_box">'
	+ '<div>'
	+ '<span class="box_result_name">' + data_line['name'] + '</span>'
	+ '</div>'
	+ '<div class="box_result_eqn">$ ' + data_line['eqn'] + ' $</div>'
	+ '<span class="box_result_id">id: ' + data_line['id'] + '</span>'
	+ '<div>' + 'similarity: ' + data_line['similarity'] + '</div>'
	+ '<div class="box_result_view">' + '<a class="view_link">view</a>' + '</div>'
	+ '</div>');
}

function search_results() {
	var lp = document.getElementById('result_wrapper');
	if (field == '') {
		let displayed_data = data;
		lp.innerHTML = '';
		if (list_view == true) {
			for (let i = 0; i < data.length; i++) {
				lp.innerHTML += list_result(data[i]);
			}
		}
		if (box_view == true) {
			for (let i = 0; i < data.length; i++) {
				lp.innerHTML += box_result(data[i]);
			}
		}
		MathJax.Hub.Queue(['Typeset', MathJax.Hub])
	}
	else {
		let current_search = field;
		let displayed_data = search(current_search);
		document.getElementById('result_wrapper').innerHTML = 'not done yet';
	}
}