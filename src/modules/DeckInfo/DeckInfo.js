import React from 'react';
import { connect } from 'react-redux';
import { shape } from 'prop-types';
import { Link } from 'react-router-dom';
import DeckInfoComponent from './../../components/DeckInfo/index';
import { stateToProps } from './connect/stateToProps';

class DeckInfo extends React.Component {

    render() {
        const { deck } = this.props;
        return (
            <div className="DeckInfo__deckCard">
                <Link to={'/decks'} replace >Назад</Link>
                {!deck.id &&
                    <div>Loading...</div>
                }
                {deck.id &&
                    <DeckInfoComponent
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

DeckInfo.propTypes = {
    deck: shape({}).isRequired
};

export default connect(stateToProps, null)(DeckInfo);
