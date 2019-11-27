import React, { Component } from 'react';
import { View, FlatList, Animated, Easing } from 'react-native';


export { default as ImgWrapper } from './imgWrapper';
import ImgWrapper from './imgWrapper';

export default class ImageSlideContainer extends Component {

  static defaultProps = {
    duration: 5000,
    index: 0,
    items: [],
  }

  constructor(props) {
    super(props);

    this.state = {
      index: props.index,
      timer: new Animated.Value(0),
    };

  }

  componentDidMount() {
    let { duration } = this.props;

    Animated.timing(this.state.timer, {
      toValue: 1,
      easing: Easing.ease,
      useNativeDriver: true,
      duration,
    }).start(({ finished }) => finished && this.snapToNext());
  }

  animation() {
    const { index } = this.state;
    let { duration, items } = this.props;

    return Animated.timing(this.state.timer, {
      toValue: 1,
      easing: Easing.ease,
      useNativeDriver: true,
      duration,
    }).start(({ finished }) => finished && this.snapToNext());
  }


  snapToNext() {
    const { timer, index } = this.state;
    let { items } = this.props;
    let newIndex = (index + 1) % items.length;

    timer.stopAnimation(() => {

        this.slideShow.scrollToIndex({ animated: true, index: newIndex });
        this.setState({ timer: new Animated.Value(0), index: newIndex }, () => {
          this.animation();
        });
      
    });
  }

  renderItem({ item, index }) {
    console.log('renderImageItem', ImgWrapper, item.uri);
    return (
      <ImgWrapper uriPath={item.uri} index={index} ></ImgWrapper>
    );
  }

  render() {
    const list = this.props.items;

    return (
      <View style={{ flex: 1 }}>
        <FlatList
          ref={ref => this.slideShow = ref}
          data={list}
          renderItem={this.renderItem.bind(this)}
          keyExtractor={(item, index) => item.id}
        />
      </View>
    );
  }
}