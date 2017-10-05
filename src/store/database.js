import * as firebase from 'firebase';
import { batchActions } from 'redux-batched-actions';
import { map } from 'lodash';
import orm from '../reducers/entities/index';
import * as types from '../actions/deckBuilder/deckBuilder.types';
import { appInitialized } from '../actions/appContext/appContext.types';
import FIREBASE_CONFIG from './config';

function bootstrapState(entities) {
    const deckCreations = map(entities.Deck.items, deckId => types.createDeck(entities.Deck.itemsById[deckId]));
    const cardCreations = map(entities.DeckCardList.items, cardId => {
        const cardInDeck = entities.DeckCardList.itemsById[cardId];
        return types.addCard(entities.Card.itemsById[cardInDeck.toCardId], cardInDeck.fromDeckId);
    });
    return {
        decks: deckCreations,
        cards: [
            ...cardCreations,
            appInitialized()
        ]
    };
}

firebase.initializeApp(FIREBASE_CONFIG);
const db = firebase.database();

export function getDefaultState() {
    return orm.getDefaultState();
}

export function initializeDatabase(store) {
    db.ref('entities').on('value', data => {
        const actions = bootstrapState(data.val());
        store.dispatch(batchActions(actions.decks));
        store.dispatch(batchActions(actions.cards));
    });
}
