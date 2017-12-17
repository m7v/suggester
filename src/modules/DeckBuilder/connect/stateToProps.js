import { createSelector } from 'reselect';
import map from 'lodash/map';

const getDecks = (state) => state.entities.Decks;

const deckSelector = createSelector(getDecks, (decks) => decks);

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
