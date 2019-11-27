
import React, { Component } from 'react';
import { View, Image, Animated, Easing, Dimensions } from 'react-native';

export const { screenWidth, screenHeight } = Dimensions.get("window");

export default class ImgWrapper extends Component {

    static defaultProps = {
        uriPath: null,
        index: 0,
    };

    constructor(props) {
        super(props)
        this.state = {
            maxWidth: -1,
            maxHeight: 600,
            translateX: new Animated.Value(0),
        };
    }

    componentDidMount() {

        const { uriPath } = this.props;

        if (isNaN(uriPath)) {
            Image.getSize(uriPath, (imgWidth, imgHeight) => {
                try {
                    console.log('imgWidth', imgWidth);
                    console.log('imgHeight', imgHeight);

                    const screenHeight = Math.round(Dimensions.get('window').height);
                    console.log('screenHeight', screenHeight);

                    const screenWidth = Math.round(Dimensions.get('window').width);
                    console.log('screenWidth', screenWidth);

                    let maxWidth = imgWidth * screenHeight / imgHeight;
                    this.setState({ maxWidth });
                    console.log('maxWidth', maxWidth, this.state.maxWidth);

                    console.log('translateX', this.state.translateX);


                    Animated.timing(this.state.translateX, {
                        toValue: (this.state.maxWidth - screenWidth),
                        duration: 4000,
                        delay: this.props.index * 5000,
                        easing: Easing.ease
                    }).start();
            
                } catch (err) {

                }
            });
        }


    }

    render() {
        const { uriPath } = this.props;
        const { translateX } = this.state;
        const screenHeight = Math.round(Dimensions.get('window').height);

        return (
            <View style={{ flex: 1, alignItems: "center" }}>
                <Animated.Image
                    style={{ height: screenHeight, aspectRatio: 2, resizeMode: 'cover', alignSelf: 'flex-end', transform: [{ translateX }] }}
                    source={{ uri: uriPath }}
                />
            </View>
        );
    }
}