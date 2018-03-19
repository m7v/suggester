import './CardInfo.css';
import './CardInfoMobile.css';
import React from 'react';
import { connect } from 'react-redux';
import Link from 'react-router-dom/Link';
import { bool, string, func, shape } from 'prop-types';
import map from 'lodash/map';
import classNames from 'classnames';
import Tooltip from 'material-ui/Tooltip';
import IconButton from 'material-ui/IconButton';
import StarBorderIcon from 'material-ui-icons/StarBorder';
import StarIcon from 'material-ui-icons/Star';
import { dispatchToProps } from './connect/dispatchToProps';
import { stateToProps } from './connect/stateToProps';
import { formatText } from '../../core/helpers/mana.helper';
import SearchBarMini from '../../components/SearchBarMini';
import Card from '../../components/Card';
import Loader from '../../components/Loader/Loader';
import ButtonBack from '../../components/ButtonBack';
import MetaHelmet from '../../components/MetaHelmet';
import CardRulings from '../../components/CardRulings';
import ManaCost from '../../components/ManaCost';
import IconSet from '../../components/IconSet/IconSet';
import ErrorPage from '../../components/ErrorPage/ErrorPage';

class CardInfo extends React.PureComponent {

    componentWillMount() {
        if (this.props.cardId) {
            this.props.getCardById(this.props.cardId);
            this.props.getFavoritesCardList();
        }
    }

    componentWillUpdate(nextProps) {
        if (this.props.cardId !== nextProps.cardId) {
            this.props.getCardById(nextProps.cardId);
        }
    }

    handleSearchCardByKeyPress = (searchedCard) => {
        this.props.setQueryString(searchedCard);
        this.props.history.push(`/search?q=${searchedCard}`);
    };

    // @TODO вынести в отдельный компонент
    renderDesktopCard(card) {
        const isFoil = card.rarity === 'Mythic Rare' || card.rarity === 'Rare';

        return (
            <div className="CardInfo__container">
                <MetaHelmet type={'card'} card={card} />
                <div className="CardInfo__card">
                    <Card card={card} foil={isFoil} needForceCheck oversize />
                    {card.artist &&
                    <Link className="CardInfo__artist" to={`/search?q=${card.artist.replace(/ /g, '%20')}`}>
                        Artist <span className="CardInfo__artistName">{card.artist}</span>
                        {card.number && <span> #{card.number}</span>}
                    </Link>
                    }
                </div>
                <div className="CardInfo__fullInfo">
                    <div className="CardInfo__head">
                        <div className="CardInfo__icons">
                            {card.rulings &&
                            <div className="CardInfo__IconRulings">
                                <CardRulings rulings={card.rulings} />
                            </div>
                            }
                            {this.props.isFavorite &&
                            <div className="CardInfo__IconRemoveFavorite">
                                <Tooltip className='CardInfo__label' title='Remove from Favorites' placement='top'>
                                    <IconButton onClick={() => this.props.cardDelete(card.id)}>
                                        <StarIcon color="white" />
                                    </IconButton>
                                </Tooltip>
                            </div>
                            }
                            {!this.props.isFavorite &&
                            <div className="CardInfo__IconAddFavorite">
                                <Tooltip className='CardInfo__label' title='Add to Favorites' placement='top'>
                                    <IconButton onClick={() => this.props.cardAdd(card)}>
                                        <StarBorderIcon color="white" />
                                    </IconButton>
                                </Tooltip>
                            </div>
                            }
                        </div>
                        <div className="CardInfo__title">
                            {card.name}
                        </div>
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
                                    <IconSet set={card.set} rarity={card.rarity} />
                                </Link>
                            </div>
                            }
                            {card.printings && card.printings.length > 1 &&
                            <div className="CardInfo__printings">
                                <div className="CardInfo__detailTitle">Printings</div>
                                {map(card.printingsMap, (id, set) => (
                                    <Link
                                        key={id}
                                        className="CardInfo__setIcon"
                                        to={`/cards/${id}`}
                                    >
                                        <IconSet set={set} rarity={card.rarity} />
                                    </Link>
                                ))}
                            </div>
                            }
                            {card.legalities && card.legalities.length &&
                            <div className="CardInfo__legalities">
                                <div className="CardInfo__detailTitle">Formats</div>
                                <div className="CardInfo__legality">
                                    {card.legalities && card.legalities.map(item => (
                                        <div key={item.format} className="CardInfo__legalityName">
                                            <span>{item.format}</span><span>{item.legality}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            }
                        </div>
                        <div className="CardInfo__textBlock">
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
    }

    // @TODO вынести в отдельный компонент
    renderMobileCard(card) {
        const isFoil = card.rarity === 'Mythic Rare' || card.rarity === 'Rare';
        return (
            <div className="CardInfoMobile__container">
                <MetaHelmet type={'card'} card={card} />
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
                    <Card card={card} foil={isFoil} needForceCheck />
                    <Link className="CardInfoMobile__artist" to={`/search?q=${card.artist}`}>
                        Artist <span className="CardInfoMobile__artistName">{card.artist}</span> <span>#{card.number}</span>
                    </Link>
                    <div className="CardInfoMobile__details">
                        <div className="CardInfoMobile__textBlock">
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
                                <div><IconSet set={card.set} rarity={card.rarity} isMobile /></div>
                            </div>
                        }
                        {card.printings && card.printings.length > 1 &&
                        <div className="CardInfoMobile__printings">
                            <div className="CardInfoMobile__detailTitle">Printings</div>
                            {map(card.printingsMap, (id, set) => (
                                <Link
                                    key={id}
                                    className="CardInfoMobile__setIcon"
                                    to={`/cards/${id}`}
                                >
                                    <IconSet set={set} rarity={card.rarity} isMobile />
                                </Link>
                            ))}
                        </div>
                        }
                        {card.legalities && card.legalities.length &&
                        <div className="CardInfoMobile__legalities">
                            <div className="CardInfoMobile__detailTitle">Formats</div>
                            <div className="CardInfoMobile__legality">
                                {card.legalities && card.legalities.map(item => (
                                    <div key={item.format} className="CardInfoMobile__legalityName">
                                        <span>{item.format}</span><span>{item.legality}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        }
                    </div>
                </div>
            </div>
        );
    }

    render() {
        const { card, isMobile, loading, error } = this.props;

        if (error) {
            return (
                <ErrorPage />
            );
        }

        const root = classNames({
            'CardInfo__root': true,
            '_mobile': this.props.isMobile,
        });

        return (
            <div className={root}>
                {!loading &&
                    <ButtonBack className="CardInfo__back" />
                }
                <SearchBarMini
                    className="CardInfo__search"
                    isMobile={isMobile}
                    handleSearchCardByKeyPress={this.handleSearchCardByKeyPress}
                />
                <div className="CardInfo__background">
                    <div className="CardInfo__backgroundComposition">
                        {!loading &&
                            <div
                                className="CardInfo__backgroundImage"
                                style={{backgroundImage: `url(${card.imageUrl})`}}
                            />
                        }
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
    error: bool,
};

CardInfo.defaultProps = {
    isFavorite: false,
    isMobile: false,
    loading: false
};

export default connect(stateToProps, dispatchToProps)(CardInfo);
