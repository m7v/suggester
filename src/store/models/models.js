import { Model, many, ORM } from 'redux-orm';
import {
    ADD_CARD,
    ADD_DECK,
    DELETE_DECK,
    UPDATE_DECK
} from '../../reducers/deckBuilder/deckBuilder.helper';

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
