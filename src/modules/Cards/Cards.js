import './Cards.css';
import 'mana-font/css/mana.min.css';
import React from 'react';
import { connect } from 'react-redux';
import { bool, func, shape, arrayOf } from 'prop-types';
import map from 'lodash/map';
import classNames from 'classnames';
import Paper from 'material-ui/Paper';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';
import CircularProgress from 'material-ui/CircularProgress';
import { dispatchToProps } from './connect/dispatchToProps';
import { stateToProps } from './connect/stateToProps';
import asyncComponent from '../Async';
const CardSwipeList = asyncComponent(() => import('../../components/CardSwipeList'));
const CardGridList = asyncComponent(() => import('../../components/CardGridList'));

const manaMap = {
    white: 'w',
    red: 'r',
    black: 'b',
    green: 'g',
    blue: 'u',
};
const typesMap = {
    creature: 'Creature',
    instant: 'Instant',
    sorcery: 'Sorcery',
    planeswalker: 'Planeswalker',
    enchantment: 'Enchantment',
    artifact: 'Artifact',
    land: 'Land',
};

class Cards extends React.Component {

    componentWillMount() {
        this.props.getCardList();
    }

    appSetColorFilter = color => () => {
        const query = map(this.props.colors, (val, clr) => {
            if (color === clr) {
                return `${clr}=${!this.props.colors[clr]}`;
            }
            return `${clr}=${val}`;
        }).join('|');

        this.props.history.replace(
            `${this.props.history.location.pathname}?colors=${query}`,
        );
        this.props.appSetColorFilter({[color]: !this.props.colors[color]});
    };

    appSetTypeFilter = type => () => {
        this.props.appSetTypeFilter({[type]: !this.props.types[type]});
    };

    renderTypeFilter = types => map(types, (type, cardType) => {
        const iconClass = classNames({
            'Cards__filterType': true,
            'Cards__filterTypeSelected': !!this.props.types[cardType],
            'ms': true,
            [`ms-${cardType}`]: true,
        });

        return (
            <IconButton key={type} className="Cards__icon" onClick={this.appSetTypeFilter(cardType)}>
                <FontIcon className={iconClass} />
            </IconButton>
        );
    });

    renderColorFilter = manaPool => map(manaPool, (color, mana) => {
        const iconClass = classNames({
            'Cards__filterMana': true,
            'ms': true,
            [`ms-${manaMap[ mana ]}`]: true,
            [`Cards__filterMana-${manaMap[ mana ]}`]: !!this.props.colors[ color ],
        });

        return (
            <IconButton key={color} className="Cards__icon" onClick={this.appSetColorFilter(color)}>
                <FontIcon className={iconClass} />
            </IconButton>
        );
    });

    render() {
        return (
            <section className="Cards">
                <div className="Cards__main">
                    <Paper className="Cards__inputWrapper" zDepth={2}>
                        <section>
                            <div className="Cards__form">
                                <div className="Cards__inputManaFilter">
                                    {
                                        this.renderColorFilter(manaMap)
                                    }
                                </div>
                                <div className="Cards__inputTypeFilter">
                                    {
                                        this.renderTypeFilter(typesMap)
                                    }
                                </div>
                            </div>
                        </section>
                    </Paper>
                    {!this.props.loading && this.props.isMobile &&
                    <div className="Cards__swipe">
                        <CardSwipeList cards={this.props.cards} />
                    </div>
                    }
                    {!this.props.loading && !this.props.isMobile &&
                        <CardGridList cards={this.props.cards} />
                    }
                    {this.props.loading &&
                    <div className="Cards__preloader">
                        <div className="Cardsr__circular">
                            <CircularProgress size={120} thickness={8} color="#fff" />
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
    isMobile: bool,
    loading: bool,
    getCardList: func.isRequired,
    appSetTypeFilter: func.isRequired,
    appSetColorFilter: func.isRequired,
};

Cards.defaultProps = {
    isMobile: false,
    cards: [],
    loading: false
};

export default connect(stateToProps, dispatchToProps)(Cards);
