import './Cards.css';
import React from 'react';
import { connect } from 'react-redux';
import { bool, func, shape, arrayOf } from 'prop-types';
import Loader from '../../components/Loader';
import { dispatchToProps } from './connect/dispatchToProps';
import { stateToProps } from './connect/stateToProps';
import Async from '../../components/Async';
const CardGridList = (props) => <Async load={import('../../components/CardGridList')} componentProps={props} />;
const CardFilter = (props) => <Async load={import('../../components/CardFilter')} componentProps={props} />;

class Cards extends React.PureComponent {

    componentWillMount() {
        this.props.getCardList();
    }

    render() {
        return (
            <section className="Cards">
                <CardFilter
                    className={'Cards__filter'}
                    types={this.props.types}
                    rarity={this.props.rarity}
                    colors={this.props.colors}
                    history={this.props.history}
                    appSetTypeFilter={this.props.appSetTypeFilter}
                    appSetColorFilter={this.props.appSetColorFilter}
                    appSetRarityFilter={this.props.appSetRarityFilter}
                    resultCount={this.props.cards.length}
                />
                <div className="Cards__main">
                    {!this.props.loading &&
                        <CardGridList cards={this.props.cards} />
                    }
                    {this.props.loading &&
                        <div className="Cards__preloader">
                            <div className="Cards__circular">
                                <Loader />
                            </div>
                        </div>
                    }
                </div>
            </section>
        );
    }
}

Cards.propTypes = {
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

Cards.defaultProps = {
    cards: [],
    loading: false
};

export default connect(stateToProps, dispatchToProps)(Cards);
