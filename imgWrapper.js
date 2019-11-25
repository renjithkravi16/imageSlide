
import React, { Component } from 'react';
import { View, Image, Animated, Easing } from 'react-native';

export default class ImgWrapper extends Component {

    static defaultProps = {
        uriPath: null,
    };

    constructor(props) {
        super(props)
        console.log('constructor', props);

        this.state = {
            maxWidth: -1,
            maxHeight: 600,
            translateX: new Animated.Value(0),
        };
    }

    componentDidMount() {

        const { uriPath } = this.props;
        console.log('componentDidMount', this.props);

        if (isNaN(uriPath)) {
            Image.getSize(uriPath, (imgWidth, imgHeight) => {
                try {
                    let maxWidth = imgWidth * height / imgHeight;
                    this.setState({ maxWidth });
                    this.setState({ translateX: maxWidth })
                } catch (err) {

                }
            });
        }

        this.startAnimation();
    }

    startAnimation() {
        console.log('startAnimation');

        Animated.timing(
            this.state.translateX,
            {
                toValue: 1550,
                duration: 5000,
                easing: Easing.ease
            }
        ).start();
    }

    render() {
        console.log('render');

        const { uriPath } = this.props;
        const { translateX, maxWidth } = this.state;

        return (
            <View style={{ flex: 1, alignItems: "center" }}>
                <Animated.Image
                    style={{ height: 900,  resizeMode: 'cover', width: 2000, alignSelf: 'flex-end', transform: [{ translateX }] }}
                    source={{ uri: 'https://greatist.com/sites/default/files/Running_Mountain.jpg' }}
                />
            </View>
        );
    }
}