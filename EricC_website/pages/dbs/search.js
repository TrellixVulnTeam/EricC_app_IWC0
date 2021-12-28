var field = '';

function testF() {
	console.log('before: ' + field);
	var search_inp = document.getElementById("search_field").value;
	field = search_inp;
	console.log('after: ' + field);
}