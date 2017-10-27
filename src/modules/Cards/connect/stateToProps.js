import { createSelector as createSelectorORM } from 'redux-orm';
import { createSelector } from 'reselect';
import orm from 'reducers/entities';
import {
    createCardFilter,
    getActiveColorFilter,
    getActiveTypeFilter,
    getActiveRarityFilter
} from './utils';

const ormSelector = function(state) {
    return state.entities;
};

const cardSelector = createSelectorORM(orm, ormSelector, session => session.Card.all().toRefArray());
const getColorFilter = (state) => state.appContext.Cards.filters.colors;
const getTypeFilter = (state) => state.appContext.Cards.filters.types;
const getRarityFilter = (state) => state.appContext.Cards.filters.rarity;

const getCardsByFilter = createSelector(
    [cardSelector, getColorFilter, getTypeFilter, getRarityFilter],
    (cards, colorFilter, typeFilter, rarityFilter) => {
        const selectedColorFilters = getActiveColorFilter(colorFilter);
        const selectedTypeFilters = getActiveTypeFilter(typeFilter);
        const selectedRarityFilters = getActiveRarityFilter(rarityFilter);

        const filterByColor = createCardFilter(selectedColorFilters, 'colors');
        const filterByTypes = createCardFilter(selectedTypeFilters, 'types');
        const filterByRarity = createCardFilter(selectedRarityFilters, 'rarity');

        return filterByTypes(filterByColor(filterByRarity(cards)));
    }
);

export function stateToProps(state) {
    return {
        colors: getColorFilter(state),
        types: getTypeFilter(state),
        rarity: getRarityFilter(state),
        cards: getCardsByFilter(state),
        loading: state.appContext.Cards.loading,
        error: state.appContext.Cards.error,
    };
}
