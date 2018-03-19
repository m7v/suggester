import './CardFilter.css';
import React from 'react';
import { func, shape, string, number } from 'prop-types';
import classNames from 'classnames';
import map from 'lodash/map';
import isEmpty from 'lodash/isEmpty';
import compact from 'lodash/compact';
import debounce from 'lodash/debounce';
import upperFirst from 'lodash/upperFirst';
import IconButton from 'material-ui/IconButton';
import Tooltip from 'material-ui/Tooltip';
import Button from 'material-ui/Button';
import IconFilter from 'material-ui-icons/FilterList';
import Drawer from 'material-ui/Drawer';
import IconSet from '../IconSet/IconSet';

const rarityMap = {
    common: 'common',
    uncommon: 'uncommon',
    rare: 'rare',
    mythic: 'mythic',
    basicLand: 'basicland',
};
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

class CardFilter extends React.Component {

    constructor(props) {
        super(props);
        this.state = {open: false};
    }

    handleToggle = () => this.setState({open: !this.state.open});

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

    appSetRarityFilter = rareType => () => {
        this.props.appSetRarityFilter({[rareType]: !this.props.rarity[rareType]});
    };

    renderTypeFilter = types => map(types, (type, cardType) => {
        const iconClass = classNames({
            'CardFilter__type': true,
            'CardFilter__typeSelected': !!this.props.types[cardType],
            'ms': true,
            'ms-fw': true,
            [`ms-${cardType}`]: true,
        });

        return (
            <Tooltip key={type} className='CardFilter__label' title={upperFirst(cardType)}>
                <IconButton
                    className="CardFilter__icon"
                    onClick={debounce(this.appSetTypeFilter(cardType), 100)}
                >
                    <div className={iconClass} />
                </IconButton>
            </Tooltip>
        );
    });

    renderColorFilter = manaPool => map(manaPool, (color, mana) => {
        const iconClass = classNames({
            'CardFilter__mana': true,
            'ms': true,
            'ms-fw': true,
            [`ms-${manaMap[ mana ]}`]: true,
            [`CardFilter__mana-${manaMap[ mana ]}`]: !!this.props.colors[ color ],
        });

        return (
            <Tooltip key={color} className='CardFilter__label' title={upperFirst(mana)}>
                <IconButton className="CardFilter__icon" onClick={debounce(this.appSetColorFilter(color), 100)}>
                    <div className={iconClass} />
                </IconButton>
            </Tooltip>
        );
    });

    renderRarityFilter = rareTypes => map(rareTypes, (type, cardType) => {
        const iconClass = classNames({
            'CardFilter__rarity': true,
            [`ss-${cardType}`]: !!this.props.rarity[cardType],
        });
        return (
            <Button
                key={type}
                color="contrast"
                className="CardFilter__icon"
                onClick={debounce(this.appSetRarityFilter(cardType), 100)}
            >
                <span className={iconClass}>
                    {rareTypes[cardType]}
                </span>
            </Button>
        );
    });


    render() {
        const { colors, types, rarity, className, currentSet, resultCount } = this.props;
        const hasColorFilter = compact(Object.values(colors)).length;
        const hasTypeFilter = compact(Object.values(types)).length;
        const hasRarityFilter = compact(Object.values(rarity)).length;
        const iconStyle = classNames({
            'CardFilter__icon': true,
            '_active': hasColorFilter || hasTypeFilter || hasRarityFilter
        });

        return (
            <div className={className || 'CardFilter__root'}>
                <IconButton className={iconStyle} onClick={this.handleToggle}>
                    <IconFilter />
                </IconButton>
                <Drawer
                    anchor='top'
                    open={this.state.open}
                    onRequestClose={this.handleToggle}
                >
                    <div className="CardFilter__inputWrapper">
                        <div className="CardFilter__form">
                            {!isEmpty(currentSet) &&
                                <div className="CardFilter__header">
                                    {currentSet.code &&
                                        <IconSet set={this.props.currentSet.code} rarity="common" isGradient />
                                    }
                                    <span className="CardFilter__headerTitle">{currentSet.name}</span>
                                </div>
                            }
                            <div className="CardFilter__inputManaFilter">
                                { this.renderColorFilter(manaMap) }
                            </div>
                            <div className="CardFilter__inputTypeFilter">
                                { this.renderTypeFilter(typesMap) }
                            </div>
                            <div className="CardFilter__inputRarityFilter">
                                { this.renderRarityFilter(rarityMap) }
                            </div>
                            <div className="CardFilter__result">
                                {resultCount} cards
                            </div>
                        </div>
                    </div>
                </Drawer>
            </div>
        );
    }
}

CardFilter.propTypes = {
    resultCount: number,
    className: string,
    currentSet: shape({ code: string }),
    rarity: shape({}).isRequired,
    appSetRarityFilter: func.isRequired,
    colors: shape({}).isRequired,
    types: shape({}).isRequired,
    history: shape({}).isRequired,
    appSetTypeFilter: func.isRequired,
    appSetColorFilter: func.isRequired,
};

CardFilter.defaultProps = {
    className: '',
    currentSet: {},
    resultCount: 0,
};

export default CardFilter;
