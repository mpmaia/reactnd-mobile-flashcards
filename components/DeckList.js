import React, { Component } from "react"
import {
    Text,
    View,
    StyleSheet,
    FlatList, TouchableOpacity, Button
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

export default class DeckList extends Component {

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
                    <Button onPress={() => this.props.navigation.navigate('AddDeck')} title="New Deck"/>
                </View>
            )
        } else {
            return <Text>No decks</Text>
        }
    }
}