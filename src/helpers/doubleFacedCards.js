import compact from 'lodash/compact';
import uniqBy from 'lodash/uniqBy';
import findIndex from 'lodash/findIndex';

const DOUBLE_FACED_TYPE = 'double-faced';

const buildDoubleFaceCard = shortDoubleFaceInfo => card => {
    if (!card.manaCost && card.layout === DOUBLE_FACED_TYPE && card.types.indexOf('Land') === -1) {
        return {
            ...shortDoubleFaceInfo[card.id],
            doubleFace: card
        };
    }
    if (shortDoubleFaceInfo[card.id]) {
        return {
            ...card,
            doubleFace: shortDoubleFaceInfo[card.id]
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
            mapping[searchCard.id] = { ...card };
            needToSearchCards
                .splice(findIndex(needToSearchCards, (c) => card.name === c.doubleName), 1);
        }
        return mapping;
    }, {});

export const buildDoubleFaceCards = (suggestions, shortDoubleFaceInfo) =>
    uniqBy(compact(suggestions.map(buildDoubleFaceCard(shortDoubleFaceInfo))), 'id');


