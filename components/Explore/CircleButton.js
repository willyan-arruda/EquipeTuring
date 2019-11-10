import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Button } from 'react-native';

class CircleButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <TouchableOpacity onPress={this.props.onPress} activeOpacity={.8}>
                <View style={{ height: 40, width: 40, borderRadius: 400, backgroundColor: '#E4C345', justifyContent: 'center' }}>
                    <Text style={{ textAlign: 'center', justifyContent: 'center', fontSize: 22, fontWeight: '100', color: 'white', paddingBottom: 3 }}>
                        x
                    </Text>
                </View>
            </TouchableOpacity>
        );
    }
}

export default CircleButton;
