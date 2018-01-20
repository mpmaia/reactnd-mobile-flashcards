import React from 'react';
import {View, Text, TextInput, StyleSheet, Alert, KeyboardAvoidingView, TouchableOpacity, Button} from 'react-native';
import { NavigationActions } from 'react-navigation';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#ffffff',
        paddingRight: 20,
        paddingLeft: 20
    },
    question: {
        fontSize: 16,
    },
    input: {
        marginTop: 10,
        marginBottom: 10,
        fontSize: 16
    }
});

export default class AddDeck extends React.Component {

    state = {
        name: ''
    };

    addDeck(name) {
        if(this.props.addDeck) {
            this.props.addDeck(name);
        }
        this.props.navigation.dispatch(NavigationActions.back());
    }

    render() {

        return(
            <KeyboardAvoidingView behavior="padding" style={styles.container}>
                <View>
                    <Text style={styles.question}>Please enter the name of the new deck:</Text>
                    <TextInput
                        value={this.state.name}
                        style={styles.input}
                        onChangeText={(name) => this.setState({name})}
                    />
                    <Button onPress={() => this.addDeck(this.state.name)} style={styles.button} title="Create new deck"/>
                </View>
            </KeyboardAvoidingView>
        );
    }
}
