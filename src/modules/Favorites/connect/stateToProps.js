import { createSelector } from 'reselect';
import {
    createCardFilter,
    getActiveColorFilter,
    getActiveTypeFilter,
    getActiveRarityFilter
} from './../../../core/helpers/filter.helper';

const cardSelector = (state) => state.favorites.items;
const getColorFilter = (state) => state.appContext.Favorites.filters.colors;
const getTypeFilter = (state) => state.appContext.Favorites.filters.types;
const getRarityFilter = (state) => state.appContext.Favorites.filters.rarity;

const getCardsByFilter = createSelector(
    [cardSelector, getColorFilter, getTypeFilter, getRarityFilter],
    (cards, colorFilter, typeFilter, rarityFilter) => {
        const selectedColorFilters = getActiveColorFilter(colorFilter);
        const selectedTypeFilters = getActiveTypeFilter(typeFilter);
        const selectedRarityFilters = getActiveRarityFilter(rarityFilter);

        const filterByColor = createCardFilter(selectedColorFilters, 'colors');
        const filterByTypes = createCardFilter(selectedTypeFilters, 'types');
        const filterByRarity = createCardFilter(selectedRarityFilters, 'rarity');

        return filterByTypes(filterByColor(filterByRarity(Object.values(cards))));
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
