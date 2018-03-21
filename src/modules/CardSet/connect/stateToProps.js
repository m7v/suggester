import { createSelector } from 'reselect';
import sortBy from 'lodash/sortBy';
import get from 'lodash/get';
import {
    createCardFilter,
    getActiveColorFilter,
    getActiveTypeFilter,
    getActiveRarityFilter,
} from './../../../core/helpers/filter.helper';

const getColorFilter = (state) => state.appContext.CardSets.filters.colors;
const getTypeFilter = (state) => state.appContext.CardSets.filters.types;
const getRarityFilter = (state) => state.appContext.CardSets.filters.rarity;

const getCardSetsSelector = createSelector([
    (state) => state.appContext.CardSets.data,
], (cardSets) => cardSets);

const getCurrentSetSelector = (sets, code) => sets[code] || {};

const getCardsByCode = (cardSets, code, typeFilter, rarityFilter, colorFilter) => {
    if (get(cardSets, `${code}.items`, []).length) {
        const cards = cardSets[code].items;
        const selectedColorFilters = getActiveColorFilter(colorFilter);
        const selectedTypeFilters = getActiveTypeFilter(typeFilter);
        const selectedRarityFilters = getActiveRarityFilter(rarityFilter);

        const filterByColor = createCardFilter(selectedColorFilters, 'colors');
        const filterByTypes = createCardFilter(selectedTypeFilters, 'types');
        const filterByRarity = createCardFilter(selectedRarityFilters, 'rarity');

        return filterByTypes(filterByColor(filterByRarity(cards)));
    }
    return [];
};

export default function stateToProps(state, props) {
    const colorFilter = getColorFilter(state);
    const typeFilter = getTypeFilter(state);
    const rarityFilter = getRarityFilter(state);
    const currentSet = getCurrentSetSelector(getCardSetsSelector(state), props.code);

    return {
        colors: colorFilter,
        types: typeFilter,
        rarity: rarityFilter,
        code: props.code,
        currentSet,
        cards: sortBy(
            getCardsByCode(getCardSetsSelector(state), props.code, typeFilter, rarityFilter, colorFilter),
            o => Number(o.number),
        ),
        loading: state.appContext.CardSets.loading,
        error: state.appContext.CardSets.error,
    };
}
