// file for preset styles for the text/tagset parser
// may make it applicable to all elements of app

import React, { Component } from 'react';
import { StyleSheet, Text, ScrollView, View, Dimensions, Platform, TextInput } from 'react-native';

import { colour } from './Colours';

export const eqn = {
	fontSize: 15,
	color: colour.light,
};

export const ref = StyleSheet.create({
	author: {
		fontStyle: 'normal',
	},
	title: {
		fontStyle: 'italic',
	},
	date: {
		fontStyle: 'normal',
	},
	link: {
		fontStyle: 'italic',
	},
	global: {
		fontWeight: 'normal',
		fontSize: 13,
		color: colour.light,
		textAlign: 'justify',
		opacity: 0.75,		
	},
})

export const article = StyleSheet.create({
	TTL: {
		fontWeight: 'bold',
		fontSize: 18,
		color: colour.light,
		textAlign: 'left',
		paddingVertical: 4,
	},
	HDR: {
		fontWeight: 'bold',
		fontSize: 16,
		color: colour.light,
		textAlign: 'left',
		paddingVertical: 4,
	},
	TXT: {
		fontWeight: 'normal',
		fontSize: 13,
		color: colour.light,
		textAlign: 'justify',
		paddingBottom: 4,
	},
	PLT: {

	},
	TMG: {

	},
	CODE: {
		fontWeight: 'normal',
		fontSize: 12,
		color: colour.light,
		textAlign: 'left',
		marginVertical: 2,
		fontFamily: 'monospace',
		backgroundColor: 'rgba(220,220,220,0.175)',
		paddingHorizontal: 4,
		paddingBottom: 4,
		paddingTop: 2,
	},
	CODE_L: {

	},
	AUTH: {
		fontWeight: 'normal',
		fontSize: 12,
		color: colour.light,
		opacity: 0.5,
		textAlign: 'right',
	},
	DATE: {
		fontWeight: 'normal',
		fontSize: 12,
		color: colour.light,
		opacity: 0.5,
		textAlign: 'right',
	},
	END: {
		height: 2,
		width: '100%',
		backgroundColor: colour.light,
		opacity: 0.25,
		marginVertical: 8,
	}
})