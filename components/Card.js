import React, { Component } from 'react';
import { View, Text, Image,Button} from 'react-native';
import CardSection from './CardSection';

class Card extends Component {
    render() {
        return (
            <View>
                <CardSection>
                <View style={{flexDirection:'row'}}>
                <Image
                    style={{width: 100, height: 100}}
                    source={{uri: 'https://images.unsplash.com/photo-1537815749002-de6a533c64db?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=545&q=80'}}
                />
                    <View style={{marginTop: 40,marginLeft: 20 }}>
                        <Text>น้องโฟส</Text>
                        <Text>ศรัณย์ คนปากห้อย</Text>
                    </View>
                </View>
                </CardSection>
                <CardSection>
                <Image
                    style={{width: 420, height: 280}}
                    source={{uri: 'https://images.unsplash.com/photo-1537815749002-de6a533c64db?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=545&q=80'}}
                />
                </CardSection>
                <CardSection>
                <View style={styles.button}>
                    <View style={{ width: 100 }}> 
                    <Button title="Click"/>
                    </View>
                </View>
                </CardSection>
            </View>
        );
    }
}

const styles = {
    button: {
        justifyContent: 'center',
        alignItems: 'center', 
        marginTop: 10
    }
}
export default Card;