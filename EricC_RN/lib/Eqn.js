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
		this.gen_eqn_view = this.gen_eqn_view.bind(this);
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

	render() {
		return(
			this.gen_eqn_view()
		)
	}
}

export default Eqn;


