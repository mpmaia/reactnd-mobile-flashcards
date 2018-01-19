import React, {Component} from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const styles = StyleSheet.create({
    title: {
        fontSize: 18
    },
    count: {
        fontSize: 12
    },
    item: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#000000',
        margin: 15,
        padding: 10
    },
    button: {

    }
});

export default class DeckItem extends Component {
    render() {

        const { deck, navigation } = this.props;
        const count = deck.questions.length;
        const cardCount = `${count} card${count>1?"s":""}`;
        return (
            <TouchableOpacity
                onPress={() => navigation.navigate('deckView', {title: deck.title})}>
                <View style={styles.item}>
                    <View>
                        <Text style={styles.title}>{deck.title}</Text>
                        <Text style={styles.count}>{cardCount}</Text>
                    </View>
                    <View style={styles.button}>
                        <MaterialIcons name="navigate-next" size={40} color="#000000" />
                    </View>
                </View>
            </TouchableOpacity>
        );
    }
}
