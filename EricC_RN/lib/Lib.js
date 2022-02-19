// imports as they will be needed
import React, { Component } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, Dimensions, Platform, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

//import { Dirs, FileSystem } from 'react-native-file-access';

//import * as ExpoFS from 'expo-file-system';

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
-- note: all above END are 'within' article tags, rest 	|
--       are for authoring info and search parameters. 	|
--														|
--   so: if END used in wrong place, need to produce 	|
--       an error message saying as such.				|
________________________________________________________|

## MINOR/DETAIL TAGS ##
PS 				- paragraph separator

*/


export class Txt_loader extends Component {
	constructor(props) {
		super(props);
		this.state = {
			fname: this.props.fname,
		};
		this.componentDidMount = this.componentDidMount.bind(this);
		this.ld_json = this.ld_json.bind(this);
		this.tag_parse = this.tag_parse.bind(this);
	}

	componentDidMount() {
		console.log(' ');
		this.tag_parse();
		console.log(' ');
	}

	ld_json() {
		let json_in = require('../tmp/test.json');
		return json_in.text;
	}

	tag_parse() {
		let tagset = require('./tagset.json');
		console.log(tagset);
		let txt = this.ld_json();
		console.log(txt);
		console.log(txt.split('[# '))


	}

	render() {
		return(
			<View>

			</View>
		)
	}

}
