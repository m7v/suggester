import './Decks.css';
import React from 'react';
import { connect } from 'react-redux';
import { bool, shape, arrayOf, func } from 'prop-types';
import Loader from '../../components/Loader';
import LazyLoad from 'react-lazyload';
import Deck from '../../components/Deck';
import stateToProps from './connect/stateToProps';
import dispatchToProps from './connect/dispatchToProps';

class Decks extends React.Component {

    componentWillMount() {
        this.props.getDeckList();
    }

    shouldComponentUpdate(nextProps) {
        return this.props.decks.length !== nextProps.decks.length ||
            this.props.loading !== nextProps.loading;
    }

    render() {
        const { isMobile, loading, decks } = this.props;
        return (
            <section className="Decks">
                <div className="Decks__main">
                    {loading &&
                        <div className="Decks_preloader">
                            <div className="Decks__circular">
                                <Loader />
                            </div>
                        </div>
                    }
                    {!loading &&
                        <div className="Decks__deckList">
                            {decks.map((deck) => (
                                <LazyLoad key={deck.id} height={355} offset={100}>
                                    <Deck deck={deck} mode={isMobile ? 'short' : 'full'} />
                                </LazyLoad>
                            ))}
                        </div>
                    }
                </div>
            </section>
        );
    }
}

Decks.propTypes = {
    loading: bool,
    isMobile: bool,
    decks: arrayOf(shape({})),
    getDeckList: func.isRequired,
};

Decks.defaultProps = {
    isMobile: false,
    loading: false,
    decks: [],
};

export default connect(stateToProps, dispatchToProps)(Decks);
