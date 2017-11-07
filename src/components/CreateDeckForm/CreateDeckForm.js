import './CreateDeckForm.css';
import React from 'react';
import { string, func } from 'prop-types';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import Paper from 'material-ui/Paper';
import MobileStepper from 'material-ui/MobileStepper';
import KeyboardArrowLeft from 'material-ui-icons/KeyboardArrowLeft';
import KeyboardArrowRight from 'material-ui-icons/KeyboardArrowRight';

const hintDeckList = '' +
    '4 Cryptbreaker\n' +
    '4 Dread Wanderer\n' +
    '4 Gisa and Geralf\n' +
    '4 Haunted Dead\n' +
    '4 Lord of the Accursed\n' +
    '4 Prized Amalgam\n' +
    '4 Liliana\'s Mastery\n' +
    '2 Wander in Death\n' +
    '2 Dark Salvation\n' +
    '2 Grave Strength\n' +
    '2 Gisa\'s Bidding\n' +
    '10 Island\n' +
    '14 Swamp';

export default class CreateDeckForm extends React.PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            stepIndex: 0,
            finished: false
        };
    }

    getStepHeader = () => {
        switch (this.state.stepIndex) {
            case 0:
                return 'Enter Decklist';
            case 1:
                return 'Enter the name';
            case 2:
                return 'Confirm creation';
            default:
                return 'Deck is created';
        }
    };

    getStepContent = () => {
        switch (this.state.stepIndex) {
            case 0:
                return (
                    <div className="CreateDeckForm__form">
                        <div className="CreateDeckForm__input">
                            <TextField
                                id="multiline-static"
                                rows="16"
                                margin="normal"
                                multiline
                                label="Enter Deck list"
                                placeholder={hintDeckList}
                                value={this.props.draftDeck}
                                onChange={this.props.handleDeckListChange}
                            />
                        </div>
                    </div>
                );
            case 1:
                return (
                    <div className="CreateDeckForm__form">
                        <div className="CreateDeckForm__input">
                            <TextField
                                margin="normal"
                                label="Enter deck's title"
                                value={this.props.deckTitle}
                                onChange={this.props.handleDeckTitleChange}
                            />
                        </div>
                    </div>
                );
            case 2:
                return 'This is the bit I really care about!';
            default:
                return 'Deck is created';
        }
    };

    getButtonLabel = () => {
        const { stepIndex } = this.state;
        return stepIndex === 2 ? 'Finish' : 'Next';
    };

    isValidCard = () => !!this.props.draftDeck.length;

    isDisabled = () => !this.isValidCard();

    handleStepAction = () => {
        const { stepIndex } = this.state;
        return stepIndex === 2 ? this.handleSubmitForm : this.handleNext;
    };

    handleNext = () => {
        const { stepIndex } = this.state;
        this.setState({
            stepIndex: stepIndex + 1,
            finished: stepIndex >= 2,
        });
    };

    handlePrev = () => {
        const { stepIndex } = this.state;
        if (stepIndex > 0) {
            this.setState({ stepIndex: stepIndex - 1 });
        }
    };

    handleSubmitForm = () => {
        const { stepIndex } = this.state;
        this.setState({ stepIndex: stepIndex + 1 });
        this.props.handleSubmitForm();
    };

    render() {
        return (
            <div className="CreateDeckForm__root">
                <Paper square elevation={0} className="CreateDeckForm__header">
                    <div className="CreateDeckForm__title">{this.getStepHeader()}</div>
                </Paper>
                <div>{this.getStepContent()}</div>
                <MobileStepper
                    type="progress"
                    steps={3}
                    className="CreateDeckForm__stepper"
                    activeStep={this.state.stepIndex}
                    nextButton={
                        <Button dense onClick={this.handleStepAction()} disabled={this.state.stepIndex === 3}>
                            {this.getButtonLabel()}
                            <KeyboardArrowRight />
                        </Button>
                    }
                    backButton={
                        <Button dense onClick={this.handlePrev} disabled={this.state.stepIndex === 0}>
                            <KeyboardArrowLeft />
                            Back
                        </Button>
                    }
                />
            </div>
        );
    }
}

CreateDeckForm.propTypes = {
    draftDeck: string.isRequired,
    deckTitle: string.isRequired,
    handleDeckListChange: func.isRequired,
    handleDeckTitleChange: func.isRequired,
    handleSubmitForm: func.isRequired,
};
