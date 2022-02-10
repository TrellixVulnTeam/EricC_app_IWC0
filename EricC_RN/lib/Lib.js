// generates randomised string of length: 'len'
export function gen_id(len) {
	var ID = Math.random().toString(36).substr(2,len);
	console.log('ID: ' + ID);
	return ID;
}


// OPENER/LOADER, PARSER AND CONVERTER FOR FORMATTED TXT FILES

/* Notes + info for the text file formatting & manipulation

## TXT FILE TAGSET ##
MAJ = [# ... #] // major tag
COM = [- ... -] // comment tag
MIN = [= ... =] // minor/detail tag

## MAJOR TAGS ##
TTL 			- title
HDR 			- header
TXT 			- text
EQN 			- equation
REF 			- references
PLT 			- plot
IMG 			- image
CODE 			- code (monospaced font)
CODE/LANG 		- code w/ syntax highlighting for language

END 			- end of article

DATE 			- date of article writing
AUTHOR 			- author article was written by
SEARCH_TERMS 	- relevent search terms of article

________________________________________________________ 
-- note: all above end are 'within' article tags, rest 	|
--       are for authoring info and search parameters. 	|
--														|
--   so: if END used in wrong place, need to produce 	|
--       an error message saying as such.				|
________________________________________________________|

## MINOR/DETAIL TAGS ##
PS 				- paragraph separator


*/