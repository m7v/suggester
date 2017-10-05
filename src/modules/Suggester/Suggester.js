import './Suggester.css';
import React from 'react';
import { connect } from 'react-redux';
import { bool, number, string, func, shape, arrayOf } from 'prop-types';
import {
    Paper,
    TextField,
    CircularProgress
} from 'material-ui';
import NumberEasing from 'react-number-easing';
import CardSwipeList from '../../components/CardSwipeList';
import CardGridList from '../../components/CardGridList';
import { mapStateToProps } from './connect/stateToProps';
import { mapDispatchToProps } from './connect/dispatchToProps';

const ENTER_KEY_CODE = 13;

class Suggester extends React.Component {

    state = {
        searchingCard: this.props.searchingCard
    };

    componentWillMount() {
        if (this.state.searchingCard) {
            this.props.getSuggestions(this.state.searchingCard);
        }
    }

    handleCardChange = event => {
        this.setState({searchingCard: event.target.value});
    };

    handleSearchCardByKeyPress = event => {
        if (event.keyCode === ENTER_KEY_CODE) {
            event.preventDefault();
            if (!this.props.loading) {
                this.props.getSuggestions(this.state.searchingCard);
            }
        }
    };

    render() {
        return (
            <section className="Suggester">
                <div className="Suggester__main">
                    <Paper className="Suggester__card" zDepth={2}>
                        <section>
                            <div className="Suggester__form">
                                <div className="Suggester__input">
                                    <TextField
                                        type="text"
                                        floatingLabelText="Searching card"
                                        required="required"
                                        fullWidth
                                        value={this.state.searchingCard}
                                        onChange={this.handleCardChange}
                                        onKeyDown={this.handleSearchCardByKeyPress}
                                    />
                                </div>
                            </div>
                            {!!this.props.suggestions.length &&
                                <span>
                                    <NumberEasing
                                        value={this.props.suggestions.length}
                                        speed={3000}
                                        ease='quintInOut'
                                    /> results
                                </span>
                            }
                        </section>
                    </Paper>
                    {(!this.props.loading && this.props.isMobile) &&
                        <CardSwipeList
                            cards={this.props.suggestions}
                        />
                    }
                    {(!this.props.loading && !this.props.isMobile) &&
                        <CardGridList
                            cards={this.props.suggestions}
                        />
                    }
                    {this.props.loading &&
                        <CircularProgress size={80} thickness={5} color="#fff" />
                    }
                </div>
            </section>
        );
    }
}

Suggester.propTypes = {
    loading: bool,
    searchingCard: string,
    suggestions: arrayOf(shape({
        id: number,
        src: string,
    })),
    getSuggestions: func.isRequired,
    isMobile: bool
};

Suggester.defaultProps = {
    loading: false,
    isMobile: false,
    searchingCard: '',
    suggestions: [],
};

export default connect(mapStateToProps, mapDispatchToProps)(Suggester);
