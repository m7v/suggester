import { Model } from 'redux-orm';
import {
    ADD_CARDSET
} from '../../browse/browse.helper';

class CardSet extends Model {
    static get fields() {
        return {};
    }

    static reducer(action, set) {
        switch (action.type) {
            case ADD_CARDSET: {
                set.upsert(action.payload.set);
                break;
            }
            default:
            // noop
        }
    }
}

CardSet.modelName = 'CardSet';

export default CardSet;
