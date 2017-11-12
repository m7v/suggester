import './DeckBuilder.css';
import React from 'react';
import { connect } from 'react-redux';
import { string, func, shape } from 'prop-types';
import mtgparser from 'mtg-parser';
import sum from 'lodash/sum';
import CreateDeckForm from '../../components/CreateDeckForm';
import MetaHelmet from '../../components/MetaHelmet';
import { dispatchToProps } from './connect/dispatchToProps';
import { stateToProps } from './connect/stateToProps';

class DeckBuilder extends React.PureComponent {

    state = {
        deckList: '',
        deckListFormatted: {},
        deckTitle: '',
        isValidDeck: false,
    };

    componentDidMount() {
        if (this.props.deckId) {
            this.props.getDeckById(this.props.deckId);
        }
    }

    handleDeckListChange = (event) => {
        const deckList = event.target.value;
        const decklistFormatted = mtgparser(deckList, 'mtgo');
        let isValid = true;
        const deckFormated = decklistFormatted.cards.reduce((agg, card) => {
            agg[card.name] = Number(card.number);
            if (card.rarity !== 'Basic Land') {
                isValid = isValid && (card.number >= 1 || card.number <= 4);
            }
            return agg;
        }, {});
        const cardCount = Object.values(deckFormated).length
            ? sum(Object.values(deckFormated))
            : 0;
        this.setState({
            deckList,
            isValidDeck: !!decklistFormatted.cards.length && cardCount >= 60 && isValid
        });
    };
    handleDeckTitleChange = (event) => this.setState({deckTitle: event.target.value});

    handleSubmitForm = () => {
        const decklist = mtgparser(this.state.deckList, 'mtgo');
        const deckFormated = decklist.cards.reduce((agg, card) => {
            agg[card.name] = Number(card.number);
            return agg;
        }, {});
        this.props.getDeckListByCardNames(deckFormated, this.state.deckTitle, this.props.deck.id);
    };

    render() {
        return (
            <section className="DeckBuilder">
                <MetaHelmet type={'deckbuilder'} />
                <div className="DeckBuilder__main">
                    <CreateDeckForm
                        draftDeck={this.state.deckList || this.props.deckList}
                        isValidDeck={this.state.isValidDeck}
                        deckTitle={this.state.deckTitle || this.props.deckTitle}
                        handleDeckTitleChange={this.handleDeckTitleChange}
                        handleDeckListChange={this.handleDeckListChange}
                        handleSubmitForm={this.handleSubmitForm}
                    />
                </div>
            </section>
        );
    }
}

DeckBuilder.propTypes = {
    deckList: string,
    deckTitle: string,
    deckId: string,
    deck: shape({}),
    getDeckById: func.isRequired,
    getDeckListByCardNames: func.isRequired,
};

DeckBuilder.defaultProps = {
    loading: false,
    deckList: '',
    deckTitle: '',
    deckId: null,
    deck: null
};

export default connect(stateToProps, dispatchToProps)(DeckBuilder);
