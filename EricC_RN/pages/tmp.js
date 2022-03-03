// tmp file is for testing out components, functions and other stuff

import React, { Component } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, ScrollView, View, Dimensions, Platform, TextInput } from 'react-native';

import { colour } from '../lib/Colours';
import Eqn from '../lib/Eqn';
import { gen_id, Txt_loader } from '../lib/Lib';


class TMP extends Component {
	constructor() {
		super();
		this.state = {
			SCREEN_W: Dimensions.get('window').width,
			SCREEN_H: Dimensions.get('window').height,
			PLATF_OS: Platform.OS,
			input_field: '',
		}
		this.input = this.input.bind(this);
		this.update_inp_field = this.update_inp_field.bind(this);
	}

	componentDidMount() {

	}

	update_inp_field(text) {
		this.setState({input_field: text});
	}

	input() {
		return(
			<TextInput
				style={{
					width: '100%',
					padding: 16,
					height: 48,
					color: colour.dark,
					backgroundColor: colour.light,
					borderWidth: 2,
					borderColor: colour.light,
					fontWeight: 'normal',
					fontSize: 14,
					color: colour.dark,
				}}
				onChangeText={text => this.update_inp_field(text)} 
				placeholder='Type here...'
			/>
		)
	}

	render() {
		return(
			<ScrollView style={{
				backgroundColor: colour.dark,
				paddingHorizontal: this.state.PLATF_OS == 'web' ? 64 : 24,
				paddingVertical: this.state.PLATF_OS == 'web' ? 32 : 16,
			}}>
				<View style={{
					paddingBottom: 32,
				}}>
					{this.input()}
					<Txt_loader fname=''/>
				</View>
			</ScrollView>
		)
	}
}

export { TMP };