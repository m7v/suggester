import React from 'react';
import { string, func } from 'prop-types';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import { Step, Stepper, StepLabel } from 'material-ui/Stepper';

export default class CreateDeckForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            stepIndex: 0,
            finished: false
        };
    }

    getStepContent = () => {
        switch (this.state.stepIndex) {
            case 0:
                return (
                    <section>
                        <div className="Decks__form">
                            <div className="Decks__input">
                                <TextField
                                    hintText="Insert decklist"
                                    floatingLabelText="Decklist"
                                    value={this.props.draftDeck}
                                    onChange={this.props.handleDeckListChange}
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
                        <div className="Decks__form">
                            <div className="Decks__input">
                                <TextField
                                    hintText="Enter title"
                                    floatingLabelText="Title of deck"
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
                return 'You\'re a long way from home sonny jim!';
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

    handleSubmitForm = (event) => {
        event.preventDefault();
        this.setState({ stepIndex: 0, finished: false });
        this.props.handleSubmitForm();
    };

    render() {
        const { stepIndex, finished } = this.state;

        return (
            <div>
                <Stepper activeStep={stepIndex} orientation="vertical">
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
                <div>
                    {!finished &&
                        <div>
                            <div>{this.getStepContent()}</div>
                            <div style={{ marginTop: 12 }}>
                                <FlatButton
                                    label="Back"
                                    disabled={stepIndex === 0}
                                    onClick={this.handlePrev}
                                    style={{ marginRight: 12 }}
                                />
                                <RaisedButton
                                    disabled={this.isDisabled()}
                                    label={this.getButtonLabel()}
                                    primary
                                    onClick={this.handleStepAction()}
                                />
                            </div>
                        </div>
                    }
                </div>
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
