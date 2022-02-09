import React, { Component } from 'react';
import { StyleSheet, Text, ScrollView, View, Dimensions, Platform, Image } from 'react-native';
import { colour } from './Colours';

import { MathJaxSvg } from 'react-native-mathjax-html-to-svg';
import ViewShot from 'react-native-view-shot';

class Eqn extends Component {
	constructor(props) {
		super(props);
		this.state = {
			eqn: this.props.eqn,
			ver: this.props.ver,
			img: null,
			img_id: '',
		}
		this.componentDidMount = this.componentDidMount.bind(this);
		this.gen_eqn_view = this.gen_eqn_view.bind(this);
		this.gen_img = this.gen_img.bind(this);
		this.gen_img_id = this.gen_img_id.bind(this);

	}
	componentDidMount() {
		this.gen_img_id(32);
		//this.gen_img();
	}

	gen_eqn_view() {
		return(
			<View style={{
				width: '100%',
				justifyContent: 'center',
				justifyItems: 'center',
				alignItems: 'center',
				paddingVertical: 8,
			}}>
				<MathJaxSvg
					fontSize={15}
					color={colour.light}
					fontCache={true}
				>
					{'$$'+ this.state.eqn +'$$'}
				</MathJaxSvg>
			</View>
		)
	}

	gen_img() {
		return(
			<ViewShot ref="viewShot" options={{ format: "png", result: "tmpfile"}}>
				{this.gen_eqn_view()}
			</ViewShot>
		)
	}

	gen_img_id(len) {
		var ID = Math.random().toString(36).substr(2,len);
		console.log('ID: ' + ID);
		//this.setState({img_id: ID});
	}

	render() {
		return(
			this.gen_eqn_view()
		)
	}
}

export default Eqn;


