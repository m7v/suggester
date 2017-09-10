import orm from './models/models';
import { state } from './state';

const entities = state;

function bootstrapState() {
    const initialState = orm.getDefaultState();
    const session = orm.withMutations(initialState);
    const {
        Deck,
        Card
    } = session;
    const decks = {};
    const cards = {};

    entities.Card.items.each(cardId => {
        cards[cardId] = Card.create(entities.Card.itemsById[cardId]);
    });

    entities.Deck.items.each(deckId => {
        decks[deckId] = Deck.create(entities.Deck.itemsById[deckId]);
    });

    entities.DeckCardList.items.each(cardId => {
        const cardInDeck = entities.DeckCardList.itemsById[cardId];
        decks[cardInDeck.fromDeckId].cardList.add(cards[cardInDeck.toCardId]);
    });

    return initialState;
}

export default bootstrapState();
