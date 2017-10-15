import './CardSet.css';
import 'mana-font/css/mana.min.css';
import React from 'react';
import { connect } from 'react-redux';
import map from 'lodash/map';
import debounce from 'lodash/debounce';
import classNames from 'classnames';
import { bool, string, arrayOf, shape, func } from 'prop-types';
import { CircularProgress, FontIcon, IconButton, Paper } from 'material-ui';
import CardGridList from '../../components/CardGridList';
import stateToProps from './connect/stateToProps';
import dispatchToProps from './connect/dispatchToProps';

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

class CardSet extends React.Component {

    componentWillMount() {
        if (this.props.code) {
            this.props.getSetCardsByCode(this.props.code);
        }
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
        this.props.appSetCardSetColorFilter({[color]: !this.props.colors[color]});
    };

    appSetTypeFilter = type => () => {
        this.props.appSetCardSetTypeFilter({[type]: !this.props.types[type]});
    };

    renderTypeFilter = types => map(types, (type, cardType) => {
        const iconClass = classNames({
            'CardSet__filterType': true,
            'CardSet__filterTypeSelected': !!this.props.types[cardType],
            'ms': true,
            [`ms-${cardType}`]: true,
        });

        return (
            <IconButton key={type} className="CardSet__icon" onClick={debounce(this.appSetTypeFilter(cardType), 100)}>
                <FontIcon className={iconClass} />
            </IconButton>
        );
    });

    renderColorFilter = manaPool => map(manaPool, (color, mana) => {
        const iconClass = classNames({
            'CardSet__filterMana': true,
            'ms': true,
            [`ms-${manaMap[ mana ]}`]: true,
            [`CardSet__filterMana-${manaMap[ mana ]}`]: !!this.props.colors[ color ],
        });

        return (
            <IconButton key={color} className="CardSet__icon" onClick={debounce(this.appSetColorFilter(color), 100)}>
                <FontIcon className={iconClass} />
            </IconButton>
        );
    });

    render() {
        return (
            <section className="CardSet">
                <div className="CardSet__main">
                    <Paper className="CardSet__inputWrapper" zDepth={2}>
                        <section>
                            <div className="CardSet__form">
                                <div className="CardSet__inputManaFilter">
                                    { this.renderColorFilter(manaMap) }
                                </div>
                                <div className="CardSet__inputTypeFilter">
                                    { this.renderTypeFilter(typesMap) }
                                </div>
                            </div>
                        </section>
                    </Paper>
                    {!this.props.loading &&
                        <CardGridList cards={this.props.cards} />
                    }
                    {this.props.loading &&
                    <div className="CardSet__preloader">
                        <div className="CardSet__circular">
                            <CircularProgress size={120} thickness={8} color="rgb(211, 47, 47)" />
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
