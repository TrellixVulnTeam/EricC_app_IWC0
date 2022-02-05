import React, { Component } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, Dimensions, Platform } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { colour } from './Colours';
import { TMP } from './pages/tmp'; 

const Stack = createStackNavigator()
const Drawer = createDrawerNavigator();

const app_theme = {
	...DefaultTheme,
	colors: {
		...DefaultTheme.colors,
		primary: colour.dark,
		background: colour.dark,
		card: colour.light,
		border: colour.light,
		text: colour.dark,
	},
};

class App extends Component {
	constructor() {
		super();
		this.state = {
			data: [],
			SCREEN_W: Dimensions.get('window').width,
			SCREEN_H: Dimensions.get('window').height,
			PLATF_OS: Platform.OS,
			HDR_TITL: '',
		}
		this.styles = StyleSheet.create({
			test: {

			},
		});
		this.componentDidMount = this.componentDidMount.bind(this);
		this.componentWillUnmount = this.componentWillUnmount.bind(this);
		this.update_dims = this.update_dims.bind(this);
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
		if (NEW_H != this.state.SCREEN_H) {
			this.setState({SCREEN_H: NEW_H});
		}
		if (NEW_W != this.state.SCREEN_W) {
			this.setState({SCREEN_W: NEW_W});
		}
		//console.log(this.state.SCREEN_H,this.state.SCREEN_W);
	}

	render() {
		var pages =[['Menu','Home','Education','Projects','Contacts','About','Adv','...']];
		return(
			<View style={{
				height: this.state.SCREEN_H,
				width: this.state.SCREEN_W,
				backgroundColor: colour.dark,
			}}>
				<NavigationContainer theme={app_theme}>
					<Drawer.Navigator initialRouteName='tmp'
						drawerIcon={{
							tintColor: colour.dark,
							color: colour.dark,
						}}
						screenOptions={{
							drawerActiveTintColor: colour.dark,
							drawerActiveBackgroundColor: colour.light,
							drawerInactiveTintColor: colour.light,
							drawerInactiveBackgroundColor: colour.dark,
							drawerType: 'front',
							drawerStyle: {
								backgroundColor: colour.dark,
								color: colour.light,
							},
						}}>
						<Drawer.Screen name='tmp' component={TMP} />
						<Drawer.Screen name='tmp1' component={TMP} />
						<Drawer.Screen name='tmp2' component={TMP} />
						<Drawer.Screen name='...' component={TMP} />
						<Drawer.Screen name='Home' component={TMP} 
							options={{
								drawerLabel: 'Home',
								drawerIcon: ({focused}) => (
									<Icon
										name = 'home-outline'
										color = {focused ? colour.dark : colour.light}
										size = {16}
									/>
								)
							}}/>
						<Drawer.Screen name='Education' component={TMP} 
							options={{
								drawerLabel: 'Education',
								drawerIcon: ({focused}) => (
									<Icon
										name = 'book-outline'
										color = {focused ? colour.dark : colour.light}
										size = {16}
									/>
								)
							}}/>
						<Drawer.Screen name='Projects' component={TMP} 
							options={{
								drawerLabel: 'Projects',
								drawerIcon: ({focused}) => (
									<Icon
										name = 'code-working'
										color = {focused ? colour.dark : colour.light}
										size = {16}
									/>
								)
							}}/>
						<Drawer.Screen name='Contact' component={TMP} 
							options={{
								drawerLabel: 'Contact',
								drawerIcon: ({focused}) => (
									<Icon
										name = 'journal-outline'
										color = {focused ? colour.dark : colour.light}
										size = {16}
									/>
								)
							}}/>
						<Drawer.Screen name='About' component={TMP} 
							options={{
								drawerLabel: 'About',
								drawerIcon: ({focused}) => (
									<Icon
										name = 'reader-outline'
										color = {focused ? colour.dark : colour.light}
										size = {16}
									/>
								)
							}}/>
					</Drawer.Navigator>
				</NavigationContainer>
			</View>
		)
	}
}

export default App;