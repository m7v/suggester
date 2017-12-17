import { createSelector } from 'reselect';

const getDecks = function(state) {
    return state.appContext.Decks;
};

const deckSelector = createSelector(getDecks, (decks) => {
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
        deckId: props.deckId,
        deck: getDeck(deckSelector(state), props.deckId)
    };
}
