import compact from 'lodash/compact';
import uniqBy from 'lodash/uniqBy';
import findIndex from 'lodash/findIndex';

const buildDoubleFaceCard = shortDoubleFaceInfo => suggest => {
    if (!suggest.manaCost && suggest.types.indexOf('Land') === -1) {
        return {
            ...shortDoubleFaceInfo[suggest.id],
            doubleFace: suggest
        };
    }
    if (shortDoubleFaceInfo[suggest.id]) {
        return {
            ...suggest,
            doubleFace: shortDoubleFaceInfo[suggest.id]
        };
    }
    return {
        ...suggest
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


