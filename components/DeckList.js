import React, { Component } from "react"
import {
    Text,
    View,
    StyleSheet,
    FlatList, TouchableOpacity
} from "react-native"
import DeckItem from "./DeckItem";

class DeckList extends Component {

    componentDidMount() {

    }

    render() {
        var { decks } = this.props;
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
                                        navigation={this.props.navigation}
                                        deck={item}
                                        key={item.title}
                                    />
                                </View>
                            )
                        }}
                    />
                    <TouchableOpacity style={styles.addDeck}>
                        <Text style={styles.buttonText}>New Deck</Text>
                    </TouchableOpacity>
                </View>
            )
        } else {
            return <Text>No decks</Text>
        }
    }
}
const styles = StyleSheet.create({
    list: {
    },
    buttonText: {
        textAlign: 'center',
        color: '#FFFFFF',
        fontWeight: 'bold'
    },
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        backgroundColor: '#FFFFFF'
    },
    addDeck: {
        height: 40,
        maxHeight: 40,
        borderWidth: 1,
        borderRadius: 5,
        padding: 10,
        marginLeft: 30,
        marginRight: 30,
        marginBottom: 10,
        flex: 1,
        backgroundColor: 'green'
    }
});

export default DeckList;