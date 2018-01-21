import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import { NavigationActions } from 'react-navigation';
import {clearLocalNotification, setLocalNotification} from "../helpers/notification";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        backgroundColor: '#ffffff',
        paddingRight: 20,
        paddingLeft: 20
    },
    header: {
        fontSize: 16,
        marginTop: 10,
        marginBottom: 10,
        textAlign: 'center'
    },
    question: {
        fontSize: 24,
        fontWeight: 'bold',
        padding: 50,
        marginTop: 50,
        marginBottom: 50,
        textAlign: 'center'

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

export default class Quiz extends React.Component {

    constructor(props) {
        super(props);

        var { deck, navigation } = props;
        if(!deck) {
            deck = navigation.state.params.deck;
        }

        this.state = {
            deck,
            currentQuestion: 0,
            right: 0,
            wrong: 0
        };
    }

    nextQuestion() {

        if(this.state.currentQuestion<this.state.deck.questions.length-1) {
            this.setState(function(prevState){
                return {answer: null, currentQuestion: prevState.currentQuestion+1}
            });
        } else {
            clearLocalNotification().then(setLocalNotification());
            this.setState({review: true, answer: null});
        }
    }

    showAnswer() {
        this.setState(function(prevState){
            return {answer: prevState.deck.questions[prevState.currentQuestion].answer}
        });
    }

    right() {
        this.setState(function(prevState){
            return {
                right: prevState.right+1
            }
        });
        this.nextQuestion();
    }

    wrong() {
        this.setState(function(prevState){
            return {
                wrong: prevState.wrong+1
            }
        });
        this.nextQuestion();
    }

    restart() {
        this.setState({answer: null, review: false, currentQuestion: 0, right: 0, wrong: 0});
    }

    goBack() {
        this.props.navigation.dispatch(NavigationActions.back());
    }

    render() {

        var content;

        if(this.state.answer) {
            content = (
                <View>
                    <Text style={styles.question}>{this.state.deck.questions[this.state.currentQuestion].answer}</Text>

                    <View style={styles.button}>
                        <Button onPress={() => this.right()} color="#00FF00" title="Right"/>
                    </View>
                    <View style={styles.button}>
                        <Button onPress={() => this.wrong()} color="#FF0000" title="Wrong"/>
                    </View>
                </View>
            );

        } else if(this.state.review) {
            content = (
                <View>
                    <Text style={styles.question}>{`You got ${this.state.right} question${this.state.right==1?'':'s'} right`}</Text>
                    <View>
                        <View style={styles.button}>
                            <Button onPress={() => this.restart()} title="Restart Quiz"/>
                        </View>
                        <View style={styles.button}>
                            <Button onPress={() => this.goBack()} color="#FF0000" title="Back to deck"/>
                        </View>
                    </View>
                </View>

            );
        } else {
            content = (
                <View>
                    <View>
                        <Text style={styles.header}>Question {`${this.state.currentQuestion+1} of ${this.state.deck.questions.length}`}</Text>
                    </View>
                    <Text style={styles.question}>{this.state.deck.questions[this.state.currentQuestion].question}</Text>
                    <View style={styles.button}>
                        <Button onPress={() => this.showAnswer()} title="Show answer"/>
                    </View>
                </View>
            );
        }

        return (
            <View style={styles.container}>
                {content}
            </View>
        );
    }
}
