import './CardInfo.css';
import 'mana-font/css/mana.min.css';
import 'keyrune/css/keyrune.min.css';
import React from 'react';
import { connect } from 'react-redux';
import { bool, string, func, shape } from 'prop-types';
import isEmpty from 'lodash/isEmpty';
import reduce from 'lodash/reduce';
import { dispatchToProps } from './connect/dispatchToProps';
import { stateToProps } from './connect/stateToProps';
import asyncComponent from '../Async';
import SearchBar from '../../components/SearchBar/SearchBar';
const DoubleFacedCard = asyncComponent(() => import('../../components/DoubleFacedCard'));
const SimpleCard = asyncComponent(() => import('../../components/SimpleCard'));

const manaMapping = {
    U: 'u',
    R: 'r',
    B: 'b',
    G: 'g',
    W: 'w',
    S: 's',
    E: 'e',
    C: 'c',
    P: 'p',
    X: 'x',
    Y: 'y',
    Z: 'z',
    T: 'tap',
    1: '1',
    2: '2',
    3: '3',
    4: '4',
    5: '5',
    6: '6',
    7: '7',
    8: '8',
    9: '9',
    10: '10',
    11: '11',
    12: '12',
    13: '13',
    14: '14',
    15: '15',
    17: '17',
    18: '18',
    19: '19',
    20: '20',
};
const DOUBLE_FACED_TYPE = 'double-faced';

class CardInfo extends React.Component {

    componentWillMount() {
        if (this.props.cardId) {
            this.props.getCardById(this.props.cardId);
        }
    }

    getSetIcon = (card) => {
        if (!card) {
            return '';
        }
        const className = `CardInfo__cardSet ss ss-${card.set.toLowerCase()} _${card.rarity.toLowerCase()}`;
        return <i className={className} />;
    };

    getManaCost = () => {
        if (!isEmpty(this.props.card && this.props.card.manaCost)) {
            const parsedMana = this.props.card.manaCost.match(/\{(.*?)\}/g)
                .map(rawMana => rawMana.replace('{', '').replace('}', ''));

            return parsedMana.map((mana, index) => (
                <span
                    key={index}
                    className={`CardInfo__mana CardInfo__mana-${manaMapping[mana]} ms ms-${manaMapping[mana]}`}
                />
            ));
        }
        return [];
    };

    createRegExp = (search) => {
        switch (search) {
            case '{W}':
            case '{R}':
            case '{B}':
            case '{U}':
            case '{G}':
            case '{C}':
                return new RegExp(`${search}`, 'g');
            default:
                return search;
        }
    };

    formatText = (text) => {
        if (text) {
            const mana = text.match(/\{(.*?)\}/g);
            if (!mana) {
                return text;
            }
            const parsedMap = mana.reduce((agg, rawMana) => {
                agg[rawMana] = rawMana.replace('{', '').replace('}', '');
                return agg;
            }, {});

            const iconMap = reduce(parsedMap, (agg, manaLetter, key) => {
                const l = manaMapping[manaLetter];
                agg[key] = `<span class="CardInfo__textSymbols CardInfo__textSymbols-${l} ms ms-${l}"></span>`;
                return agg;
            }, {});

            return reduce(iconMap, (agg, icon, search) =>
                agg.replace(this.createRegExp(search), icon), text);
        }
        return text;
    };

    handleSearchCardByKeyPress = (searchedCard) => {
        this.props.setQueryString(searchedCard);
        this.props.history.push(`/search?q=${searchedCard}`);
    };

    render() {
        const { card } = this.props;

        return (
            <div className="CardInfo__root">
                <div className="CardInfo__background">
                    <div className="CardInfo__backgroundComposition">
                        <div className="CardInfo_backgroundTriangle" />
                        <div className="CardInfo_backgroundRect" />
                    </div>
                </div>
                <div className="CardInfo__container">
                    <SearchBar
                        isMobile={this.props.isMobile}
                        handleSearchCardByKeyPress={this.handleSearchCardByKeyPress}
                    />
                    <div className="CardInfo__card">
                        {card.layout && card.layout !== DOUBLE_FACED_TYPE &&
                            <SimpleCard card={card} needForceCheck />
                        }
                        {card.layout && card.layout === DOUBLE_FACED_TYPE &&
                            <DoubleFacedCard card={card} needForceCheck />
                        }
                        {!card.layout &&
                            <SimpleCard card={card} needForceCheck />
                        }
                        <div className="CardInfo__artist">
                            Artist <span className="CardInfo__artistName">{card.artist}</span>
                        </div>
                    </div>
                    <div className="CardInfo__fullInfo">
                        <div className="CardInfo__title">
                            {card.name}
                        </div>
                        <div className="CardInfo__cardBlock">
                            <div className="CardInfo__details">
                                <div className="CardInfo__type">
                                    <div className="CardInfo__detailTitle">Types</div>
                                    {card.type}
                                </div>
                                {card.manaCost &&
                                    <div className="CardInfo__manaCost">
                                        <div className="CardInfo__detailTitle">Mana cost</div>
                                        <div className="CardInfo__manaCostIcon">{this.getManaCost()}</div>
                                    </div>
                                }
                                {card.setName &&
                                    <div className="CardInfo__set">
                                        <div className="CardInfo__detailTitle">Expansion</div>
                                        {card.setName}
                                        {this.getSetIcon(card)}
                                    </div>
                                }
                            </div>
                            <div className="CardInfo__textInfo">
                                {card.text && card.text.split('\n').map((text, key) =>
                                    <div key={key} dangerouslySetInnerHTML={{__html: this.formatText(text)}} />
                                )}
                                <br />
                                {card.flavor && <div className="CardInfo__textFlavor">{card.flavor}</div>}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

CardInfo.propTypes = {
    history: shape({}).isRequired,
    cardId: string.isRequired,
    card: shape({}).isRequired,
    setQueryString: func.isRequired,
    getCardById: func.isRequired,
    isMobile: bool,
    loading: bool,
};

CardInfo.defaultProps = {
    isMobile: false,
    loading: false
};

export default connect(stateToProps, dispatchToProps)(CardInfo);
