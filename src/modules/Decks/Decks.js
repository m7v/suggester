import './Decks.css';
import React from 'react';
import { connect } from 'react-redux';
import Link from 'react-router-dom/Link';
import { bool, shape, arrayOf, func } from 'prop-types';
import Loader from '../../components/Loader';
import Deck from '../../components/Deck';
import MetaHelmet from '../../components/MetaHelmet';
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
                <MetaHelmet type={'decks'} />
                <div className="Decks__main">
                    {!decks.length &&
                        <div className="Decks__noResults">
                            You have no decks...
                            <Link to={'/deck/add'} replace >Please add something</Link>
                        </div>
                    }
                    {loading &&
                        <div className="Decks_preloader">
                            <div className="Decks__circular">
                                <Loader />
                            </div>
                        </div>
                    }
                    {!loading && !!decks.length &&
                        <div className="Decks__deckList">
                            {decks.map((deck) => (
                                <Deck key={deck.id} deck={deck} mode={isMobile ? 'short' : 'full'} />
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
