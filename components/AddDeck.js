import React from 'react';
import {View, Text, TextInput, StyleSheet, KeyboardAvoidingView, Button} from 'react-native';
import { NavigationActions } from 'react-navigation';
import DeckApi from "../api/DeckApi";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#ffffff',
        paddingRight: 20,
        paddingLeft: 20
    },
    question: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 20
    },
    input: {
        marginTop: 10,
        marginBottom: 10,
        fontSize: 16,
        textAlignVertical: "top" //for android
    }
});

export default class AddDeck extends React.Component {

    state = {
        name: ''
    };

    saveDeck(name, deck) {

        var callback = this.props.saveDeck;
        if(!callback) {
            callback = this.props.navigation.state.params.saveDeck;
        }

        if(callback) {
            callback(name, deck);
        }
    }

    addDeck(name) {

        var deck = { title: name, questions:[]};

        this.saveDeck(name, deck);

        this.props.navigation.dispatch(NavigationActions.back());
        this.props.navigation.navigate('Deck', {
            title: name,
            deck,
            saveDeck: (name, deck) => this.saveDeck(name, deck)
        });
    }

    valid() {
        return !!this.state.name;
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
                    <Button onPress={() => this.addDeck(this.state.name)} disabled={!this.valid()} style={styles.button} title="Create Deck"/>
                </View>
            </KeyboardAvoidingView>
        );
    }
}
