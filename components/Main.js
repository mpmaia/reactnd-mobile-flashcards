import React, { Component } from "react"
import DeckList from "./DeckList";
import DeckApi from "../api/DeckApi";

class Main extends Component {

    state = {
        decks: []
    };

    componentDidMount() {
        this.updateDecks();
    }

    updateDecks() {
        DeckApi.getAll().then(decks => {
            this.setState({decks});
        });
    }

    saveDeck(name, deck) {
        DeckApi.save(name, deck).then(() => {
            this.updateDecks();
        });
    }

    render() {
        return <DeckList decks={this.state.decks}
                         saveDeck={(name, deck) => this.saveDeck(name, deck)}
                         navigation={this.props.navigation}/>;
    }
}

export default Main;