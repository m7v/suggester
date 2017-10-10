import { createSelector as createSelectorORM } from 'redux-orm';
import { createSelector } from 'reselect';
import orm from '../../../reducers/entities';
import { createCardFilter, getActiveColorFilter, getActiveTypeFilter } from './utils';

const ormSelector = function(state) {
    return state.entities;
};

const cardSelector = createSelectorORM(orm, ormSelector, session => session.Card.all().toRefArray());
const getColorFilter = (state) => state.appContext.Cards.filters.colors;
const getTypeFilter = (state) => state.appContext.Cards.filters.types;

const getCardsByFilter = createSelector(
    [cardSelector, getColorFilter, getTypeFilter ],
    (cards, colorFilter, typeFilter) => {
        const selectedColorFilters = getActiveColorFilter(colorFilter);
        const selectedTypeFilters = getActiveTypeFilter(typeFilter);

        const filterByColor = createCardFilter(selectedColorFilters, 'colors');
        const filterByTypes = createCardFilter(selectedTypeFilters, 'types');

        return filterByTypes(filterByColor(cards));
    }
);

export function stateToProps(state) {
    return {
        colors: getColorFilter(state),
        types: getTypeFilter(state),
        cards: getCardsByFilter(state),
        isMobile: state.appContext.isMobile,
        loading: state.appContext.Cards.loading,
        error: state.appContext.Cards.error,
    };
}
