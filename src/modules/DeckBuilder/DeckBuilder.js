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
        deckTitle: '',
    };

    componentDidMount() {
        if (this.props.deckId) {
            this.props.getDeckById(this.props.deckId);
        }
    }

    handleDeckListChange = (event) => this.setState({deckList: event.target.value});
    handleDeckTitleChange = (event) => this.setState({deckTitle: event.target.value});

    handleSubmitForm = () => {
        const decklist = mtgparser(this.state.deckList, 'mtgo');
        if (decklist.cards.length >= 0 && sum(Object.values(decklist.cards))) {
            const deckFormated = decklist.cards.reduce((agg, card) => {
                agg[card.name] = Number(card.number);
                return agg;
            }, {});
            this.props.getDeckListByCardNames(deckFormated, this.state.deckTitle, this.props.deck.id);
        }
    };

    render() {
        return (
            <section className="DeckBuilder">
                <MetaHelmet type={'deckbuilder'} />
                <div className="DeckBuilder__main">
                    <CreateDeckForm
                        draftDeck={this.state.deckList || this.props.deckList}
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
