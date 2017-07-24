import './styles.css';
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { bool, number, string, func, shape, arrayOf } from 'prop-types';
import mtgparser from 'mtg-parser';
import {
    Paper,
    TextField,
    CardActions,
    RaisedButton,
    CircularProgress
} from 'material-ui';
import { cyan500 } from 'material-ui/styles/colors';
import {
    getDeckListByCardNames
} from '../../../actions/deckBuilder/deckBuilder.actions';

class DecksContainer extends Component {

    state = {
        draftDeck: this.props.draftDeck
    };

    isValidCard = () => !!this.state.draftDeck.length;

    isDisabled = () => !this.isValidCard();

    handleCardChange = event => {
        this.setState({draftDeck: event.target.value});
    };

    handleSearchCard = (event) => {
        event.preventDefault();
        if (!this.props.loading) {
            this.setState({draftDeck: ''});
            const deck = mtgparser(this.state.draftDeck, 'mtgo');
            this.props.getDeckListByCardNames(deck.cards.reduce((cardNames, card) => {
                if (!cardNames[card.name]) {
                    cardNames[card.name] = card.number;
                }
                return cardNames;
            }, {}));
        }
    };

    render() {
        const primaryColor = cyan500;

        return (
            <section className="DecksContainer">
                <div className="DecksContainer__main" style={{backgroundColor: primaryColor}}>
                    <Paper className="DecksContainer__card" zDepth={2}>
                        <section>
                            <div className="DecksContainer__form">
                                <div className="DecksContainer__input">
                                    <TextField
                                        hintText="Insert decklist"
                                        floatingLabelText="Decklist"
                                        value={this.state.draftDeck}
                                        onChange={this.handleCardChange}
                                        multiLine
                                        rows={10}
                                    />
                                </div>
                            </div>
                        </section>
                        <CardActions>
                            <RaisedButton
                                type="submit"
                                secondary
                                icon={
                                    this.props.loading && <CircularProgress size={25} thickness={2} />
                                }
                                disabled={this.isDisabled()}
                                onClick={this.handleSearchCard}
                                label={'Search'}
                                fullWidth
                            />
                        </CardActions>
                    </Paper>
                </div>
            </section>
        );
    }
}

DecksContainer.propTypes = {
    loading: bool,
    draftDeck: string,
    cards: arrayOf(shape({
        id: number,
        src: string,
    })),
    decks: arrayOf(shape({
        id: number,
        src: string,
    })),
    getDeckListByCardNames: func.isRequired,
};

DecksContainer.defaultProps = {
    loading: false,
    draftDeck: '',
    cards: [],
    decks: []
};

function mapStateToProps(state) {
    return {
        draftDeck: state.deckBuilder.get('draftDeck'),
        cards: state.deckBuilder.get('cards'),
        decks: state.deckBuilder.get('decks'),
        loading: state.deckBuilder.getIn(['meta', 'loading'])
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        getDeckListByCardNames
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(DecksContainer);
