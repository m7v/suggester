import { Model, many } from 'redux-orm';
import {
    ADD_CARD,
    ADD_DECK,
    DELETE_DECK,
    UPDATE_DECK
} from '../../deckBuilder/deckBuilder.helper';

class Deck extends Model {
    static get fields() {
        return {
            cardList: many({to: 'Card'})
        };
    }

    static reducer(action, deck) {
        switch (action.type) {
            case ADD_DECK: {
                deck.upsert(action.payload.deck);
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
                const currentDeck = deck
                    .withId(action.payload.deckId);
                if (currentDeck) {
                    try {
                        currentDeck
                            .cardList
                            .add(action.payload.card.id);
                    } catch (e) {
                        // noop
                    }
                }
                break;
            }
            default:
            // noop
        }
    }
}

Deck.modelName = 'Deck';

export default Deck;
