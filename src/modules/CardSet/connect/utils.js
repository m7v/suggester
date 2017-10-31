import intersection from 'lodash/intersection';
import sortBy from 'lodash/sortBy';

const rarityMap = {
    basicLand: 'Basic Land',
    common: 'Common',
    uncommon: 'Uncommon',
    rare: 'Rare',
    mythic: 'Mythic Rare',
};
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
    colors: selectedFilters => card => (card.colors && card.colors.length === selectedFilters.length) &&
        intersection(card.colors, selectedFilters).length === card.colors.length,

    types: selectedFilters => card => !!intersection(card.types, selectedFilters).length,

    rarity: selectedFilters => card => selectedFilters.includes(card.rarity),
};

const getActiveFilters = mapping => filter => Object.keys(filter)
    .filter((type) => filter[type])
    .map(selectType => mapping[selectType]);

export const getActiveTypeFilter = getActiveFilters(typesMap);
export const getActiveColorFilter = getActiveFilters(colorMap);
export const getActiveRarityFilter = getActiveFilters(rarityMap);

export const createCardFilter = (selectedFilters, property) => cards => {
    if (!cards.length) {
        return cards;
    }
    if (selectedFilters.length) {
        return sortBy(cards.filter(filters[property](selectedFilters)), [c => c[property].length]);
    }
    return sortBy(cards, [c => c[property] && c[property].length]);
};
