import './Favorites.css';
import React from 'react';
import { connect } from 'react-redux';
// import Link from 'react-router-dom/Link';
import { bool, func, shape, arrayOf } from 'prop-types';
import Async from '../../components/Async';
import Loader from '../../components/Loader';
import MetaHelmet from '../../components/MetaHelmet';
import { dispatchToProps } from './connect/dispatchToProps';
import { stateToProps } from './connect/stateToProps';

const CardGridList = (props) => <Async load={import('../../components/CardGridList')} componentProps={props} />;
const CardFilter = (props) => <Async load={import('../../components/CardFilter')} componentProps={props} />;

class Favorites extends React.PureComponent {

    componentWillMount() {
        if (!this.props.cards.length) {
            this.props.getCardList();
        }
    }

    render() {
        const {
            rarity,
            types,
            colors,
            history,
            appSetTypeFilter,
            appSetColorFilter,
            appSetRarityFilter,
            loading,
            cards
        } = this.props;

        return (
            <section className="Favorites__root">
                <MetaHelmet type={'favorites'} />
                <CardFilter
                    className={'Favorites__filter'}
                    currentSet={{name: 'Favorites'}}
                    types={types}
                    rarity={rarity}
                    colors={colors}
                    history={history}
                    appSetTypeFilter={appSetTypeFilter}
                    appSetColorFilter={appSetColorFilter}
                    appSetRarityFilter={appSetRarityFilter}
                    resultCount={cards.length}
                />
                <div className="Favorites__main">
                    {/*{!loading && !cards.length &&*/}
                        {/*<div className="Favorites__noResults">*/}
                            {/*<div>*/}
                                {/*<div>You have no favorites...</div>*/}
                                {/*<Link to={'/browse'} replace >Please add something</Link>*/}
                            {/*</div>*/}
                        {/*</div>*/}
                    {/*}*/}
                    {!loading &&
                        <CardGridList cards={cards} />
                    }
                    {loading &&
                        <div className="Favorites__preloader">
                            <div className="Favorites__circular">
                                <Loader />
                            </div>
                        </div>
                    }
                </div>
            </section>
        );
    }
}

Favorites.propTypes = {
    cards: arrayOf(shape({})).isRequired,
    rarity: shape({}).isRequired,
    colors: shape({}).isRequired,
    history: shape({}).isRequired,
    types: shape({}).isRequired,
    loading: bool,
    getCardList: func.isRequired,
    appSetTypeFilter: func.isRequired,
    appSetRarityFilter: func.isRequired,
    appSetColorFilter: func.isRequired,
};

Favorites.defaultProps = {
    cards: [],
    loading: false
};

export default connect(stateToProps, dispatchToProps)(Favorites);
