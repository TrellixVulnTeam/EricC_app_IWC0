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
		this.testing = this.testing.bind(this);
	}
	componentDidMount() {
		this.testing();
	}

	testing() {
		//let ID = gen_id(128);
		//ld_file('');
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
					<Text style={styles.titl_txt}>Title Example</Text>
					
					<Eqn ver={this.state.PLATF_OS}
						eqn='x=y'
					/>
					<Text style={styles.norm_txt}>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu velit cursus, dictum eros eget, commodo ante. Integer lobortis sem at ex rutrum pharetra. Vivamus enim lorem, semper eu lorem non, posuere elementum arcu. Proin vel accumsan lorem. Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras tincidunt, leo in semper ullamcorper, elit augue suscipit mi, vitae ultrices elit justo at massa. Suspendisse blandit id justo non sollicitudin. Donec vulputate turpis purus. Aliquam ut congue nibh. Aliquam vitae tempor orci, sit amet eleifend sem. Praesent neque justo, fringilla placerat neque ac, viverra condimentum turpis. Integer semper in erat quis accumsan. Donec consequat fermentum tellus, a vehicula tortor congue non. Nulla iaculis laoreet enim, nec tristique lectus suscipit vitae.
					</Text>
				</View>
			</ScrollView>
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

export { TMP };