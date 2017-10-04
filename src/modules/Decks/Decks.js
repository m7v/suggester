import './Decks.css';
import 'mana-font/css/mana.min.css';
import React from 'react';
import { connect } from 'react-redux';
import { bool, shape, string, arrayOf, func } from 'prop-types';
import mtgparser from 'mtg-parser';
import { FloatingActionButton } from 'material-ui';
import ContentAdd from 'material-ui/svg-icons/content/create';
import Deck from '../../components/Deck';
import CreateDeckForm from '../../components/CreateDeckForm';
import stateToProps from './connect/stateToProps';
import dispatchToProps from './connect/dispatchToProps';

class Decks extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            draftDeck: this.props.draftDeck,
            open: false,
            currentDeck: {},
            manaCurve: {},
            cardRarity: {},
            deckComposition: {},
            finished: false,
            stepIndex: 0,
        };
    }

    handleOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
    };

    handleCardChange = (event) => {
        this.setState({ draftDeck: event.target.value.trim() });
    };

    handleSearchCard = (event) => {
        event.preventDefault();
        if (!this.props.loading) {
            const deck = mtgparser(this.state.draftDeck, 'mtgo');
            const cards = deck.cards.reduce((cardNames, card) => {
                if (!cardNames[ card.name ]) {
                    cardNames[ card.name ] = card.number;
                }
                return cardNames;
            }, {});
            this.props.getDeckListByCardNames(cards, Object.keys(cards)[ 0 ]);
            this.setState({ open: false });
        }
    };

    render() {
        return (
            <section className="Decks">
                <div className="Decks__main">
                    <div className="Decks__deckList">
                        {this.props.decks.map((deck) => (
                            <Deck key={deck.id} deck={deck} />
                        ))}
                    </div>
                    <div className="Decks__createDeckForm">
                        {!this.props.loading &&
                            <FloatingActionButton
                                className="Decks__floatButton"
                                onTouchTap={this.handleOpen}
                                secondary
                            >
                                <ContentAdd />
                            </FloatingActionButton>
                        }
                        <CreateDeckForm
                            open={this.state.open}
                            draftDeck={this.state.draftDeck}
                            handleCardChange={this.handleCardChange}
                            handleClose={this.handleClose}
                            handleSearchCard={this.handleSearchCard}
                        />
                    </div>
                </div>
            </section>
        );
    }
}

Decks.propTypes = {
    loading: bool,
    draftDeck: string,
    decks: arrayOf(shape({})),
    getDeckListByCardNames: func.isRequired,
};

Decks.defaultProps = {
    loading: false,
    draftDeck: '',
    decks: [],
};

export default connect(stateToProps, dispatchToProps)(Decks);
