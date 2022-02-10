// generates randomised string of length: 'len'
function gen_id(len) {
	var ID = Math.random().toString(36).substr(2,len);
	console.log('ID: ' + ID);
	return ID;
}