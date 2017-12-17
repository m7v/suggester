import './Suggester.css';
import React from 'react';
import { connect } from 'react-redux';
import { bool, string, func, shape, arrayOf } from 'prop-types';
import classNames from 'classnames';
import Async from '../../components/Async';
import Loader from '../../components/Loader';
import SearchBar from '../../components/SearchBar';
import { mapDispatchToProps } from './connect/dispatchToProps';
import { mapStateToProps } from './connect/stateToProps';
import MetaHelmet from '../../components/MetaHelmet/MetaHelmet';

const CardGridList = (props) => <Async load={import('../../components/CardGridList')} componentProps={props} />;

class Suggester extends React.Component {

    constructor(props) {
        super(props);
        const { history, searchingQuery } = this.props;
        const query = this.getSearchQuery(this.props.location) || searchingQuery;
        this.state = {
            searchingQuery: query
        };
        if (query) {
            history.replace(`${history.location.pathname}?q=${query.replace(/ /g, '%20')}`);
        }
    }

    componentWillMount() {
        if (this.state.searchingQuery) {
            this.props.getSuggestions(this.state.searchingQuery);
        }
    }

    componentWillUpdate(nextProps, nextState) {
        if (this.state.searchingQuery !== nextState.searchingQuery) {
            nextProps.getSuggestions(nextState.searchingQuery);
        }
    }

    getSearchQuery(location) {
        const searchString = location.search.split('?q=')[1] || '';
        return searchString.replace(/%20/g, ' ');
    }

    handleSearchCardByKeyPress = (searchingQuery) => {
        if (this.state.searchingQuery !== searchingQuery) {
            this.props.setQueryString(searchingQuery);
            this.props.history.push(
                `${this.props.history.location.pathname}?q=${searchingQuery.replace(/ /g, '%20')}`
            );
            this.setState({ searchingQuery });
        }
    };

    render() {
        const { isMobile, suggestions, loading } = this.props;
        const { searchingQuery } = this.state;
        return (
            <section className="Suggester">
                <MetaHelmet type={'search'} />
                <div className={classNames({'Suggester__background': true, '_inited': !!searchingQuery})}>
                    <div className="Suggester__img" />
                    <div className="Suggester__cover" />
                </div>
                <div className="Suggester__main">
                    <SearchBar
                        className={classNames({
                            'Suggester__search': true,
                            '_submitted': !!searchingQuery,
                        })}
                        isMobile={isMobile}
                        searchingQuery={searchingQuery}
                        isSubmitted={!!searchingQuery}
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
    location: shape({}).isRequired,
    searchingQuery: string,
    loading: bool,
    isMobile: bool,
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
    searchingQuery: '',
    suggestions: [],
};

export default connect(mapStateToProps, mapDispatchToProps)(Suggester);
