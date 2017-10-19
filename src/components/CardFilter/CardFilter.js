import './CardFilter.css';
import React from 'react';
import { func, shape, string } from 'prop-types';
import classNames from 'classnames';
import map from 'lodash/map';
import compact from 'lodash/compact';
import debounce from 'lodash/debounce';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';
import IconFilter from 'material-ui/svg-icons/content/filter-list';
import Drawer from 'material-ui/Drawer';

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

class CardFilter extends React.PureComponent {

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

    renderTypeFilter = types => map(types, (type, cardType) => {
        const iconClass = classNames({
            'CardFilter__type': true,
            'CardFilter__typeSelected': !!this.props.types[cardType],
            'ms': true,
            [`ms-${cardType}`]: true,
        });

        return (
            <IconButton
                key={type}
                className="CardFilter__icon"
                onClick={debounce(this.appSetTypeFilter(cardType), 100)}
            >
                <FontIcon className={iconClass} />
            </IconButton>
        );
    });

    renderColorFilter = manaPool => map(manaPool, (color, mana) => {
        const iconClass = classNames({
            'CardFilter__mana': true,
            'ms': true,
            [`ms-${manaMap[ mana ]}`]: true,
            [`CardFilter__mana-${manaMap[ mana ]}`]: !!this.props.colors[ color ],
        });

        return (
            <IconButton key={color} className="CardFilter__icon" onClick={debounce(this.appSetColorFilter(color), 100)}>
                <FontIcon className={iconClass} />
            </IconButton>
        );
    });


    render() {
        const { colors, types, className } = this.props;
        const hasColorFilter = compact(Object.values(colors)).length;
        const hasTypeFilter = compact(Object.values(types)).length;
        const iconStyle = classNames({
            'CardFilter__icon': true,
            '_active': hasColorFilter || hasTypeFilter
        });

        return (
            <div className={className || 'CardFilter__root'}>
                <IconButton className={iconStyle} onClick={this.handleToggle}>
                    <IconFilter />
                </IconButton>
                <Drawer
                    docked={false}
                    width={320}
                    open={this.state.open}
                    onRequestChange={(open) => this.setState({open})}
                    swipeAreaWidth={10}
                    openSecondary
                >
                    <div className="CardFilter__inputWrapper">
                        <section>
                            <div className="CardFilter__form">
                                <div className="CardFilter__inputManaFilter">
                                    { this.renderColorFilter(manaMap) }
                                </div>
                                <div className="CardFilter__inputTypeFilter">
                                    { this.renderTypeFilter(typesMap) }
                                </div>
                            </div>
                        </section>
                    </div>
                </Drawer>
            </div>
        );
    }
}

CardFilter.propTypes = {
    className: string,
    colors: shape({}).isRequired,
    history: shape({}).isRequired,
    types: shape({}).isRequired,
    appSetTypeFilter: func.isRequired,
    appSetColorFilter: func.isRequired,
};

CardFilter.defaultProps = {
    className: '',
};

export default CardFilter;
