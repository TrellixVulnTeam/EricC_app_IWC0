// imports as they will be needed
import React, { Component } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, Dimensions, Platform, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import * as FileSystem from 'expo-file-system';

import { colour } from './Colours';

// generates randomised string of length: 'len'
export function gen_id(len) {
	var ID = Math.random().toString(36).substr(2,len);
	console.log('ID: ' + ID);
	return ID;
}


// OPENER/LOADER, PARSER AND CONVERTER FOR FORMATTED TXT FILES

/* Notes + info for the text file formatting & manipulation

## TXT FILE TAGSET ##
DOC = [? ... ?] // document tag -- this is only a maybe, might not need it
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

AUTH 			- author article was written by
DATE 			- date of article writing -- date follows author name
SEARCH_TERMS 	- relevent search terms of article -- these at the end

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


export function ld_file(file_path) {
	let uri = 'file://' + file_path;
	//let txt = FileSystem.readAsStringAsync(uri);
	let dir = FileSystem.readDirectoryAsync(FileSystem.documentDirectory);
	console.log('' + dir);
}

function tag_parse(text) {

}

// display class/function