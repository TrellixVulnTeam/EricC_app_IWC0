import React, { Component } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, Dimensions, Platform } from 'react-native';
import { colour } from './Colours'

const H = Dimensions.get('window').height;
const W = Dimensions.get('window').width;
const OS = Platform.OS;

class App extends Component {
	constructor() {
		super();
		this.state = {
			data: [],
			SCREEN_W: W,
			SCREEN_H: H,
			PLATF_OS: OS,
		}
		this.styles = StyleSheet.create({
			test: {

			},
		});
		this.componentDidMount = this.componentDidMount.bind(this);
		this.componentWillUnmount = this.componentWillUnmount.bind(this);
		this.update_dims = this.update_dims.bind(this);
		this.render_top_bar = this.render_top_bar.bind(this);
	}

	componentDidMount() {
		this.interval = setInterval(() => this.update_dims(), 1000/60);
	}
	
	componentWillUnmount() {
		clearInterval(this.interval);
	}
	
	// Specifically for web as user may resize the window
	// so, not needed if an app as cannot resize.
	update_dims() {
		let NEW_H = Dimensions.get('window').height;
		let NEW_W = Dimensions.get('window').width;
		if (NEW_H != this.state.SCREEN_H || NEW_W != this.state.SCREEN_W) {
			//console.log(this.state.SCREEN_H,this.state.SCREEN_W);
			this.setState({SCREEN_W: NEW_W, SCREEN_H: NEW_H});
		}
	}

	render_top_bar() {

	}

	render() {
		return(
			<View style={{
				height: this.state.SCREEN_H,
				width: this.state.SCREEN_W,
				backgroundColor: colour.dark,
			}}>
			</View>
		)
	}
}

export default App;