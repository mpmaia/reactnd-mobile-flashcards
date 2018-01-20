import React, { Component } from "react"
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
        return <DeckList decks={this.state.decks}
                         addDeck={(name, deck) => this.saveDeck(name, deck)}
                         navigation={this.props.navigation}/>;
    }
}

export default Main;