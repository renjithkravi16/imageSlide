import React, { Component } from 'react';
import { View, FlatList } from 'react-native';

export { default as ImgWrapper } from './imgWrapper';
import ImgWrapper from './imgWrapper';

export default class ImageSlideContainer extends Component {

  static defaultProps = {
    items: [],
    duration: 5000,
    index: 0,
  }

  renderItem(item) {
    console.log('renderImageItem', ImgWrapper, item.uri);
    return (
      <ImgWrapper uriPath={item.uri}></ImgWrapper>
    );
  }

  renderContent() {
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
      },
      {
        id: '3',
        uri: "./resources/image.jpg",
      }
    ];

    return (
      <View style={{ flex: 1 }}>
        <FlatList
          ref={ref => this.slideShow = ref}
          data={items}
          renderItem={this.renderItem}
          keyExtractor={(item, index) => item.id}
        />
      </View>
    );
  }


  render() {
    return (
      <View style={{ flex: 1 }}>
        {this.renderContent()}
      </View>
    );
  }
}