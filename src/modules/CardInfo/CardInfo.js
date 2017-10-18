import './CardInfo.css';
import './CardInfoMobile.css';
import 'mana-font/css/mana.min.css';
import 'keyrune/css/keyrune.min.css';
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { bool, string, func, shape } from 'prop-types';
import classNames from 'classnames';
import isEmpty from 'lodash/isEmpty';
import reduce from 'lodash/reduce';
import { dispatchToProps } from './connect/dispatchToProps';
import { stateToProps } from './connect/stateToProps';
import SearchBarMini from '../../components/SearchBarMini';
import Card from '../../components/Card';

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

    renderDesktopCard = (card) => (
        <div className="CardInfo__container">
            <div className="CardInfo__card">
                <Card card={card} needForceCheck />
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
                                <Link className="CardInfo__setName" to={`/browse/${card.set.toLowerCase()}`}>
                                    {card.setName}
                                    {this.getSetIcon(card)}
                                </Link>
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
    );

    renderMobileCard = (card) => (
        <div className="CardInfoMobile__container">
            <div className="CardInfoMobile__card">
                <div className="CardInfoMobile__title">
                    {card.name}
                </div>
                <Card card={card} needForceCheck />
                <div className="CardInfoMobile__artist">
                    Artist <span className="CardInfoMobile__artistName">{card.artist}</span>
                </div>
                <div className="CardInfoMobile__details">
                    <div className="CardInfoMobile__type">
                        <div className="CardInfoMobile__detailTitle">Types</div>
                        {card.type}
                    </div>
                    {card.manaCost &&
                        <div className="CardInfoMobile__manaCost">
                            <div className="CardInfoMobile__detailTitle">Mana cost</div>
                            <div className="CardInfoMobile__manaCostIcon">{this.getManaCost()}</div>
                        </div>
                    }
                    {card.setName &&
                        <div className="CardInfoMobile__set">
                            <div className="CardInfoMobile__detailTitle">Expansion</div>
                            <Link className="CardInfoMobile__setName" to={`/browse/${card.set.toLowerCase()}`}>
                                {card.setName}
                            </Link>
                            <div>{this.getSetIcon(card)}</div>
                        </div>
                    }
                </div>
                <div className="CardInfoMobile__textInfo">
                    {card.text && card.text.split('\n').map((text, key) =>
                        <div key={key} dangerouslySetInnerHTML={{__html: this.formatText(text)}} />
                    )}
                    <br />
                    {card.flavor && <div className="CardInfoMobile__textFlavor">{card.flavor}</div>}
                </div>
            </div>
        </div>
    );

    render() {
        const { card } = this.props;

        const root = classNames({
            'CardInfo__root': true,
            '_mobile': this.props.isMobile,
        });

        return (
            <div className={root}>
                <SearchBarMini
                    className="CardInfo__search"
                    isMobile={this.props.isMobile}
                    handleSearchCardByKeyPress={this.handleSearchCardByKeyPress}
                />
                <div className="CardInfo__background">
                    <div className="CardInfo__backgroundComposition">
                        <div className="CardInfo__backgroundImage" style={{backgroundImage: `url(${card.imageUrl})`}} />
                        <div className="CardInfo_backgroundTrapezoid" />
                    </div>
                </div>
                {!this.props.isMobile && this.renderDesktopCard(card) }
                {this.props.isMobile && this.renderMobileCard(card) }
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
