import './CardInfo.css';
import './CardInfoMobile.css';
import React from 'react';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { bool, string, func, shape } from 'prop-types';
import classNames from 'classnames';
import { dispatchToProps } from './connect/dispatchToProps';
import { stateToProps } from './connect/stateToProps';
import { formatText } from 'helpers/mana.helper';
import Async from 'components/Async';
import SearchBarMini from 'components/SearchBarMini';
import Card from 'components/Card';
import Loader from 'components/Loader/Loader';
import ButtonBack from 'components/ButtonBack';
import IconButton from 'material-ui/IconButton';
import StarBorderIcon from 'material-ui-icons/StarBorder';
import StarIcon from 'material-ui-icons/Star';

const CardRulings = (props) => <Async load={import('components/CardRulings')} componentProps={props} />;
const ManaCost = (props) => <Async load={import('components/ManaCost')} componentProps={props} />;

class CardInfo extends React.PureComponent {

    componentWillMount() {
        if (this.props.cardId) {
            this.props.getCardById(this.props.cardId);
            this.props.getFavoritesCardList();
        }
    }

    setMetaTags = (card) => (
        <Helmet>
            <meta charSet="utf-8" />
            <title>{`${card.name} | MTG Manager`}</title>
            <link rel="canonical" href={`https://m7v.github.io/suggester/#/cards/${card.id}`} />
            <meta name="twitter:image" content={card.imageUrl} />
            <meta name="twitter:title" content={`${card.name} | MTG Manager`} />
            <meta property="og:image" content={card.imageUrl} />
            <meta property="og:title" content={`${card.name} | MTG Manager`} />
        </Helmet>
    );

    getSetIcon = (set, rarity) => {
        if (!set) {
            return '';
        }
        const className = `CardInfo__cardSet ss ss-${set.toLowerCase()} _${rarity.toLowerCase()}`;
        return <i className={className} />;
    };

    handleSearchCardByKeyPress = (searchedCard) => {
        this.props.setQueryString(searchedCard);
        this.props.history.push(`/search?q=${searchedCard}`);
    };

    // @TODO вынести в отдельный компонент
    renderDesktopCard = (card) => (
        <div className="CardInfo__container">
            { this.setMetaTags(card) }
            <div className="CardInfo__card">
                <Card card={card} needForceCheck oversize />
                <Link className="CardInfo__artist" to={`/search?q=${card.artist}`}>
                    Artist <span className="CardInfo__artistName">{card.artist}</span>
                    {card.number && <span> #{card.number}</span>}
                </Link>
            </div>
            <div className="CardInfo__fullInfo">
                <div className="CardInfo__icons">
                    {card.rulings &&
                        <div className="CardInfo__IconRulings">
                            <CardRulings rulings={card.rulings} />
                        </div>
                    }
                    {this.props.isFavorite &&
                        <div className="CardInfo__IconRemoveFavorite">
                            <IconButton onClick={() => this.props.cardDelete(card.id)}>
                                <StarIcon color="white" />
                            </IconButton>
                        </div>
                    }
                    {!this.props.isFavorite &&
                        <div className="CardInfo__IconAddFavorite">
                            <IconButton onClick={() => this.props.cardAdd(card)}>
                                <StarBorderIcon color="white" />
                            </IconButton>
                        </div>
                    }
                </div>
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
                                <div className="CardInfo__manaCostIcon">
                                    <ManaCost manaCost={card.manaCost} />
                                </div>
                            </div>
                        }
                        {card.setName &&
                            <div className="CardInfo__set">
                                <div className="CardInfo__detailTitle">Expansion</div>
                                <Link className="CardInfo__setName" to={`/browse/${card.set.toLowerCase()}`}>
                                    {card.setName}
                                    {this.getSetIcon(card.set, card.rarity)}
                                </Link>
                            </div>
                        }
                    </div>
                    <div>
                        {(card.text || card.flavor) &&
                        <div className="CardInfo__textInfo">
                            {/* eslint-disable */}
                            {card.text && card.text.split('\n').map((text, key) => (
                                <div
                                    key={key}
                                    dangerouslySetInnerHTML={{ __html: formatText(text, 'CardInfo__textSymbols') }}
                                />
                            ))}
                            {/* eslint-enable */}
                            {card.flavor && <br />}
                            {card.flavor && <div className="CardInfo__textFlavor">{card.flavor}</div>}
                        </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    );

    // @TODO вынести в отдельный компонент
    renderMobileCard = (card) => (
        <div className="CardInfoMobile__container">
            { this.setMetaTags(card) }
            <div className="CardInfoMobile__card">
                <div className="CardInfoMobile__icons">
                    {card.rulings &&
                        <CardRulings rulings={card.rulings} isMobile />
                    }
                    {this.props.isFavorite &&
                        <div className="CardInfo__IconRemoveFavorite">
                            <IconButton onClick={() => this.props.cardDelete(card.id)}>
                                <StarIcon color="white" />
                            </IconButton>
                        </div>
                    }
                    {!this.props.isFavorite &&
                        <div className="CardInfo__IconAddFavorite">
                            <IconButton onClick={() => this.props.cardAdd(card)}>
                                <StarBorderIcon color="white" />
                            </IconButton>
                        </div>
                    }
                </div>
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
                            <div className="CardInfoMobile__manaCostIcon">
                                <ManaCost manaCost={card.manaCost} />
                            </div>
                        </div>
                    }
                    {card.setName &&
                        <div className="CardInfoMobile__set">
                            <div className="CardInfoMobile__detailTitle">Expansion</div>
                            <Link className="CardInfoMobile__setName" to={`/browse/${card.set.toLowerCase()}`}>
                                {card.setName}
                            </Link>
                            <div>{this.getSetIcon(card.set, card.rarity)}</div>
                        </div>
                    }
                </div>
                <div className="CardInfoMobile__textInfo">
                    {/* eslint-disable */}
                    {card.text && card.text.split('\n').map((text, key) =>
                        <div key={key} dangerouslySetInnerHTML={{__html: formatText(text, 'CardInfo__textSymbols')}} />
                    )}
                    {/* eslint-enable */}
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
                    <ButtonBack className="CardInfo__back" />
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
    cardAdd: func.isRequired,
    cardDelete: func.isRequired,
    getFavoritesCardList: func.isRequired,
    isFavorite: bool,
    isMobile: bool,
    loading: bool,
};

CardInfo.defaultProps = {
    isFavorite: false,
    isMobile: false,
    loading: false
};

export default connect(stateToProps, dispatchToProps)(CardInfo);
