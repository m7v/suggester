import './Suggester.css';
import React from 'react';
import { connect } from 'react-redux';
import { bool, string, func, shape, arrayOf } from 'prop-types';
import Loader from '../../components/Loader';
import SearchBarMini from '../../components/SearchBarMini';
import { mapDispatchToProps } from './connect/dispatchToProps';
import { mapStateToProps } from './connect/stateToProps';
import Async from '../Async';
const CardGridList = (props) => <Async load={import('../../components/CardGridList')} componentProps={props} />;

class Suggester extends React.Component {

    componentWillMount() {
        if (this.props.searchingCard) {
            this.props.getSuggestions(this.props.searchingCard);
        }
    }

    shouldComponentUpdate(nextProps) {
        return this.props.suggestions.length !== nextProps.suggestions;
    }

    componentWillUpdate(nextProps) {
        if (!nextProps.loading && this.props.searchingCard !== nextProps.searchingCard) {
            nextProps.getSuggestions(nextProps.searchingCard);
        }
    }

    handleSearchCardByKeyPress = (searchingCard) => {
        if (this.props.searchingCard !== searchingCard && window.location.search.indexOf(searchingCard) < 0) {
            this.props.setQueryString(searchingCard);
            this.props.history.push(`${this.props.history.location.pathname}?q=${searchingCard}`);
        }
    };

    render() {
        return (
            <section className="Suggester">
                <div className="Suggester__main">
                    <SearchBarMini
                        className="Suggester__search"
                        searchingCard={this.props.searchingCard}
                        handleSearchCardByKeyPress={this.handleSearchCardByKeyPress}
                    />
                    {!this.props.loading &&
                        <CardGridList cards={this.props.suggestions} />
                    }
                    {this.props.loading &&
                        <div className="Suggester__preloader">
                            <div className="Suggester__circular">
                                <Loader />
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
    setQueryString: func.isRequired,
};

Suggester.defaultProps = {
    loading: false,
    searchingCard: '',
    suggestions: [],
};

export default connect(mapStateToProps, mapDispatchToProps)(Suggester);
