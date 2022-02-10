// tmp file is for testing out components, functions and other stuff

import React, { Component } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, ScrollView, View, Dimensions, Platform, TextInput } from 'react-native';
import { colour } from '../lib/Colours';
import Eqn from '../lib/Eqn';
import {gen_id} from '../lib/Lib';

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

	update_inp_field(text) {
		this.setState({input_field: text});
		let ID = gen_id(128);
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
					<Text style={styles.titl_txt}>Title Example</Text>
					
					<Eqn ver={this.state.PLATF_OS}
						eqn='x=y'
					/>
					<Text style={{
						fontWeight: 'normal',
						fontSize: 14,
						color: colour.light,
						textAlign: 'justify',			
						paddingVertical: 4,
					}}>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu velit cursus, dictum eros eget, commodo ante. Integer lobortis sem at ex rutrum pharetra. Vivamus enim lorem, semper eu lorem non, posuere elementum arcu. Proin vel accumsan lorem. Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras tincidunt, leo in semper ullamcorper, elit augue suscipit mi, vitae ultrices elit justo at massa. Suspendisse blandit id justo non sollicitudin. Donec vulputate turpis purus. Aliquam ut congue nibh. Aliquam vitae tempor orci, sit amet eleifend sem. Praesent neque justo, fringilla placerat neque ac, viverra condimentum turpis. Integer semper in erat quis accumsan. Donec consequat fermentum tellus, a vehicula tortor congue non. Nulla iaculis laoreet enim, nec tristique lectus suscipit vitae.
					</Text>
					<Text style={{
						fontWeight: 'normal',
						fontSize: 14,
						color: colour.light,
						textAlign: 'justify',			
						paddingVertical: 4,
					}}>
						Aenean pretium vulputate nisl ut semper. Ut sodales vehicula tortor. Nunc lacinia eleifend efficitur. Curabitur pretium hendrerit lacus. Praesent quis commodo lacus. Aliquam eget tempor purus. Phasellus aliquam sapien ac magna molestie ornare. Aenean pretium auctor nibh. Aliquam facilisis id sapien sed dictum. Etiam dolor urna, ornare convallis placerat eget, sodales eget mi.
					</Text>
					<Text style={{
						fontWeight: 'normal',
						fontSize: 14,
						color: colour.light,
						textAlign: 'justify',
						paddingVertical: 4,
					}}>
						Suspendisse mollis eros nec felis rhoncus, eget ultrices velit elementum. Aliquam aliquam, turpis ut luctus fermentum, odio nulla tempor neque, eget sollicitudin diam ex sed risus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed sit amet erat sit amet leo ultricies auctor quis et leo. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed fringilla aliquam odio condimentum auctor. Nullam pellentesque lacinia dictum. Pellentesque odio nisi, placerat ut velit vel, tempor sagittis arcu. In a auctor mauris, sed tincidunt ex. Morbi vitae cursus enim, a condimentum mauris. Quisque ullamcorper est vel ultricies malesuada. Suspendisse porttitor laoreet arcu eu vestibulum. Nullam congue elit risus, vel varius sapien dictum et. In fringilla nibh nisl, nec rutrum sapien commodo non.
					</Text>
					<Text style={{
						fontWeight: 'normal',
						fontSize: 14,
						color: colour.light,
						textAlign: 'justify',			
						paddingVertical: 4,
					}}>
						Morbi sed tellus facilisis, vehicula ante non, mattis nisl. Morbi interdum lobortis vulputate. Donec sollicitudin urna dictum egestas luctus. Nulla facilisi. Cras nisl ex, maximus id vulputate ut, porta et lacus. In pulvinar sem ac ante congue vulputate vitae in turpis. Sed a ullamcorper lorem. Quisque viverra tincidunt mauris, eu luctus eros tincidunt ac. Nam sed libero lobortis, lobortis felis bibendum, fermentum urna. 
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