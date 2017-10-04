import './DecksContainer.css';
import 'mana-font/css/mana.min.css';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bool, array, string, func} from 'prop-types';
import mtgparser from 'mtg-parser';
import {
    Tab,
    Tabs,
    Dialog,
    TextField,
    RaisedButton,
    FlatButton,
    FloatingActionButton,
} from 'material-ui';
import ContentAdd from 'material-ui/svg-icons/content/create';
import {
    Bar as BarChart,
    Line as LineChart
} from 'react-chartjs';
import {
    Step,
    Stepper,
    StepLabel,
} from 'material-ui/Stepper';
import Deck from '../../components/Deck';
import Decklist from '../../components/Decklist';
import stateToProps from './connect/stateToProps';
import dispatchToProps from './connect/dispatchToProps';

const options = {
    datasetFill: false,
    responsive: true,
    scaleLineColor: '#5297e0',
    scaleFontColor: '#5297e0',
    pointDotRadius: 2,
    title: {
        display: true,
        text: 'Chart.js Line Chart',
    },
    tooltips: {
        mode: 'index',
        intersect: false,
    },
    hover: {
        mode: 'nearest',
        intersect: true,
    },
    scales: {
        xAxes: [{
            display: true,
            scaleLabel: {
                display: true,
                labelString: 'Mana cost',
            },
        }],
        yAxes: [{
            display: true,
            scaleLabel: {
                display: true,
                labelString: 'Cards count',
            },
        }],
    },
};

class DecksContainer extends Component {

    state = {
        draftDeck: this.props.draftDeck,
        open: false,
        openedDeck: false,
        currentDeck: {},
        manaCurve: {},
        cardRarity: {},
        deckComposition: {},
        showedCard: '',
        finished: false,
        stepIndex: 0,
    };

    getStepContent(stepIndex) {
        switch (stepIndex) {
            case 0:
                return (
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
                );
            case 1:
                return (
                    <section>
                        <div className="DecksContainer__form">
                            <div className="DecksContainer__input">
                                <TextField
                                    hintText="Enter title"
                                    floatingLabelText="Title of deck"
                                />
                            </div>
                        </div>
                    </section>
                );
            case 2:
                return 'This is the bit I really care about!';
            default:
                return 'You\'re a long way from home sonny jim!';
        }
    }

    handleNext = () => {
        const {stepIndex} = this.state;
        this.setState({
            stepIndex: stepIndex + 1,
            finished: stepIndex >= 2,
        });
    };

    handlePrev = () => {
        const {stepIndex} = this.state;
        if (stepIndex > 0) {
            this.setState({stepIndex: stepIndex - 1});
        }
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
            const cards = deck.cards.reduce((cardNames, card) => {
                if (!cardNames[card.name]) {
                    cardNames[card.name] = card.number;
                }
                return cardNames;
            }, {});
            this.props.getDeckListByCardNames(cards, Object.keys(cards)[0]);
            this.setState({ open: false, stepIndex: 0, finished: false });
        }
    };

    openDeck = deck => {
        const labels = Object.keys(deck.analytics.manaCurve);
        const curve = Object.values(deck.analytics.manaCurve);
        const deckCompositionLabels = Object.keys(deck.analytics.deckComposition);
        const composition = Object.values(deck.analytics.deckComposition);
        const rarityLabels = [
            'basic land',
            'common',
            'uncommon',
            'rare',
            'mythic rare'
        ];
        const rarity = rarityLabels.map(label => deck.analytics.cardRarity[label]);

        labels.shift();
        curve.shift();

        const manaCurve = {
            labels,
            datasets: [{data: curve}]
        };

        const cardRarity = {
            labels: rarityLabels,
            datasets: [{data: rarity}]
        };

        const deckComposition = {
            labels: deckCompositionLabels,
            datasets: [{data: composition}]
        };

        this.setState({
            openedDeck: true,
            currentDeck: deck,
            manaCurve,
            cardRarity,
            deckComposition
        });
    };

    handleCloseDeck = () => {
        this.setState({openedDeck: false, showedCard: ''});
    };

    handleShowCard = (card) => {
        setTimeout(() => {
            this.setState({showedCard: card.id});
        });
    };

    render() {
        const {finished, stepIndex} = this.state;
        const contentStyle = {margin: '0 16px'};
        const decks = this.props.decks.map((deck) => (
            <Deck
                key={deck.id}
                deck={deck}
                openDeck={() => this.openDeck(deck)}
                removeDeck={this.props.removeDeck}
            />
        ));

        return (
            <section className="DecksContainer">
                <div className="DecksContainer__main">
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
                            <div style={{width: '100%', maxWidth: 700, margin: 'auto'}}>
                                <Stepper activeStep={stepIndex}>
                                    <Step>
                                        <StepLabel>Added Decklist</StepLabel>
                                    </Step>
                                    <Step>
                                        <StepLabel>Enter the name</StepLabel>
                                    </Step>
                                    <Step>
                                        <StepLabel>Confirm creation</StepLabel>
                                    </Step>
                                </Stepper>
                                <div style={contentStyle}>
                                    {finished ? (
                                        <p>
                                            <a
                                                href="#"
                                                onClick={(event) => {
                                                    event.preventDefault();
                                                    this.setState({stepIndex: 0, finished: false});
                                                }}
                                            >
                                                Click here
                                            </a> to reset the example.
                                        </p>
                                    ) : (
                                        <div>
                                            <p>{this.getStepContent(stepIndex)}</p>
                                            <div style={{marginTop: 12}}>
                                                <FlatButton
                                                    label="Back"
                                                    disabled={stepIndex === 0}
                                                    onClick={this.handlePrev}
                                                    style={{marginRight: 12}}
                                                />
                                                <RaisedButton
                                                    label={stepIndex === 2 ? 'Finish' : 'Next'}
                                                    primary
                                                    onClick={stepIndex === 2 ? this.handleSearchCard : this.handleNext
                                                    }
                                                />
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </Dialog>
                        <Dialog
                            modal={false}
                            open={this.state.openedDeck}
                            onRequestClose={this.handleCloseDeck}
                        >
                            <Tabs>
                                <Tab label="Decklist">
                                    <Decklist
                                        deck={this.state.currentDeck}
                                        selectedCardId={this.state.showedCard}
                                        handleShowCard={this.handleShowCard}
                                    />
                                </Tab>
                                <Tab label="Mana Curve">
                                    <section>
                                        {this.state.currentDeck.analytics &&
                                            <LineChart
                                                data={this.state.manaCurve}
                                                options={options}
                                                width="600"
                                                height="250"
                                            />
                                        }
                                    </section>
                                </Tab>
                                <Tab label="Deck Statistics">
                                    <section>
                                        {this.state.currentDeck.analytics &&
                                            <BarChart
                                                data={this.state.deckComposition}
                                                options={options}
                                                width="600"
                                                height="250"
                                            />
                                        }
                                    </section>
                                </Tab>
                                <Tab label="Collection Statistics">
                                    <section>
                                        {this.state.currentDeck.analytics &&
                                            <BarChart
                                                data={this.state.cardRarity}
                                                options={options}
                                                width="600"
                                                height="250"
                                            />
                                        }
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
    decks: array,
    removeDeck: func.isRequired,
    getDeckListByCardNames: func.isRequired,
};

DecksContainer.defaultProps = {
    loading: false,
    draftDeck: '',
    decks: [],
};

export default connect(stateToProps, dispatchToProps)(DecksContainer);
