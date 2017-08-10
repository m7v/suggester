import './styles.css';
import 'mana-font/css/mana.min.css';
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
    Card,
    CardMedia,
    CardTitle,
    Paper,
    Dialog,
    TextField,
    CardActions,
    RaisedButton,
    CircularProgress,
    FloatingActionButton,
} from 'material-ui';
import ShowMore from 'material-ui/svg-icons/action/info';
import ContentAdd from 'material-ui/svg-icons/content/create';
import { cyan500 } from 'material-ui/styles/colors';
import {
    getDeckListByCardNames
} from '../../../actions/deckBuilder/deckBuilder.actions';

class DecksContainer extends Component {

    state = {
        draftDeck: this.props.draftDeck,
        open: false
    };

    handleOpen = () => {
        this.setState({open: true});
    };

    handleClose = () => {
        this.setState({open: false});
    };

    isValidCard = () => !!this.state.draftDeck.length;

    isDisabled = () => !this.isValidCard();

    handleCardChange = event => {
        this.setState({draftDeck: event.target.value});
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
            this.setState({open: false});
        }
    };

    render() {
        const primaryColor = cyan500;
        const style = {
            body: {
                backgroundColor: '#222'
            }
        };

        const decks = this.props.decks.map((deck) => (
            <div key={deck.id}>
                <Card className="DecksContainer__deckCard">
                    <CardMedia>
                        <img src={deck.headliner} />
                    </CardMedia>
                    <div className="DecksContainer__cardDetailsWrapper">
                        <FloatingActionButton className="DecksContainer__cardDetails">
                            <ShowMore />
                        </FloatingActionButton>
                    </div>
                    <Paper className="DecksContainer__cardBody" style={style.body}>
                        <CardTitle className="DecksContainer__cardTitle" titleColor='#fff' title={deck.name} />
                        <ul className="DecksContainer__cardMana">
                            <i className="mana mana-w ms ms-w" />
                            <i className="mana mana-r ms ms-r" />
                            <i className="mana mana-u ms ms-u" />
                            <i className="mana mana-b ms ms-b" />
                            <i className="mana mana-g ms ms-g" />
                        </ul>
                    </Paper>
                </Card>
            </div>
        ));

        return (
            <section className="DecksContainer">
                <div className="DecksContainer__main" style={{backgroundColor: primaryColor}}>
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
    getDeckListByCardNames: func.isRequired
};

DecksContainer.defaultProps = {
    loading: false,
    draftDeck: '',
    cards: [],
    decks: []
};

export const ormSelector = function(state) {
    return state.entities;
};

const deckSelector = createSelector(orm, ormSelector, session => {
    const decks = session.Deck.all().toModelArray();
    return decks.map(deckRef => ({
        ...deckRef.ref,
        cards: deckRef.cardList.all().toRefArray()
    }));
});

const cardSelector = createSelector(orm, ormSelector, session => session.Card.all().toRefArray());

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