import './DeckBuilder.css';
import 'mana-font/css/mana.min.css';
import React from 'react';
import { connect } from 'react-redux';
import { func } from 'prop-types';
import mtgparser from 'mtg-parser';
import { dispatchToProps } from './connect/dispatchToProps';
import { stateToProps } from './connect/stateToProps';
import CreateDeckForm from '../../components/CreateDeckForm';

class DeckBuilder extends React.Component {

    state = {
        deckList: '',
        deckTitle: '',
    };

    handleDeckListChange = (event) => this.setState({deckList: event.target.value});
    handleDeckTitleChange = (event) => this.setState({deckTitle: event.target.value});

    handleSubmitForm = () => {
        const decklist = mtgparser(this.state.deckList, 'mtgo');
        console.log('decklist', decklist);
        if (decklist.cards.length) {
            const deckFormated = decklist.cards.reduce((agg, card) => {
                agg[card.name] = Number(card.number);
                return agg;
            }, {});
            this.props.getDeckListByCardNames(deckFormated, this.state.deckTitle);
        }
    };

    render() {
        return (
            <section className="DeckBuilder">
                <div className="DeckBuilder__main">
                    <CreateDeckForm
                        draftDeck={this.state.deckList}
                        deckTitle={this.state.deckTitle}
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
    getDeckListByCardNames: func.isRequired,
};

DeckBuilder.defaultProps = {
    loading: false
};

export default connect(stateToProps, dispatchToProps)(DeckBuilder);
