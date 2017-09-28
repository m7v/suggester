import React, {Component} from 'react';
import {connect} from 'react-redux';
import {string, object} from 'prop-types';
import { Link } from 'react-router-dom';
import { createSelector } from 'redux-orm';
import orm from '../../store/models/models';
import DeckInfo from '../../components/DeckInfo/index';

class DeckInfoContainer extends Component {

    render() {
        const { deck } = this.props;
        return (
            <div className="DeckInfoContainer__deckCard">
                <Link to={'/decks'} replace >Назад</Link>
                {!deck.id &&
                    <div>Loading...</div>
                }
                {deck.id &&
                    <DeckInfo
                        key={deck.id}
                        deck={deck}
                        openDeck={() => {}}
                        removeDeck={() => {}}
                    />
                }
            </div>
        );
    }
}

DeckInfoContainer.propTypes = {
    deckId: string.isRequired,
    deck: object,
};

const getDecks = function(state) {
    return state.entities;
};

const deckSelector = createSelector(orm, getDecks, (session) => {
    const decks = session.Deck.all().toModelArray();
    return decks.map(deckRef => ({
        ...deckRef.ref,
        cards: deckRef.cardList.all().toRefArray(),
    }));
});

const getDeck = function(decks, deckId) {
    const currentDeck = decks.find(deck => deck.id === deckId);
    return currentDeck || {};
};

function stateToProps(state, props) {
    return {
        deck: getDeck(deckSelector(state), props.deckId)
    };
}

export default connect(stateToProps, null)(DeckInfoContainer);
