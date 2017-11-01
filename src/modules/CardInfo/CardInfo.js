import './CardInfo.css';
import './CardInfoMobile.css';
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { bool, string, func, shape } from 'prop-types';
import classNames from 'classnames';
import isEmpty from 'lodash/isEmpty';
import reduce from 'lodash/reduce';
import { dispatchToProps } from './connect/dispatchToProps';
import { stateToProps } from './connect/stateToProps';
import { getManaClass } from 'helpers/mana.helper';
import Async from 'modules/Async';
import SearchBarMini from 'components/SearchBarMini';
import Card from 'components/Card';
import Loader from 'components/Loader/Loader';
import ButtonBack from 'components/ButtonBack';

const CardRulings = (props) => <Async load={import('components/CardRulings')} componentProps={props} />;

class CardInfo extends React.PureComponent {

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

    // @TODO Нужно вынести в отдельный компонент.
    getManaCost = () => {
        if (!isEmpty(this.props.card && this.props.card.manaCost)) {
            const parsedMana = this.props.card.manaCost.match(/\{(.*?)\}/g)
                .map(rawMana => rawMana.replace('{', '').replace('}', ''));

            return parsedMana.map((mana, index) => (
                <span
                    key={index}
                    className={classNames({
                        'CardInfo__mana': true,
                        [`CardInfo__mana-${getManaClass(mana)}`]: true,
                        'ms-split': mana.indexOf('/') >= 0,
                        'ms-cost': true,
                        'ms': true,
                        [`ms-${getManaClass(mana)}`]: true
                    })}
                />
            ));
        }
        return [];
    };

    createRegExp = (search) => {
        const baseSearch = {
            '{T}': true,
            '{P}': true,
            '{E}': true,
            '{W}': true,
            '{R}': true,
            '{B}': true,
            '{U}': true,
            '{G}': true,
            '{C}': true,
            '{X}': true,
        };
        const numberSearch = {
            '{1}': true,
            '{2}': true,
            '{3}': true,
            '{4}': true,
            '{5}': true,
            '{6}': true,
            '{7}': true,
            '{8}': true,
            '{9}': true,
        };

        switch (true) {
            case baseSearch[search]:
                return new RegExp(`${search}`, 'g');
            case !!search.match(new RegExp('{[0-9A-Z]\\/[0-9A-Z]}', 'g')):
                return new RegExp('{[0-9A-Z]\\/[0-9A-Z]}', 'g');
            case numberSearch[search]:
                return new RegExp('{[0-9]}', 'g');
            default:
                return search;
        }
    };

    // @TODO Вынести в отдельный хелпер и компонент.
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
                const l = getManaClass(manaLetter);
                let manaSpan = `<span 
                    class="CardInfo__textSymbols CardInfo__textSymbols-${l} ms ms-cost ms-${l}"></span>`;
                if (manaLetter.indexOf('/') >= 0) {
                    manaSpan = `<span
                        class="CardInfo__textSymbols CardInfo__textSymbols-${l} ms ms-split ms-cost ms-${l}"></span>`;
                }
                agg[key] = manaSpan;
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

    // @TODO вынести в отдельный компонент
    renderDesktopCard = (card) => (
        <div className="CardInfo__container">
            <div className="CardInfo__card">
                <Card card={card} needForceCheck oversize />
                <Link className="CardInfo__artist" to={`/search?q=${card.artist}`}>
                    Artist <span className="CardInfo__artistName">{card.artist}</span>
                    {card.number && <span> #{card.number}</span>}
                </Link>
            </div>
            <div className="CardInfo__fullInfo">
                {card.rulings &&
                    <div className="CardInfo__IconInfoOutline">
                        <CardRulings rulings={card.rulings} />
                    </div>
                }
                <div className="CardInfo__title">
                    {card.name}
                </div>
                <div className="CardInfo__cardBlock">
                    <div className="CardInfo__details">
                        {card.type &&
                            <div className="CardInfo__type">
                                <div className="CardInfo__detailTitle">Types</div>
                                {card.type}
                            </div>
                        }
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
                    {(card.text || card.flavor) &&
                        <div className="CardInfo__textInfo">
                            {card.text && card.text.split('\n').map((text, key) =>
                                <div key={key} dangerouslySetInnerHTML={{ __html: this.formatText(text) }} />
                            )}
                            {card.flavor && <br />}
                            {card.flavor && <div className="CardInfo__textFlavor">{card.flavor}</div>}
                        </div>
                    }
                </div>
            </div>
        </div>
    );

    // @TODO вынести в отдельный компонент
    renderMobileCard = (card) => (
        <div className="CardInfoMobile__container">
            <div className="CardInfoMobile__card">
                {card.rulings &&
                    <div className="CardInfoMobile__IconInfoOutline">
                        <CardRulings rulings={card.rulings} isMobile />
                    </div>
                }
                <div className="CardInfoMobile__title">
                    {card.name}
                </div>
                <Card card={card} needForceCheck />
                <Link className="CardInfoMobile__artist" to={`/search?q=${card.artist}`}>
                    Artist <span className="CardInfoMobile__artistName">{card.artist}</span> <span>#{card.number}</span>
                </Link>
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
                    {card.flavor && <br />}
                    {card.flavor && <div className="CardInfoMobile__textFlavor">{card.flavor}</div>}
                </div>
            </div>
        </div>
    );

    render() {
        const { card, isMobile, loading } = this.props;

        const root = classNames({
            'CardInfo__root': true,
            '_mobile': this.props.isMobile,
        });

        return (
            <div className={root}>
                {!loading && card.set &&
                    <ButtonBack className="CardInfo__back" path={`/browse/${card.set.toLowerCase()}`} />
                }
                <SearchBarMini
                    className="CardInfo__search"
                    isMobile={isMobile}
                    handleSearchCardByKeyPress={this.handleSearchCardByKeyPress}
                />
                <div className="CardInfo__background">
                    <div className="CardInfo__backgroundComposition">
                        <div
                            className="CardInfo__backgroundImage"
                            style={{backgroundImage: `url(${card.imageUrlLarge})`}}
                        />
                        <div className="CardInfo__backgroundTrapezoid" />
                    </div>
                </div>
                {loading &&
                    <div className="CardInfo__preloader">
                        <div className="CardInfo__circular">
                            <Loader />
                        </div>
                    </div>
                }
                {!isMobile && !loading && this.renderDesktopCard(card) }
                {isMobile && !loading && this.renderMobileCard(card) }
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
