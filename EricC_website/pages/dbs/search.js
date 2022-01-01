// GLOBAL VARIABLES FOR PAGES STATE CHANGES //
var field = '';
var data = JSON.parse("{{data|escapejs}}");

var name_search = true;
var var_search = false;


// BUTTON FUNCTIONS //

function clear_search() {
	document.getElementById("search_field").value = '';
	field = '';
}

function search_for_var() {
	if (var_search == false && name_search == true) {
		var_search = true;
		name_search = false;
	}
}

function search_for_name() {
	if (name_search == false && var_search == true) {
		name_search = true;
		var_search = false;
	}
}

// SEARCH FIELD FUNCTIONS //

function update_field() {
	console.log('before: ' + field);
	var search_inp = document.getElementById("search_field").value;
	field = search_inp;
	console.log('after: ' + field);
}


function search() { // not needed..?
	return 0;
}


// for implementing a search function
function similarity(str0, str1) {
	
}

function search_results() {
	if (field == '') {
		let displayed_data = data;
		document.getElementById('result_wrapper').innerHTML = '';
		for (let i = 0; i < data.length; i++) {
			document.getElementById('result_wrapper').innerHTML += ''
			+ '<div class="result_box">'
			+ '<div>'
			+ '<span class="result_id">' + data[i]['id'] + '</span>'
			+ '<span class="result_name">' + data[i]['name'] + '</span>'
			+ '</div>'
			+ '<div class="result_eqn">$ ' + data[i]['eqn'] + ' $</div>'
			+ '<div>' + 'similarity: ' + data[i]['similarity'] + '</div>'
			+ '<div class="result_view">' + '<a class="view_link">view</a>' + '</div>'
			+ '</div>';
		}
		MathJax.Hub.Queue(['Typeset', MathJax.Hub])
	}
	else {
		let displayed_data = search();
		document.getElementById('result_wrapper').innerHTML = 'not done yet';
		let current_search = field;
		if (var_search == true) {
			for (let i = 0; i < data.length; i++) {
				
			}
		}
		if (name_search == true) {
			for (let i = 0; i < data.length; i++) {

			}
		}
	}
}