import React from 'react';
import { connect } from 'react-redux';
import { string, shape, func } from 'prop-types';
import { Link } from 'react-router-dom';
import DeckInfoComponent from './../../components/DeckInfo';
import { stateToProps } from './connect/stateToProps';
import { dispatchToProps } from './connect/dispatchToProps';

class DeckInfo extends React.Component {

    componentWillMount() {
        if (this.props.deckId) {
            this.props.getDeckById(this.props.deckId);
            this.props.getCardListByDeckId(this.props.deckId);
        }
    }

    render() {
        const { deck } = this.props;
        return (
            <div className="DeckInfo__root">
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
    deckId: string.isRequired,
    deck: shape({}).isRequired,
    getDeckById: func.isRequired,
    getCardListByDeckId: func.isRequired,
};

export default connect(stateToProps, dispatchToProps)(DeckInfo);
