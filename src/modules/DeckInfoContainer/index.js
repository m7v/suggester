import React, {Component} from 'react';
import {connect} from 'react-redux';
import {string, object} from 'prop-types';
import { Link } from 'react-router-dom';
import DeckInfo from './../../components/DeckInfo/index';
import { stateToProps } from './connect/stateToProps';

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

export default connect(stateToProps, null)(DeckInfoContainer);
