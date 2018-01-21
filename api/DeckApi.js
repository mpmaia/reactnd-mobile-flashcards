import { AsyncStorage } from 'react-native'

const initialState = {
    'English-Italian': {
        questions: [
            {
                question: 'To walk',
                answer: 'camminare'
            }
        ]
    },
    'English-Portuguese': {
        questions: [
            {
                question: 'To translate',
                answer: 'traduzir'
            },
            {
                question: 'To walk',
                answer: 'andar'
            }
        ]
    }
};

const DECK_LIST = "DECK_LIST";

class DeckApi {

    convertDeckFromStorage(name, deck) {
        return {
            ...deck,
            title: name
        }
    }

    save(name, deck) {

        if(!deck) {
            deck = {questions:[]};
        }

        return AsyncStorage.mergeItem(DECK_LIST, JSON.stringify({
            [name]: deck
        }));
    }

    getAll() {
        //https://github.com/facebook/react-native/issues/14101
        return AsyncStorage.getItem(DECK_LIST).then(decks => {
            if(!decks) {
                AsyncStorage.mergeItem(DECK_LIST, JSON.stringify(initialState));
                decks=initialState;
            } else {
                decks = JSON.parse(decks);
            }
            return Object.keys(decks).map((k) => this.convertDeckFromStorage(k, decks[k]));
        });
    }
}

export default new DeckApi();