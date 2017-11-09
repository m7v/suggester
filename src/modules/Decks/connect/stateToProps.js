import { createSelector } from 'redux-orm';
import orm from '../../../core/reducers/entities';

const ormSelector = function(state) {
    return state.entities;
};

const deckSelector = createSelector(orm, ormSelector, session => {
    const decks = session.Deck.all().toModelArray();
    return decks.map(deckRef => ({
        ...deckRef.ref,
        cards: deckRef.cardList.all().toRefArray(),
    }));
});

const cardSelector = createSelector(orm, ormSelector, session => session.Card.all().toRefArray());

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
