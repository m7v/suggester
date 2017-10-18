import './Cards.css';
import 'mana-font/css/mana.min.css';
import React from 'react';
import { connect } from 'react-redux';
import { bool, func, shape, arrayOf } from 'prop-types';
import Loader from '../../components/Loader';
import { dispatchToProps } from './connect/dispatchToProps';
import { stateToProps } from './connect/stateToProps';
import asyncComponent from '../Async';
import CardFilter from '../../components/CardFilter';
const CardGridList = asyncComponent(() => import('../../components/CardGridList'));

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
                    colors={this.props.colors}
                    history={this.props.history}
                    appSetTypeFilter={this.props.appSetTypeFilter}
                    appSetColorFilter={this.props.appSetColorFilter}
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
    colors: shape({}).isRequired,
    history: shape({}).isRequired,
    types: shape({}).isRequired,
    loading: bool,
    getCardList: func.isRequired,
    appSetTypeFilter: func.isRequired,
    appSetColorFilter: func.isRequired,
};

Cards.defaultProps = {
    cards: [],
    loading: false
};

export default connect(stateToProps, dispatchToProps)(Cards);
