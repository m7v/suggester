import * as firebase from 'firebase';
import { batchActions } from 'redux-batched-actions';
import { map } from 'lodash';
import orm from '../reducers/entities/index';
import * as types from '../actions/deckBuilder/deckBuilder.types';
import FIREBASE_CONFIG from './config';

function bootstrapState(entities) {
    return {
        decks: map(entities.Deck.items, deckId => types.createDeck(entities.Deck.itemsById[deckId])),
        cards: map(entities.DeckCardList.items, cardId => {
            const cardInDeck = entities.DeckCardList.itemsById[cardId];
            return types.addCard(entities.Card.itemsById[cardInDeck.toCardId], cardInDeck.fromDeckId);
        })
    };
}

firebase.initializeApp(FIREBASE_CONFIG);
const db = firebase.database();

export function getDefaultState() {
    return orm.getDefaultState();
}

export function initializeDatabase(store) {
    const storedData = localStorage.getItem('store.entities');
    if (storedData) {
        const actions = bootstrapState(JSON.parse(storedData));
        store.dispatch(batchActions(actions.decks));
    }
    db.ref('entities').on('value', data => {
        localStorage.setItem('store.entities', JSON.stringify(data.val()));
        const actions = bootstrapState(data.val());
        store.dispatch(batchActions(actions.decks));
        store.dispatch(batchActions(actions.cards));
    });
}
