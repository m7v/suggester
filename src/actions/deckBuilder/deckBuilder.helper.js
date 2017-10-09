import size from 'lodash/size';
import head from 'lodash/head';

export function buildDeck(deckId, name, cards) {
    const analytics = buildDeckAnalytics(cards);
    return {
        id: deckId,
        headliner: head(cards).imageUrl,
        name,
        cardCount: analytics.cardCount,
        analytics: {
            colorComposition: analytics.colorComposition,
            cardRarity: analytics.cardRarity,
            manaCurve: analytics.manaCurve,
            deckComposition: analytics.deckComposition,
        },
    };
}

function buildDeckAnalytics(cards) {
    const analytics = {
        colorComposition: {},
        cardRarity: {},
        manaCurve: {},
        deckComposition: {},
        cardCount: 0,
    };

    return cards.reduce((agg, card) => {
        agg.colorComposition = buildColorComposition(card, agg.colorComposition);
        agg.cardRarity = buildCardRarity(card, agg.cardRarity);
        agg.manaCurve = buildManaCurve(card, agg.manaCurve);
        agg.deckComposition = buildDeckComposition(card, agg.deckComposition);
        agg.cardCount = Number(card.cardCount) + agg.cardCount;

        return agg;
    }, analytics);
}

function buildColorComposition(card, colorComposition) {
    if (size(card.colors)) {
        return card.colors.reduce((comp, color) => {
            const colorLowerCase = color.toLowerCase();
            if (comp[colorLowerCase]) {
                comp[colorLowerCase] += card.count;
            } else {
                comp[colorLowerCase] = card.count;
            }
            return comp;
        }, colorComposition);
    }
    return colorComposition;
}

function buildCardRarity(card, rarity) {
    const rarityLowerCase = card.rarity.toLowerCase();
    if (rarity[rarityLowerCase]) {
        rarity[rarityLowerCase] += card.count;
    } else {
        rarity[rarityLowerCase] = card.count;
    }
    return rarity;
}

function buildManaCurve(card, cmc) {
    card.cmc = card.cmc || 0;
    if (cmc[card.cmc]) {
        cmc[card.cmc] += card.count;
    } else {
        cmc[card.cmc] = card.count;
    }
    return cmc;
}

function buildDeckComposition(card, composition) {
    if (size(card.types)) {
        return card.types.reduce((comp, type) => {
            const typeLowerCase = type.toLowerCase();
            if (comp[typeLowerCase]) {
                comp[typeLowerCase] += card.count;
            } else {
                comp[typeLowerCase] = card.count;
            }
            return comp;
        }, composition);
    }
    return composition;
}
