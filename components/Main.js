import React, { Component } from "react"
import {
    Text,
    View,
    StyleSheet,
    FlatList
} from "react-native"
import DeckList from "./DeckList";
import DeckApi from "../api/DeckApi";

class Main extends Component {

    state = {
        decks: {}
    };

    componentDidMount() {
        var decks = DeckApi.getAll();
        this.setState({decks});
        // DeckApi.getAll().then((decks) => {
        //     console.log(decks);
        //     this.setState(decks);
        // });
    }

    render() {
        return <DeckList decks={this.state.decks} navigation={this.props.navigation}/>;
    }
}

export default Main;