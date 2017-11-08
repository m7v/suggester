import { createSelector as createSelectorORM } from 'redux-orm';
import { createSelector } from 'reselect';
import filter from 'lodash/filter';
import orm from '../../../reducers/entities';
import sortBy from 'lodash/sortBy';
import {
    createCardFilter,
    getActiveColorFilter,
    getActiveTypeFilter,
    getActiveRarityFilter,
} from './utils';

const ormSelector = function(state) {
    return state.entities;
};

const setSelector = createSelectorORM(orm, ormSelector, session => session.CardSet.all().toRefArray());

const getColorFilter = (state) => state.appContext.CardSets.filters.colors;
const getTypeFilter = (state) => state.appContext.CardSets.filters.types;
const getRarityFilter = (state) => state.appContext.CardSets.filters.rarity;

const getCardSetsSelector = createSelector([
    (state) => state.appContext.CardSets.data,
], (cardSets) => cardSets);

const getCurrentSetSelector = (sets, code) => {
    const [ currentSet ] = filter(sets, (set) => set.code.toLowerCase() === code);

    return currentSet || {};
};

const getCardsByCode = (cardSets, code, typeFilter, rarityFilter, colorFilter) => {
    if (cardSets && cardSets[ code ]) {
        const cards = cardSets[ code ];

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
    const currentSet = getCurrentSetSelector(setSelector(state), props.code);

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
    };
}
