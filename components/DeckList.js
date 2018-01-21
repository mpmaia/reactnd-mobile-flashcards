import React from "react"
import {
    Text,
    View,
    StyleSheet,
    FlatList, Button
} from "react-native"
import DeckItem from "./DeckItem";

const styles = StyleSheet.create({
    noDecks: {
        fontSize: 20,
        fontWeight: 'bold',
        alignItems: 'center',
        padding: 20
    },
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        backgroundColor: '#FFFFFF'
    }
});

export default class DeckList extends React.Component  {

    saveDeck(name, deck) {
        var callback = this.props.saveDeck;
        if(!callback) {
            callback = this.props.navigation.state.params.saveDeck;
        }

        if(callback) {
            callback(name, deck);
        }
    }

    render() {
        var { navigation, decks } = this.props;

        return (
            <View style={styles.container}>
                {
                    (decks.length > 0)?
                        <FlatList
                            data={decks}
                            style={styles.list}
                            extraData={decks.length}
                            keyExtractor={(item) => item.title}
                            renderItem={({ item }) => {
                                return (
                                    <View>
                                        <DeckItem
                                            onPress={(deck) => navigation.navigate('Deck', {
                                                title: deck.title,
                                                deck,
                                                saveDeck: (name, deck) => this.saveDeck(name, deck)
                                            })}
                                            deck={item}
                                        />
                                    </View>
                                )
                            }}
                        />
                        :
                        <Text style={styles.noDecks}>No decks</Text>
                }
                <Button onPress={() => this.props.navigation.navigate('AddDeck', {saveDeck: (name, deck) => this.saveDeck(name, deck)})} title="New Deck"/>
            </View>
        );
    }
}