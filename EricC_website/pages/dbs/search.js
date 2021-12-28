var field = '';
var data = JSON.parse("{{data|escapejs}}");
console.log(data);

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

function search_results() {

}