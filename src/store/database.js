import * as firebase from 'firebase';
import { batchActions } from 'redux-batched-actions';
import { map } from 'lodash';
import * as types from '../actions/deckBuilder/deckBuilder.types';

const FIREBASE_CONFIG = {
    apiKey: 'AIzaSyA5spEBu0NHii_wMNVdnvGmJErkXYzuPEQ',
    authDomain: 'mtg-card-collections.firebaseapp.com',
    databaseURL: 'https://mtg-card-collections.firebaseio.com',
    projectId: 'mtg-card-collections',
    storageBucket: 'mtg-card-collections.appspot.com',
    messagingSenderId: '521038831643'
};

function bootstrapState(entities) {
    const deckCreations = map(entities.Deck.items, deckId => types.createDeck(entities.Deck.itemsById[deckId]));

    const cardCreations = map(entities.DeckCardList.items, cardId => {
        const cardInDeck = entities.DeckCardList.itemsById[cardId];
        return types.addCard(entities.Card.itemsById[cardInDeck.toCardId], cardInDeck.fromDeckId);
    });

    return [
        ...deckCreations,
        ...cardCreations
    ];
}

firebase.initializeApp(FIREBASE_CONFIG);
const db = firebase.database();

export default function initializeDatabase(store) {
    db.ref('entities').on('value', data => {
        const actions = bootstrapState(data.val());
        store.dispatch(batchActions(actions));
    });
}
