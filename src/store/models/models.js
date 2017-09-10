import { Model, many, ORM } from 'redux-orm';

const ADD_DECK = 'DECK_BUILDER/DECK/ADD';
const UPDATE_DECK = 'DECK_BUILDER/DECK/UPDATE';
const DELETE_DECK = 'DECK_BUILDER/DECK/DELETE';
const ADD_CARD = 'DECK_BUILDER/DECK/ADD_CARD';

class Deck extends Model {
    static get fields() {
        return {
            cardList: many({to: 'Card'})
        };
    }

    static reducer(action, deck) {
        switch (action.type) {
            case ADD_DECK: {
                deck.create(action.payload.deck);
                break;
            }

            case DELETE_DECK: {
                deck.withId(action.payload.deckId).delete();
                break;
            }

            case UPDATE_DECK: {
                const {payload} = action;
                const {deckId} = payload;

                deck.withId(deckId).update(action.payload);
                break;
            }

            case ADD_CARD : {
                deck
                    .withId(action.payload.deckId)
                    .cardList
                    .add(action.payload.card.id);
                break;
            }
            default:
                // noop
        }
    }
}

Deck.modelName = 'Deck';

class Card extends Model {
    static get fields() {
        return {};
    }

    static reducer(action, card) {
        switch (action.type) {
            case ADD_CARD: {
                card.upsert(action.payload.card);
                break;
            }
            default:
                // noop
        }
    }
}

Card.modelName = 'Card';

// Create a Schema instance, and hook up the Post and Comment models
const orm = new ORM();
orm.register(Deck, Card);
export default orm;
