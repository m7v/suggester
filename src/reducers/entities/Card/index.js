import { Model } from 'redux-orm';
import {
    ADD_CARD,
} from 'src/reducers/deckBuilder/deckBuilder.helper';

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

export default Card;
