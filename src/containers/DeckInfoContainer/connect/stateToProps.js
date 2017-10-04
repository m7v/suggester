import { createSelector } from 'redux-orm';
import orm from 'src/store/models/models';

const getDecks = function(state) {
    return state.entities;
};

const deckSelector = createSelector(orm, getDecks, (session) => {
    const decks = session.Deck.all().toModelArray();
    return decks.map(deckRef => ({
        ...deckRef.ref,
        cards: deckRef.cardList.all().toRefArray(),
    }));
});

const getDeck = function(decks, deckId) {
    const currentDeck = decks.find(deck => deck.id === deckId);
    return currentDeck || {};
};

export function stateToProps(state, props) {
    return {
        deck: getDeck(deckSelector(state), props.deckId)
    };
}
