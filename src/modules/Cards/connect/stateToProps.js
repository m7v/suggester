import { createSelector } from 'redux-orm';
import orm from '../../../reducers/entities';

const ormSelector = function(state) {
    return state.entities;
};

const cardSelector = createSelector(orm, ormSelector, session => session.Card.all().toRefArray());

export function stateToProps(state) {
    return {
        cards: cardSelector(state),
        isMobile: state.appContext.isMobile,
        loading: state.appContext.Cards.loading,
        error: state.appContext.Cards.error,
    };
}
