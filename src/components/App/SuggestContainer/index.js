import './styles.css';
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { bool, number, string, func, shape, arrayOf } from 'prop-types';
import Img from 'react-image';
import {
    Paper,
    TextField,
    CardActions,
    RaisedButton,
    CircularProgress
} from 'material-ui';
import { cyan500 } from 'material-ui/styles/colors';
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
        const defaultCard = <img src={'/img/default-card.jpg'} alt={'MTG'} />;

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
                                <Img key={card.id} src={card.imageUrl} loader={defaultCard} unloader={defaultCard} />
                            )}
                        </section>
                    </Paper>
                </div>
            </section>
        );
    }
}

SuggestContainer.propTypes = {
    loading: bool,
    suggestions: arrayOf(shape({
        id: number,
        imageUrl: string,
    })),
    getSuggestions: func.isRequired,
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
