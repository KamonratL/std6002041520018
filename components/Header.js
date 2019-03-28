//import library
import React, { Component } from 'react';
import { View, Text } from 'react-native';

//create component
class Header extends Component {
    render() {
        return (
            <View style={styles.header}>
                <Text style={styles.text}>
                    {this.props.title}
                </Text>
            </View>
        );
    }
}

//style
const styles = {
    header: {
        padding: 10,
        alignItems: 'center',
        backgroundColor: '#FF6347'
    },
    text: {
        fontSize: 25,
        color: '#FFFFFF'
    }
}

//export
export default Header;
