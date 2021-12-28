var field = '';
var data = JSON.parse("{{data|escapejs}}");

function update_field() {
	console.log('before: ' + field);
	var search_inp = document.getElementById("search_field").value;
	field = search_inp;
	console.log('after: ' + field);
}

function clear_search() {
	document.getElementById("search_field").value = '';
	field = '';
}

function search() {
	return 0;
}

function search_results() {
	if (field == '') {
		let displayed_data = data;
		document.getElementById('search_results').innerHTML = '';
		for (let i = 0; i < data.length; i++) {
			document.getElementById('search_results').innerHTML += '<div class="result_row">'
			+ '<span class="result_id">id: ' + data[i]['id'] + '</span>'
			+ '<span class="result_name">name: ' + data[i]['name'] + '</span>'
			+ '<span class="result_eqn">$ ' + data[i]['eqn'] + ' $</span>'
			+ '</div>';
		}
		MathJax.Hub.Queue(['Typeset', MathJax.Hub])
	}
	else {
		let displayed_data = search();
		document.getElementById('search_results').innerHTML = 'not done yet'
	}
}