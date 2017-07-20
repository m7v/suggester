import './styles.css';
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
    Paper,
    TextField,
    CardActions,
    RaisedButton,
    CircularProgress
} from 'material-ui';
import { cyan500, pinkA200 } from 'material-ui/styles/colors';
import {
    getSuggestions
} from '../../../actions/suggestions/suggestions.actions';

class SuggestContainer extends Component {

    state = {
        searchingCard: ''
    };

    isValidCard = () => !!this.state.searchingCard.length;

    isDisabled = () => !this.isValidCard();

    handleCardChange = event => {
        this.setState({searchingCard: event.target.value});
    };

    handleSearchCard = () => {
        if (!this.props.loading) {
            this.props.getSuggestions(this.state.searchingCard);
        }
    };

    render() {
        const primaryColor = cyan500;
        const secondaryColor = pinkA200;

        return (
            <section className="SuggestContainer">
                <div className="SuggestContainer__main" style={{backgroundColor: primaryColor}}>
                    <Paper className="SuggestContainer__card" zDepth={2}>
                        <section>
                            <div className="SuggestContainer__form">
                                <div className="SuggestContainer__input">
                                    <TextField
                                        type="text"
                                        floatingLabelText="Searching card"
                                        required="required"
                                        fullWidth
                                        value={this.state.searchingCard}
                                        onChange={this.handleCardChange}
                                    />
                                </div>
                            </div>
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
                        </section>
                        <section className="SuggestContainer__results">
                            {this.props.suggestions.map(card =>
                                <img key={card.id} src={card.imageUrl} alt={card.name} />
                            )}
                        </section>
                    </Paper>
                </div>
            </section>
        );
    }
}

SuggestContainer.propTypes = {
    loading: PropTypes.bool,
    suggestions: PropTypes.arrayOf([]),
    getSuggestions: PropTypes.func.isRequired,
};

SuggestContainer.defaultProps = {
    loading: false,
    suggestions: [],
};

function mapStateToProps(state) {
    return {
        suggestions: state.suggester.get('suggestions'),
        loading: state.suggester.getIn(['meta', 'loading'])
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        getSuggestions
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SuggestContainer);
