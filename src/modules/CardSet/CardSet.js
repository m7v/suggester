import './CardSet.css';
import React from 'react';
import { connect } from 'react-redux';
import { bool, string, arrayOf, shape, func } from 'prop-types';
import Async from '../../components/Async';
import Loader from '../../components/Loader';
import ButtonBack from '../../components/ButtonBack';
import MetaHelmet from '../../components/MetaHelmet';
import ErrorPage from '../../components/ErrorPage/ErrorPage';
import stateToProps from './connect/stateToProps';
import dispatchToProps from './connect/dispatchToProps';

const CardGridList = (props) => <Async load={import('../../components/CardGridList')} componentProps={props} />;
const CardFilter = (props) => <Async load={import('../../components/CardFilter')} componentProps={props} />;

class CardSet extends React.Component {

    componentWillMount() {
        if (this.props.code) {
            this.props.getSetByCode(this.props.code);
            this.props.getSetCardsByCode(this.props.code);
        }
    }

    render() {
        if (!this.props.loading && this.props.error) {
            return (<ErrorPage />);
        }

        return (
            <section className="CardSet">
                <MetaHelmet type={'set'} set={this.props.currentSet} />
                <ButtonBack className="CardSet__back" />
                <CardFilter
                    className={'CardSet__filter'}
                    currentSet={this.props.currentSet}
                    rarity={this.props.rarity}
                    types={this.props.types}
                    colors={this.props.colors}
                    history={this.props.history}
                    appSetTypeFilter={this.props.appSetCardSetTypeFilter}
                    appSetColorFilter={this.props.appSetCardSetColorFilter}
                    appSetRarityFilter={this.props.appSetCardSetRarityFilter}
                    resultCount={this.props.cards.length}
                />
                <div className="CardSet__main">
                    {!this.props.loading &&
                        <div>
                            <CardGridList cards={this.props.cards} />
                        </div>
                    }
                    {this.props.loading &&
                    <div className="CardSet__preloader">
                        <div className="CardSet__circular">
                            <Loader />
                        </div>
                    </div>
                    }
                </div>
            </section>
        );
    }
}

CardSet.propTypes = {
    code: string.isRequired,
    history: shape({}).isRequired,
    currentSet: shape({}).isRequired,
    rarity: shape({}).isRequired,
    colors: shape({}).isRequired,
    types: shape({}).isRequired,
    cards: arrayOf(shape({})).isRequired,
    getSetByCode: func.isRequired,
    getSetCardsByCode: func.isRequired,
    appSetCardSetTypeFilter: func.isRequired,
    appSetCardSetColorFilter: func.isRequired,
    appSetCardSetRarityFilter: func.isRequired,
    loading: bool,
    error: bool,
};

CardSet.defaultProps = {
    loading: false,
    error: false,
};

export default connect(stateToProps, dispatchToProps)(CardSet);
