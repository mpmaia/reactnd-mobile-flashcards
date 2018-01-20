import React from 'react';
import {View, Text, TextInput, StyleSheet, Alert, KeyboardAvoidingView, TouchableOpacity, Button} from 'react-native';
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
    },
    button: {
        marginTop: 10,
        marginBottom: 10
    }
});

export default class AddQuestion extends React.Component {

    state = {
        question: '',
        answer: '',
    };

    addQuestion() {
        var callback = this.props.addQuestion;
        if(!callback) {
            callback = this.props.navigation.state.params.addQuestion;
        }

        if(callback) {
            callback({
                question: this.state.question,
                answer: this.state.answer
            });
        }

        this.goBack();
    }

    goBack() {
        this.props.navigation.dispatch(NavigationActions.back());
    }

    render() {

        return(
            <KeyboardAvoidingView behavior="padding" style={styles.container}>
                <View>
                    <Text style={styles.question}>Please enter the question and answer below:</Text>
                    <TextInput
                        value={this.state.question}
                        style={styles.input}
                        placeholder="Question"
                        onChangeText={(question) => this.setState({question})}
                    />
                    <TextInput
                        value={this.state.answer}
                        style={styles.input}
                        placeholder="Answer"
                        onChangeText={(answer) => this.setState({answer})}
                    />
                    <View style={styles.button}>
                        <Button onPress={() => this.addQuestion()} title="Create question"/>
                    </View>
                    <View style={styles.button}>
                        <Button onPress={() => this.goBack()} color="#FF0000" title="Cancel"/>
                    </View>
                </View>
            </KeyboardAvoidingView>
        );
    }
}
