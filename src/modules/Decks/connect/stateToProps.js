import { createSelector } from 'reselect';

const decksSelector = function(state) {
    return state.appContext.Decks;
};

const deckSelector = createSelector(decksSelector, (decks) => {
    return decks.map(deckRef => ({
        ...deckRef.ref,
        cards: deckRef.cardList.all().toRefArray(),
    }));
});

const cardSelector = createSelector(deckSelector, decks => decks);

export default function stateToProps(state) {
    return {
        isMobile: state.appContext.isMobile,
        decks: deckSelector(state),
        cards: cardSelector(state),
        draftDeck: state.deckBuilder.draftDeck,
        loading: state.appContext.Decks.loading,
        error: state.appContext.Decks.error,
    };
}
