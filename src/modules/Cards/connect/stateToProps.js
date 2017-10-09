import { createSelector as createSelectorORM } from 'redux-orm';
import { createSelector } from 'reselect';
import intersection from 'lodash/intersection';
import sortBy from 'lodash/sortBy';
import orm from '../../../reducers/entities';

const colorMap = {
    r: 'Red',
    w: 'White',
    u: 'Blue',
    b: 'Black',
    g: 'Green',
};
const typesMap = {
    creature: 'Creature',
    instant: 'Instant',
    sorcery: 'Sorcery',
    planeswalker: 'Planeswalker',
    enchantment: 'Enchantment',
    artifact: 'Artifact',
    land: 'Land',
};

const filters = {
    colors: selectedFilters => card => !!intersection(card.colors, selectedFilters).length,
    types: selectedFilters => card => !!intersection(card.types, selectedFilters).length,
};

const createCardFilter = (selectedFilters, property) => cards => {
    if (!cards.length) {
        return cards;
    }
    if (selectedFilters.length) {
        return sortBy(cards.filter(filters[property](selectedFilters)), [c => c[property].length]);
    }
    return sortBy(cards, [c => c[property] && c[property].length]);
};

const ormSelector = function(state) {
    return state.entities;
};

const cardSelector = createSelectorORM(orm, ormSelector, session => session.Card.all().toRefArray());
const getColorFilter = (state) => state.appContext.Cards.filters.colors;
const getTypeFilter = (state) => state.appContext.Cards.filters.types;

const getCardsByFilter = createSelector(
    [cardSelector, getColorFilter, getTypeFilter ],
    (cards, colorFilter, typeFilter) => {
        const selectedColorFilters = Object.keys(colorFilter)
            .filter((color) => colorFilter[color])
            .map(selectColor => colorMap[selectColor]);
        const selectedTypeFilters = Object.keys(typeFilter)
            .filter((color) => typeFilter[color])
            .map(selectColor => typesMap[selectColor]);

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
