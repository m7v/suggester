import './styles.css';
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { createSelector } from 'redux-orm';
import { bool, array, string, func } from 'prop-types';
import mtgparser from 'mtg-parser';
import orm from '../../../store/models/models';
import {
    Tab,
    Tabs,
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
        console.log(this.props.decksORM);
        console.log(this.props.cardsORM);
        return (
            <section className="DecksContainer">
                <div className="DecksContainer__main" style={{backgroundColor: primaryColor}}>
                    <Paper className="DecksContainer__card" zDepth={2}>
                        <Tabs>
                            <Tab label="Item One">
                                <div>
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
                                                this.props.loading && <CircularProgress size={25} thickness={2}/>
                                            }
                                            disabled={this.isDisabled()}
                                            onClick={this.handleSearchCard}
                                            label={'Search'}
                                            fullWidth
                                        />
                                    </CardActions>
                                </div>
                            </Tab>
                            <Tab label="Item Two">
                                <section>
                                    CARD LIST
                                </section>
                            </Tab>
                            <Tab label="onActive">
                                <section>
                                    CARD LIST
                                </section>
                            </Tab>
                        </Tabs>
                    </Paper>
                </div>
            </section>
        );
    }
}

DecksContainer.propTypes = {
    loading: bool,
    draftDeck: string,
    cards: array,
    decks: array,
    getDeckListByCardNames: func.isRequired
};

DecksContainer.defaultProps = {
    loading: false,
    draftDeck: '',
    cards: [],
    decks: [],
    decksORM: [],
    cardsORM: []
};

export const ormSelector = function(state) {
    return state.entities;
};

const deckSelector = createSelector(orm, ormSelector, session => {
    const decks = session.Deck.all().toModelArray();
    const decksArray = decks.map(deckRef => {
        return {
            ...deckRef.ref,
            cards: deckRef.cardList.all().toRefArray()
        };
    });

    return decksArray;
});

const cardSelector = createSelector(orm, ormSelector, session => {
    return session.Card.all().toRefArray();
});

function mapStateToProps(state) {
    return {
        decks: deckSelector(state),
        cards: cardSelector(state),
        draftDeck: state.deckBuilder.get('draftDeck'),
        loading: state.deckBuilder.getIn(['meta', 'loading'])
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        getDeckListByCardNames
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(DecksContainer);
