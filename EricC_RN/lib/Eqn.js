import React, { Component } from 'react';
import { StyleSheet, Text, ScrollView, View, Dimensions, Platform, Image } from 'react-native';

import { colour } from './Colours';
import { eqn } from './PresetStyles';


import { MathJaxSvg } from 'react-native-mathjax-html-to-svg';
import ViewShot from 'react-native-view-shot';

class Eqn extends Component {
	constructor(props) {
		super(props);
		this.state = {
			eqn: this.props.eqn,
			ver: this.props.ver,
			key: this.props.key,
		}
	}

	gen_eqn_view() {
		return(
			<View key={this.state.key} style={{
				width: '100%',
				justifyContent: 'center',
				justifyItems: 'center',
				alignItems: 'center',
				paddingVertical: 8,
			}}>
				<MathJaxSvg
					fontSize={eqn.fontSize}
					color={eqn.color}
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


