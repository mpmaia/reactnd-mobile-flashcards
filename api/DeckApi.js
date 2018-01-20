import { AsyncStorage } from 'react-native'

initialState = [
    {
        title: 'English-Italian',
        questions: [
            {
                question: 'To walk',
                answer: 'camminare'
            }
        ]
    },
    {
        title: 'English-Portuguese',
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
];

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

        initialState.push(this.convertDeckFromStorage(name, deck));

        return AsyncStorage.mergeItem(DECK_LIST, JSON.stringify({
            [name]: deck
        }));
    }

    getAll() {
        return initialState;
        /*
        return AsyncStorage.getItem(DECK_LIST).then(decks => {
            if(!decks) {
                AsyncStorage.mergeItem(DECK_LIST, JSON.stringify(initialState));
                decks=initialState;
            }
            return decks;
        })*/
    }
}

export default new DeckApi();