import './styles.css';
import 'mana-font/css/mana.min.css';
import {map} from 'lodash';
import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {createSelector} from 'redux-orm';
import {bool, array, string, func} from 'prop-types';
import mtgparser from 'mtg-parser';
import orm from '../../../store/models/models';
import {
    Tab,
    Tabs,
    Card,
    Dialog,
    TextField,
    CardActions,
    RaisedButton,
    CircularProgress,
    FloatingActionButton,
} from 'material-ui';
import ContentAdd from 'material-ui/svg-icons/content/create';
import {cyan500} from 'material-ui/styles/colors';
import {
    getDeckListByCardNames,
} from '../../../actions/deckBuilder/deckBuilder.actions';

const manaMap = {
    white: 'w',
    red: 'r',
    black: 'b',
    green: 'g',
    blue: 'u',
};

class DecksContainer extends Component {

    state = {
        draftDeck: this.props.draftDeck,
        open: false,
    };

    handleOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
    };

    isValidCard = () => !!this.state.draftDeck.length;

    isDisabled = () => !this.isValidCard();

    handleCardChange = event => {
        this.setState({ draftDeck: event.target.value });
    };

    handleSearchCard = (event) => {
        event.preventDefault();
        if (!this.props.loading) {
            const deck = mtgparser(this.state.draftDeck, 'mtgo');
            this.props.getDeckListByCardNames(deck.cards.reduce((cardNames, card) => {
                if (!cardNames[card.name]) {
                    cardNames[card.name] = card.number;
                }
                return cardNames;
            }, {}));
            this.setState({ open: false });
        }
    };

    render() {
        const primaryColor = cyan500;

        const decks = this.props.decks.map((deck) => (
            <div key={deck.id}>
                <Card className="Deck__deckCard">
                    <div className="Deck__deckHead">
                        <div
                            className="Deck__cardHeadliner"
                            style={{ backgroundImage: `url(${deck.headliner})` }}
                        />
                        <div className="Deck__cardManaPool">
                            <ul className="Deck__cardMana">
                                {map(deck.analytics.colorComposition, (count, mana) => {
                                    const manaClass = `mana mana-${manaMap[mana]} ms ms-${manaMap[mana]}`;
                                    return <i key={mana} className={manaClass} />;
                                })}
                            </ul>
                        </div>
                        <div className="Deck__title">
                            {deck.name}
                        </div>
                    </div>
                    <div className="Deck__manaBar">
                        {map(deck.analytics.colorComposition, (count, mana) =>
                            (<div
                                key={mana}
                                className={`Deck__mana mana-${manaMap[mana]}`}
                                style={{
                                    width: `${(count / deck.cardCount) * 100}%`,
                                }}
                            />)
                        )}
                    </div>
                    <div className="Deck__composition">
                        <div className="Deck__cardMana">
                            {
                                map(deck.analytics.deckComposition, (count, type) => {
                                    const className = `type type-${type} ms ms-${type}`;
                                    return (
                                        <span key={type} className="Deck__manaWrapper">
                                            <div className={className} />
                                            <span className="Deck__cardManaNumber">{count}</span>
                                        </span>
                                    );
                                })
                            }
                        </div>
                    </div>
                </Card>
            </div>
        ));

        return (
            <section className="DecksContainer">
                <div className="DecksContainer__main" style={{ backgroundColor: primaryColor }}>
                    <div className="DecksContainer__deckList">
                        {decks}
                    </div>
                    <div className="DecksContainer__createDeckForm">
                        <FloatingActionButton
                            className="DecksContainer__floatButton"
                            onTouchTap={this.handleOpen}
                            secondary
                        >
                            <ContentAdd />
                        </FloatingActionButton>
                        <Dialog
                            title="Dialog With Actions"
                            modal={false}
                            open={this.state.open}
                            onRequestClose={this.handleClose}
                        >
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
                                                    this.props.loading &&
                                                    <CircularProgress size={25} thickness={2} />
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
                        </Dialog>
                    </div>
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
    getDeckListByCardNames: func.isRequired,
};

DecksContainer.defaultProps = {
    loading: false,
    draftDeck: '',
    cards: [],
    decks: [],
};

export const ormSelector = function(state) {
    return state.entities;
};

const deckSelector = createSelector(orm, ormSelector, session => {
    const decks = session.Deck.all().toModelArray();
    return decks.map(deckRef => ({
        ...deckRef.ref,
        cards: deckRef.cardList.all().toRefArray(),
    }));
});

const cardSelector = createSelector(orm, ormSelector, session => session.Card.all().toRefArray());

function mapStateToProps(state) {
    return {
        decks: deckSelector(state),
        cards: cardSelector(state),
        draftDeck: state.deckBuilder.get('draftDeck'),
        loading: state.deckBuilder.getIn(['meta', 'loading']),
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        getDeckListByCardNames,
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(DecksContainer);
