import './Suggester.css';
import React from 'react';
import { connect } from 'react-redux';
import { bool, string, func, shape, arrayOf } from 'prop-types';
import classNames from 'classnames';
import Loader from '../../components/Loader';
import SearchBar from '../../components/SearchBar';
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
        const { isMobile, suggestions, loading, searchingCard } = this.props;
        return (
            <section className="Suggester">
                <div className={classNames({
                    'Suggester__background': true,
                    '_inited': !!searchingCard,
                })}
                >
                    <div className="Suggester__img" />
                    <div className="Suggester__cover" />
                </div>
                <div className="Suggester__main">
                    <SearchBar
                        className={classNames({
                            'Suggester__search': true,
                            '_submitted': !!searchingCard,
                        })}
                        isMobile={isMobile}
                        searchingCard={searchingCard}
                        isSubmitted={!!searchingCard}
                        handleSearchCardByKeyPress={this.handleSearchCardByKeyPress}
                    />
                    {!loading &&
                        <CardGridList cards={suggestions} />
                    }
                    {loading &&
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
    isMobile: bool,
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
    isMobile: false,
    searchingCard: '',
    suggestions: [],
};

export default connect(mapStateToProps, mapDispatchToProps)(Suggester);
