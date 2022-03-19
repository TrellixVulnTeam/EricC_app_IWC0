import React, { Component } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, ScrollView, View, Dimensions, Platform, TextInput } from 'react-native';

import { colour } from '../lib/Colours';

class Home extends Component {
	constructor() {
		super();
		this.state = {
			SCREEN_W: Dimensions.get('window').width,
			SCREEN_H: Dimensions.get('window').height,
			PLATF_OS: Platform.OS,
			input_field: '',
		}
		this.componentDidMount = this.componentDidMount.bind(this);
	}
	componentDidMount() {
	
	}

	render() {
		return(
			<View style={{
				paddingBottom: 32,
			}}>
			</View>
		)
	}
}
const styles = StyleSheet.create({
	test: {

	},
	norm_txt: {
		fontWeight: 'normal',
		fontSize: 14,
		color: colour.light,
		textAlign: 'justify',			
		paddingVertical: 4,
	},
	titl_txt: {
		paddingTop: 16,
		fontWeight: 'bold',
		fontSize: 16,
		color: colour.light,
		textAlign: 'left',
	}
});

export { Home };