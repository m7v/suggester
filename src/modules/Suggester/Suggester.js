import './Suggester.css';
import React from 'react';
import { connect } from 'react-redux';
import { bool, string, func, shape, arrayOf } from 'prop-types';
import CircularProgress from 'material-ui/CircularProgress';
import SearchBar from '../../components/SearchBar';
import { mapDispatchToProps } from './connect/dispatchToProps';
import { mapStateToProps } from './connect/stateToProps';
import asyncComponent from '../Async';
const CardGridList = asyncComponent(() => import('../../components/CardGridList'));

class Suggester extends React.Component {

    componentWillMount() {
        if (this.props.searchingCard) {
            this.props.getSuggestions(this.props.searchingCard);
        }
    }

    handleSearchCardByKeyPress = (searchingCard) => {
        if (!this.props.loading) {
            this.props.getSuggestions(searchingCard);
        }
        this.props.history.replace(
            `${this.props.history.location.pathname}?q=${searchingCard}`,
        );
    };

    render() {
        return (
            <section className="Suggester">
                <div className="Suggester__main">
                    <SearchBar
                        isMobile={this.props.isMobile}
                        results={this.props.suggestions.length}
                        searchingCard={this.props.searchingCard}
                        handleSearchCardByKeyPress={this.handleSearchCardByKeyPress}
                    />
                    {!this.props.loading &&
                        <CardGridList cards={this.props.suggestions} />
                    }
                    {this.props.loading &&
                        <div className="Suggester__preloader">
                            <div className="Suggester__circular">
                                <CircularProgress size={120} thickness={8} color="rgb(211, 47, 47)" />
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
