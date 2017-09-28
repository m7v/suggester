import { size, head } from 'lodash';

export function buildDeck(deckId, name, cards) {
    return {
        id: deckId,
        headliner: head(cards).imageUrl,
        name,
        cardCount: cards.reduce((count, card) => Number(card.count) + count, 0),
        analytics: {
            colorComposition: buildColorComposition(cards),
            cardRarity: buildCardRarity(cards),
            manaCurve: buildManaCurve(cards),
            deckComposition: buildDeckComposition(cards),
        },
    };
}

function buildColorComposition(cards) {
    return cards.reduce((composition, card) => {
        if (size(card.colors)) {
            return card.colors.reduce((comp, color) => {
                const colorLowerCase = color.toLowerCase();
                if (comp[colorLowerCase]) {
                    comp[colorLowerCase] += card.count;
                } else {
                    comp[colorLowerCase] = card.count;
                }
                return comp;
            }, composition);
        }
        return composition;
    }, {});
}

function buildCardRarity(cards) {
    return cards.reduce((rarity, card) => {
        const rarityLowerCase = card.rarity.toLowerCase();
        if (rarity[rarityLowerCase]) {
            rarity[rarityLowerCase] += card.count;
        } else {
            rarity[rarityLowerCase] = card.count;
        }
        return rarity;
    }, {});
}

function buildManaCurve(cards) {
    return cards.reduce((cmc, card) => {
        card.cmc = card.cmc || 0;
        if (cmc[card.cmc]) {
            cmc[card.cmc] += card.count;
        } else {
            cmc[card.cmc] = card.count;
        }
        return cmc;
    }, {});
}

function buildDeckComposition(cards) {
    return cards.reduce((composition, card) =>
            card.types.reduce((comp, type) => {
                const typeLowerCase = type.toLowerCase();
                if (comp[typeLowerCase]) {
                    comp[typeLowerCase] += card.count;
                } else {
                    comp[typeLowerCase] = card.count;
                }
                return comp;
            }, composition),
        {});
}
