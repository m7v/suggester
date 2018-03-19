import compact from 'lodash/compact';
import uniqBy from 'lodash/uniqBy';
import findIndex from 'lodash/findIndex';

export const DOUBLE_FACED_TYPE = 'double-faced';

const getSetName = (set) => {
    switch (set) {
        case 'MPS':
            return 'mpskld';
        case 'MPS_AKH':
            return 'mpsakh';
        case 'HOP':
            return 'pch';
        case 'DRB':
            return 'fvd';
        case 'CON':
            return 'cfx';
        case 'GPT':
            return 'gp';
        default:
            return set.replace(/_/g, '').toLowerCase();
    }
};

export const getOversizedCardUrl = (card) => {
    // Hack for Kaladesh MasterPieces.
    // We have different setName on `api.magicthegathering.io` and on `magiccards.info`
    // Also related to Planechase.
    const setName = getSetName(card.set);
    return `https://magiccards.info/scans/en/${setName}/${card.number}.jpg`;
};

const buildDoubleFaceCard = shortDoubleFaceInfo => card => {
    if (!card.manaCost && card.layout === DOUBLE_FACED_TYPE && card.types.indexOf('Land') === -1) {
        return {
            ...shortDoubleFaceInfo[ card.id ],
            doubleFace: {
                ...card,
                imageUrlLarge: getOversizedCardUrl(card),
            },
        };
    }
    if (shortDoubleFaceInfo[ card.id ]) {
        const sdfi = shortDoubleFaceInfo[ card.id ];
        return {
            ...card,
            doubleFace: {
                ...sdfi,
                imageUrlLarge: getOversizedCardUrl(card),
            },
        };
    }
    return {
        ...card
    };
};

export const fullCardsInfoLens = needToSearchCards => doubleFacedCards =>
    doubleFacedCards.reduce((mapping, card) => {
        const [ searchCard ] = needToSearchCards.filter(searchedCard => card.name === searchedCard.doubleName);

        if (searchCard) {
            mapping[ searchCard.id ] = {
                ...card,
                imageUrlLarge: getOversizedCardUrl(card),
            };
            needToSearchCards
                .splice(findIndex(needToSearchCards, (c) => card.name === c.doubleName), 1);
        }
        return mapping;
    }, {});

export const buildDoubleFaceCards = (suggestions, shortDoubleFaceInfo) =>
    uniqBy(compact(suggestions.map(buildDoubleFaceCard(shortDoubleFaceInfo))), 'id');
