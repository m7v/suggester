import './CardSet.css';
import 'mana-font/css/mana.min.css';
import React from 'react';
import { connect } from 'react-redux';
import { bool, string, arrayOf, shape, func } from 'prop-types';
import Loader from '../../components/Loader';
import CardGridList from '../../components/CardGridList';
import CardFilter from '../../components/CardFilter';
import stateToProps from './connect/stateToProps';
import dispatchToProps from './connect/dispatchToProps';

class CardSet extends React.Component {

    componentWillMount() {
        if (this.props.code) {
            this.props.getSetCardsByCode(this.props.code);
        }
    }

    render() {
        return (
            <section className="CardSet">
                <CardFilter
                    className={'CardSet__filter'}
                    types={this.props.types}
                    colors={this.props.colors}
                    history={this.props.history}
                    appSetTypeFilter={this.props.appSetCardSetTypeFilter}
                    appSetColorFilter={this.props.appSetCardSetColorFilter}
                />
                <div className="CardSet__main">
                    {!this.props.loading &&
                        <CardGridList cards={this.props.cards} />
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
    colors: shape({}).isRequired,
    types: shape({}).isRequired,
    cards: arrayOf(shape({})).isRequired,
    getSetCardsByCode: func.isRequired,
    appSetCardSetTypeFilter: func.isRequired,
    appSetCardSetColorFilter: func.isRequired,
    loading: bool,
};

CardSet.defaultProps = {
    loading: false,
};

export default connect(stateToProps, dispatchToProps)(CardSet);
