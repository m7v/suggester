import './CreateDeckForm.css';
import React from 'react';
import { string, func } from 'prop-types';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import MobileStepper from 'material-ui/MobileStepper';
import KeyboardArrowLeft from 'material-ui-icons/KeyboardArrowLeft';
import KeyboardArrowRight from 'material-ui-icons/KeyboardArrowRight';

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
                return 'Added Decklist';
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
                    <section>
                        <div className="Decks__form">
                            <div className="Decks__input">
                                <TextField
                                    id="multiline-static"
                                    rows="16"
                                    defaultValue="Default Value"
                                    margin="normal"
                                    multiline
                                    label="Enter Deck list"
                                    value={this.props.draftDeck}
                                    onChange={this.props.handleDeckListChange}
                                />
                            </div>
                        </div>
                    </section>
                );
            case 1:
                return (
                    <section>
                        <div className="Decks__form">
                            <div className="Decks__input">
                                <TextField
                                    margin="normal"
                                    label="Enter deck's title"
                                    value={this.props.deckTitle}
                                    onChange={this.props.handleDeckTitleChange}
                                />
                            </div>
                        </div>
                    </section>
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
            <div>
                <Paper square elevation={0} className="">
                    <Typography>{this.getStepHeader()}</Typography>
                </Paper>
                <div>{this.getStepContent()}</div>
                <MobileStepper
                    type="progress"
                    steps={3}
                    className="CreateDeckForm__stepper"
                    activeStep={this.state.stepIndex}
                    nextButton={
                        <Button dense onClick={this.handleStepAction()} disabled={this.state.stepIndex === 3}>
                            Next
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
