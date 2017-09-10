import {createStore, applyMiddleware} from 'redux';
import {Map, List} from 'immutable';
import queryString from 'query-string';
import thunk from 'redux-thunk';
import {enableBatching} from 'redux-batched-actions';
import {createLogger} from 'redux-logger';
import {composeWithDevTools} from 'redux-devtools-extension';
import {rootReducer} from './../reducers/index';
import {ping} from './../middlewares/ping';
import entities from './entites';

const parsed = queryString.parse(window.location.search);
const initialState = {
    entities,
    suggester: new Map({
        query: parsed.q || '',
        suggestions: new List([])
    }),
    deckBuilder: new Map({
        draftDeck:
        '1 Ajani Vengeant\n' +
        '1 Ageless Entity\n' +
        '2 Ajani\'s Pridemate\n' +
        '1 Briarhorn\n' +
        '1 Canyon Wildcat\n' +
        '1 Essence Warden\n' +
        '1 Firemane Angel\n' +
        '1 Fleetfoot Panther\n' +
        '1 Grazing Gladehart\n' +
        '1 Jade Mage\n' +
        '1 Kird Ape\n' +
        '1 Loam Lion\n' +
        '1 Loxodon Hierarch\n' +
        '1 Marisi\'s Twinclaws\n' +
        '1 Nacatl Hunt-Pride\n' +
        '1 Pride of Lions\n' +
        '1 Qasali Pridemage\n' +
        '1 Spitemare\n' +
        '2 Sylvan Ranger\n' +
        '1 Wild Nacatl\n' +
        '1 Woolly Thoctar\n' +
        '1 Lead the Stampede\n' +
        '1 Titanic Ultimatum\n' +
        '1 Lightning Helix\n' +
        '1 Naya Charm\n' +
        '2 Sylvan Bounty\n' +
        '1 Behemoth Sledge\n' +
        '1 Ajani\'s Mantra\n' +
        '1 Griffin Guide\n' +
        '2 Recumbent Bliss\n' +
        '1 Searing Meditation\n' +
        '2 Evolving Wilds\n' +
        '8 Forest\n' +
        '1 Graypelt Refuge\n' +
        '2 Jungle Shrine\n' +
        '1 Kazandu Refuge\n' +
        '3 Mountain\n' +
        '6 Plains\n' +
        '1 Sapseep Forest\n' +
        '1 Vitu-Ghazi, the City-Tree\n'
    })
};

export const store = createStore(
    enableBatching(rootReducer),
    initialState,
    composeWithDevTools(
        applyMiddleware(
            thunk,
            ping,
            createLogger()
        )
    )
);
