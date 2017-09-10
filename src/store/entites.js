import { map } from 'lodash';
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

    map(entities.Card.items, cardId => {
        cards[cardId] = Card.create(entities.Card.itemsById[cardId]);
    });

    map(entities.Deck.items, deckId => {
        decks[deckId] = Deck.create(entities.Deck.itemsById[deckId]);
    });

    map(entities.DeckCardList.items, cardId => {
        const cardInDeck = entities.DeckCardList.itemsById[cardId];
        decks[cardInDeck.fromDeckId].cardList.add(cards[cardInDeck.toCardId]);
    });

    return initialState;
}

export default bootstrapState();
