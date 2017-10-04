import React from 'react';
import {
    Dialog,
    RaisedButton,
    FlatButton,
    TextField,
} from 'material-ui';
import { Step, Stepper, StepLabel } from 'material-ui/Stepper';
import { bool, string, func } from 'prop-types';

const contentStyle = { margin: '0 16px' };

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
                                    onChange={this.props.handleCardChange}
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

    isValidCard = () => !!this.state.draftDeck.length;

    isDisabled = () => !this.isValidCard();

    handleStepAction = () => {
        const { stepIndex } = this.state;
        return stepIndex === 2 ? this.handleSearchCard : this.handleNext;
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

    handleSearchCard = (event) => {
        this.setState({ stepIndex: 0, finished: false });
        this.props.handleSearchCard(event);
    };

    render() {
        const { stepIndex, finished } = this.state;

        return (
            <Dialog
                title="Dialog With Actions"
                modal={false}
                open={this.props.open}
                onRequestClose={this.props.handleClose}
            >
                <div style={{ width: '100%', maxWidth: 700, margin: 'auto' }}>
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
                                        label={this.getButtonLabel()}
                                        primary
                                        onClick={this.handleStepAction()}
                                    />
                                </div>
                            </div>
                        }
                    </div>
                </div>
            </Dialog>
        );
    }
}

CreateDeckForm.propTypes = {
    open: bool.isRequired,
    draftDeck: string.isRequired,
    handleClose: func.isRequired,
    handleSearchCard: func.isRequired,
    handleCardChange: func.isRequired,
};
