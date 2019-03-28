//import library
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Header from './Header';
import Card from './Card';
class App extends Component  {
    render() {
        return (
            <View>
                <Header title="Albums" />
                <Card />
            </View>
        );
    }
}

export default App;
