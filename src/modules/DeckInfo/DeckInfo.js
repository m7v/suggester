import './DeckInfo.css';
import React from 'react';
import { connect } from 'react-redux';
import { string, shape, func } from 'prop-types';
import Link from 'react-router-dom/Link';
import DeckInfoComponent from '../../components/DeckInfo';
import { stateToProps } from './connect/stateToProps';
import { dispatchToProps } from './connect/dispatchToProps';

class DeckInfo extends React.Component {

    componentWillMount() {
        if (this.props.deckId) {
            this.props.getDeckById(this.props.deckId);
            this.props.getCardListByDeckId(this.props.deckId);
        }
    }

    removeDeck = () => this.props.removeDeck(this.props.deckId);

    render() {
        const { deck } = this.props;
        return (
            <div className="DeckInfo__root">
                {deck.id &&
                    <div className="DeckInfo__container">
                        <div className="DeckInfo__links">
                            <Link to={'/decks'} replace >Back</Link>
                            <Link to={`/decks/${deck.id}/edit`} replace >Edit</Link>
                            <Link to={'/decks'} replace onClick={this.removeDeck}>Delete</Link>
                        </div>
                        <DeckInfoComponent
                            key={deck.id}
                            deck={deck}
                            openDeck={() => {}}
                            removeDeck={() => {}}
                        />
                    </div>
                }
            </div>
        );
    }
}

DeckInfo.propTypes = {
    deckId: string.isRequired,
    deck: shape({}).isRequired,
    removeDeck: func.isRequired,
    getDeckById: func.isRequired,
    getCardListByDeckId: func.isRequired,
};

export default connect(stateToProps, dispatchToProps)(DeckInfo);
