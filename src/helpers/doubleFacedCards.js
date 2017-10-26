import compact from 'lodash/compact';
import uniqBy from 'lodash/uniqBy';
import findIndex from 'lodash/findIndex';

const DOUBLE_FACED_TYPE = 'double-faced';

const buildDoubleFaceCard = shortDoubleFaceInfo => card => {
    if (!card.manaCost && card.layout === DOUBLE_FACED_TYPE && card.types.indexOf('Land') === -1) {
        return {
            ...shortDoubleFaceInfo[card.id],
            doubleFace: {
                ...card,
                imageUrlLarge: `https://magiccards.info/scans/en/${card.set.toLowerCase()}/${card.number}.jpg`
            }
        };
    }
    if (shortDoubleFaceInfo[card.id]) {
        const sdfi = shortDoubleFaceInfo[card.id];
        return {
            ...card,
            doubleFace: {
                ...sdfi,
                imageUrlLarge: `https://magiccards.info/scans/en/${sdfi.set.toLowerCase()}/${sdfi.number}.jpg`
            }
        };
    }
    return {
        ...card
    };
};

export const fullCardsInfoLens = needToSearchCards => doubleFacedCards =>
    doubleFacedCards.reduce((mapping, card) => {
        const [searchCard] = needToSearchCards.filter(searchedCard => card.name === searchedCard.doubleName);

        if (searchCard) {
            mapping[searchCard.id] = {
                ...card,
                imageUrlLarge: `https://magiccards.info/scans/en/${card.set.toLowerCase()}/${card.number}.jpg`
            };
            needToSearchCards
                .splice(findIndex(needToSearchCards, (c) => card.name === c.doubleName), 1);
        }
        return mapping;
    }, {});

export const buildDoubleFaceCards = (suggestions, shortDoubleFaceInfo) =>
    uniqBy(compact(suggestions.map(buildDoubleFaceCard(shortDoubleFaceInfo))), 'id');


