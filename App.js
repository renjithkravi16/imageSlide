import React, { Component } from 'react';
import { View } from 'react-native';

export { default as ImageSlideContainer } from './imageSlideContainer';
import ImageSlideContainer from './imageSlideContainer';

export default class App extends Component {
	render() {

		const items = [
			{
				id: '0',
				uri: "http://www.lovethemountains.co.uk/wp-content/uploads/2017/05/New-Outdoor-Sports-and-Music-Festival-For-Wales-4.jpg",
			},
			{
				id: '1',
				uri: "http://blog.adrenaline-hunter.com/wp-content/uploads/2018/05/bungee-jumping-barcelona-1680x980.jpg",
			},
			{
				id: '2',
				uri: "https://greatist.com/sites/default/files/Running_Mountain.jpg",
			}
		];
		return (
			<View style={{ flex: 1 }}>
				<ImageSlideContainer items={items} />
			</View>

		);
	}
}