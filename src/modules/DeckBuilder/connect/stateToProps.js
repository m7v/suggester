import { createSelector } from 'redux-orm';
import map from 'lodash/map';
import orm from '../../../core/reducers/entities';

const getDecks = (state) => state.entities;

const deckSelector = createSelector(orm, getDecks, (session) => session.Deck.all().toRefArray());

const getDeck = (decks, deckId) => {
    const currentDeck = decks.find(deck => deck.id === deckId);
    return currentDeck || {};
};

const getDeckList = (deck) => {
    if (!deck.cards) {
        return '';
    }

    const deckListArray = map(deck.cards, card => `${card.count} ${card.name}`);

    return deckListArray.join('\n');
};

export function stateToProps(state, props) {
    const deck = getDeck(deckSelector(state), props.deckId);

    return {
        deck,
        deckId: props.deckId,
        deckList: getDeckList(deck),
        deckTitle: deck.name || ''
    };
}
