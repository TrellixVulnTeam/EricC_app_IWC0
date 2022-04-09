import React, { Component } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, ScrollView, View, Dimensions, Platform, TextInput } from 'react-native';

import { colour } from '../lib/Colours';
import { article } from '../lib/PresetStyles';

class PlaceHolder extends Component {
	constructor() {
		super();
		this.state = {
			SCREEN_W: Dimensions.get('window').width,
			SCREEN_H: Dimensions.get('window').height,
		}
	}
	render() {
		return(
			<View style={{
				alignItems: 'center',
				justifyItems: 'center',
				paddingBottom: 32,
			}}>
				<View style={{
					top: (this.state.SCREEN_H/2) - 32,
				}}>
					<Text style={article.TXT}>
						Coming soon... maybe
					</Text>
				</View>
			</View>
		)
	}
}

export { PlaceHolder };