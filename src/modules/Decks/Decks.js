import './Decks.css';
import 'mana-font/css/mana.min.css';
import React from 'react';
import { connect } from 'react-redux';
import { bool, shape, string, arrayOf, func } from 'prop-types';
import { CircularProgress, FloatingActionButton } from 'material-ui';
import mtgparser from 'mtg-parser';
import LazyLoad from 'react-lazyload';
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

    componentWillMount() {
        this.props.getDeckList();
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
                            <div key={deck.id}>
                                <LazyLoad height={355} offset={100}>
                                    <Deck deck={deck} />
                                </LazyLoad>
                            </div>
                        ))}
                    </div>
                    {this.props.loading &&
                    <div className="Decks_preloader">
                        <div className="Decks__circular">
                            <CircularProgress size={120} thickness={8} color="#fff" />
                        </div>
                    </div>
                    }
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
    getDeckList: func.isRequired,
    getDeckListByCardNames: func.isRequired,
};

Decks.defaultProps = {
    loading: false,
    draftDeck: '',
    decks: [],
};

export default connect(stateToProps, dispatchToProps)(Decks);
