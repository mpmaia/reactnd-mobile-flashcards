import React from "react"
import {
    Text,
    View,
    StyleSheet,
    FlatList, Button
} from "react-native"
import DeckItem from "./DeckItem";

const styles = StyleSheet.create({
    list: {
    },
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        backgroundColor: '#FFFFFF'
    }
});

export default class DeckList extends React.Component  {

    componentDidMount() {

    }

    render() {
        var { decks, navigation } = this.props;
        if (decks.length > 0) {
            return (
                <View style={styles.container}>
                    <FlatList
                        data={decks}
                        style={styles.list}
                        keyExtractor={(item) => item.title}
                        renderItem={({ item }) => {
                            return (
                                <View>
                                    <DeckItem
                                        onPress={(deck) => navigation.navigate('Deck', {title: deck.title, deck})}
                                        deck={item}
                                    />
                                </View>
                            )
                        }}
                    />
                    <Button onPress={() => this.props.navigation.navigate('AddDeck')} title="New Deck"/>
                </View>
            )
        } else {
            return <Text>No decks</Text>
        }
    }
}