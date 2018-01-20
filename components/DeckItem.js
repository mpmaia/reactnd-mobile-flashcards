import React from 'react';
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
        margin: 10,
        padding: 10,
        maxHeight: 80
    },
    button: {

    }
});

export default class DeckItem extends React.Component {
    render() {

        const { deck, onPress } = this.props;

        if(!deck) {
            return (<Text>No deck supplied</Text>);
        }

        const count = deck.questions.length;
        const questionCount = `${count} card${count==1?"":"s"}`;

        var CardView = (
            <View style={styles.item}>
                <View>
                    <Text style={styles.title}>{deck.title}</Text>
                    <Text style={styles.count}>{questionCount}</Text>
                </View>
                {
                    (onPress?(
                        <View style={styles.button}>
                            <MaterialIcons name="navigate-next" size={40} color="#000000" />
                        </View>):[])
                }
            </View>);

        if(onPress) {
            return (
                <TouchableOpacity
                    onPress={() => onPress(deck)}>
                    {CardView}
                </TouchableOpacity>
            );
        } else {
            return (
                CardView
            );
        }
    }
}
