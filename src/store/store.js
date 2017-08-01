import {createStore, applyMiddleware} from 'redux';
import {Map, List} from 'immutable';
import thunk from 'redux-thunk';
import {enableBatching} from 'redux-batched-actions';
import {createLogger} from 'redux-logger';
import {composeWithDevTools} from 'redux-devtools-extension';
import {rootReducer} from './../reducers/index';
import {ping} from './../middlewares/ping';
import queryString from 'query-string';

const parsed = queryString.parse(window.location.search);
const initialState = {
    suggester: new Map({
        query: parsed.q || '',
        suggestions: new List([])
    }),
    deckBuilder: new Map({
        draftDeck:
        '1 Nicol Bolas, Planeswalker\n' +
        '1 Blood Tyrant\n' +
        '1 Deathbringer Regent\n' +
        '1 Sphinx of Jwar Isle\n' +
        '2 Flametongue Kavu\n' +
        '1 Archfiend of Depravity\n' +
        '2 Nightscape Familiar\n' +
        '1 Prognostic Sphinx\n' +
        '1 Icefall Regent\n' +
        '2 Vampire Nighthawk\n' +
        '2 Bone Picker\n' +
        '1 Harvester of Souls\n' +
        '1 Overseer of the Damned\n' +
        '1 Baleful Strix\n' +
        '1 Cruel Ultimatum\n' +
        '1 Extract from Darkness\n' +
        '1 Slave of Bolas\n' +
        '1 Sudden Demise\n' +
        '1 Dreadbore\n' +
        '2 Reckless Spite\n' +
        '2 Doom Blade\n' +
        '2 Lightning Bolt\n' +
        '2 Obelisk of Grixis\n' +
        '1 Talisman of Indulgence\n' +
        '1 Talisman of Dominance\n' +
        '1 Soul Ransom\n' +
        '4 Crumbling Necropolis\n' +
        '2 Highland Lake\n' +
        '3 Mountain\n' +
        '7 Swamp\n' +
        '5 Island\n' +
        '1 Submerged Boneyard\n' +
        '1 Drowned Catacomb\n' +
        '1 Cinder Barrens\n' +
        '1 Dragonskull Summit\n' +
        '1 Grixis Panorama'
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
