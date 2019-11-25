import React, { Component } from 'react';
import { View } from 'react-native';

export { default as ImageSlideContainer } from './imageSlideContainer';
import ImageSlideContainer from './imageSlideContainer';

export default class App extends Component {
	render() {
		return (
			<View style={{ flex: 1 }}>
				<ImageSlideContainer />
			</View>

		);
	}
}