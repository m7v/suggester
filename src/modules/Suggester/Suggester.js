import './Suggester.css';
import React from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';
import { bool, string, func, shape, arrayOf } from 'prop-types';
import {
    Paper,
    TextField,
    CircularProgress,
} from 'material-ui';
import asyncComponent from '../Async';
import { mapStateToProps } from './connect/stateToProps';
import { mapDispatchToProps } from './connect/dispatchToProps';
const CardGridList = asyncComponent(() => import('../../components/CardGridList'));

const ENTER_KEY_CODE = 13;

class Suggester extends React.Component {

    state = {
        searchingCard: this.props.searchingCard,
        isInited: false,
    };

    componentWillMount() {
        if (this.props.searchingCard) {
            this.props.getSuggestions(this.state.searchingCard);
        }
    }

    handleCardChange = event => {
        this.setState({ searchingCard: event.target.value });
    };

    handleFirstClick = () => {
        if (!this.state.isInited) {
            this.setState({ isInited: true });
        }
    };

    handleSearchCardByKeyPress = event => {
        if (event.keyCode === ENTER_KEY_CODE) {
            event.preventDefault();
            if (!this.props.loading) {
                this.props.getSuggestions(this.state.searchingCard);
            }
            this.props.history.replace(
                `${this.props.history.location.pathname}?q=${this.props.searchingCard}`,
            );
        }
    };

    render() {
        const inputWrapper = classNames({
            'Suggester__inputWrapper': true,
            '_mobile': this.props.isMobile,
            '_inited': this.state.isInited ||
            !!this.props.searchingCard ||
            !!this.props.suggestions.length,
        });

        return (
            <section className="Suggester">
                <div className="Suggester__main">
                    <Paper className={inputWrapper} zDepth={2}>
                        <section>
                            <div className="Suggester__form">
                                <div className="Suggester__input">
                                    <TextField
                                        type="text"
                                        floatingLabelText="Searching card"
                                        required="required"
                                        fullWidth
                                        value={this.state.searchingCard}
                                        onClick={this.handleFirstClick}
                                        onChange={this.handleCardChange}
                                        onKeyDown={this.handleSearchCardByKeyPress}
                                    />
                                </div>
                            </div>
                            {!!this.props.suggestions.length &&
                            <div>{this.props.suggestions.length} results</div>
                            }
                        </section>
                    </Paper>
                    {!this.props.loading &&
                        <CardGridList cards={this.props.suggestions} />
                    }
                    {this.props.loading &&
                    <div className="Suggester__preloader">
                        <div className="Suggester__circular">
                            <CircularProgress size={120} thickness={8} color="#fff" />
                        </div>
                    </div>
                    }
                </div>
            </section>
        );
    }
}

Suggester.propTypes = {
    history: shape({}).isRequired,
    loading: bool,
    searchingCard: string,
    suggestions: arrayOf(shape({
        id: string,
        imageUrl: string,
    })),
    getSuggestions: func.isRequired,
    isMobile: bool,
};

Suggester.defaultProps = {
    loading: false,
    isMobile: false,
    searchingCard: '',
    suggestions: [],
};

export default connect(mapStateToProps, mapDispatchToProps)(Suggester);
