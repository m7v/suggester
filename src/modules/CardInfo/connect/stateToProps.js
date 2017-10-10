import { createSelector as createSelectorORM } from 'redux-orm';
import orm from '../../../reducers/entities';

const ormSelector = function(state) {
    return state.entities;
};

const cardSelector = createSelectorORM(orm, ormSelector, session => session.Card.all().toRefArray());

const getCard = function(cards, cardId) {
    const currentCard = cards.find(card => card.id === cardId);
    return currentCard || {};
};

export function stateToProps(state, props) {
    return {
        cardId: props.cardId,
        card: getCard(cardSelector(state), props.cardId),
        isMobile: state.appContext.isMobile,
        loading: state.appContext.Cards.loading,
        error: state.appContext.Cards.error,
    };
}
