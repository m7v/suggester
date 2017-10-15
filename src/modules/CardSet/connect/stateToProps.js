import { createSelector } from 'reselect';
import { createCardFilter, getActiveColorFilter, getActiveTypeFilter } from './utils';

const getColorFilter = (state) => state.appContext.CardSets.filters.colors;
const getTypeFilter = (state) => state.appContext.CardSets.filters.types;

const getCardSetsSelector = createSelector([
    (state) => state.appContext.CardSets.data
], (cardSets) => cardSets);

const getCardsByCode = (cardSets, code, typeFilter, colorFilter) => {
    if (cardSets && cardSets[code]) {
        const cards = cardSets[code];

        const selectedColorFilters = getActiveColorFilter(colorFilter);
        const selectedTypeFilters = getActiveTypeFilter(typeFilter);

        const filterByColor = createCardFilter(selectedColorFilters, 'colors');
        const filterByTypes = createCardFilter(selectedTypeFilters, 'types');

        return filterByTypes(filterByColor(cards));
    }
    return [];
};

export default function stateToProps(state, props) {
    const colorFilter = getColorFilter(state);
    const typeFilter = getTypeFilter(state);
    return {
        colors: colorFilter,
        types: typeFilter,
        code: props.code,
        cards: getCardsByCode(getCardSetsSelector(state), props.code, typeFilter, colorFilter),
        loading: state.appContext.CardSets.loading,
    };
}
