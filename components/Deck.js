import React from "react"
import {
    View,
    StyleSheet, Button
} from "react-native"
import DeckItem from "./DeckItem";

const styles = StyleSheet.create({
    button: {
        marginTop: 10,
        marginBottom: 10
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#FFFFFF',
        padding: 20
    }
});

export default class Deck extends React.Component {

    constructor(props) {
        super(props);
        var { deck, navigation } = props;
        if(!deck) {
            deck = navigation.state.params.deck;
        }
        this.state = {deck};
    }

    addQuestion(q) {
        var deck = {title: this.state.deck.title, questions: [...this.state.deck.questions, q]};
        this.saveDeck(deck);
        this.setState({deck});
    }

    saveDeck(deck) {
        var callback = this.props.saveDeck;
        if(!callback) {
            callback = this.props.navigation.state.params.saveDeck;
        }

        if(callback) {
            callback(deck.title, deck);
        }
    }

    render() {

        return (
            <View style={styles.container}>
                <DeckItem
                    navigation={this.props.navigation}
                    deck={this.state.deck}
                    allowPress={false}
                />
                {(this.state.deck.questions.length > 0) ?
                    <View style={styles.button}>
                        <Button onPress={() => this.props.navigation.navigate('Quiz', {deck: this.state.deck})}
                                title="Start a Quiz"/>
                    </View>
                    :
                    []
                }
                <View style={styles.button}>
                    <Button onPress={() => this.props.navigation.navigate('AddQuestion', {addQuestion: (question) => this.addQuestion(question)})} title="Create New Question"/>
                </View>

            </View>
        )

    }
}