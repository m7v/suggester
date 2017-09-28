import { createSelector } from 'redux-orm';
import orm from '../../../store/models/models';

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
        decks: deckSelector(state),
        cards: cardSelector(state),
        draftDeck: state.deckBuilder.get('draftDeck'),
        loading: state.deckBuilder.getIn(['meta', 'loading']),
    };
}
