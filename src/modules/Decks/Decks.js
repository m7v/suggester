import './Decks.css';
import 'mana-font/css/mana.min.css';
import React from 'react';
import { connect } from 'react-redux';
import { bool, shape, string, arrayOf, func } from 'prop-types';
import {
    CircularProgress,
} from 'material-ui';
import mtgparser from 'mtg-parser';
import LazyLoad from 'react-lazyload';
import Deck from '../../components/Deck';
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
        const { isMobile, loading, decks } = this.props;
        return (
            <section className="Decks">
                <div className="Decks__main">
                    {loading &&
                        <div className="Decks_preloader">
                            <div className="Decks__circular">
                                <CircularProgress size={120} thickness={8} color="rgb(211, 47, 47)" />
                            </div>
                        </div>
                    }
                    <div className="Decks__deckList">
                        {decks.map((deck) => (
                            <LazyLoad key={deck.id} height={355} offset={100}>
                                <Deck deck={deck} mode={isMobile ? 'short' : 'full'} />
                            </LazyLoad>
                        ))}
                    </div>
                </div>
            </section>
        );
    }
}

Decks.propTypes = {
    loading: bool,
    isMobile: bool,
    draftDeck: string,
    decks: arrayOf(shape({})),
    getDeckList: func.isRequired,
    getDeckListByCardNames: func.isRequired,
};

Decks.defaultProps = {
    isMobile: false,
    loading: false,
    draftDeck: '',
    decks: [],
};

export default connect(stateToProps, dispatchToProps)(Decks);
