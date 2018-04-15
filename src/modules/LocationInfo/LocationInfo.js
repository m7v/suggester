import './LocationInfo.css';
import './LocationInfoMobile.css';
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

class LocationInfo extends React.PureComponent {

    componentWillMount() {
        if (this.props.locationId) {
            this.props.getLocationById(this.props.locationId);
            this.props.getFavoritesLocationList();
        }
    }

    componentWillUpdate(nextProps) {
        if (this.props.locationId !== nextProps.locationId) {
            this.props.getLocationById(nextProps.locationId);
        }
    }

    handleSearchCardByKeyPress = (searchedCard) => {
        this.props.setQueryString(searchedCard);
        this.props.history.push(`/search?q=${searchedCard}`);
    };

    // @TODO вынести в отдельный компонент
    renderDesktopCard(card) {

        return (
            <div className="LocationInfo__container">
                <MetaHelmet type={'card'} card={card} />
                <div className="LocationInfo__card">

                </div>
                <div className="LocationInfo__fullInfo">
                    <div className="LocationInfo__head">
                        <div className="LocationInfo__icons">
                            {card.rulings &&
                            <div className="LocationInfo__IconRulings">
                                <CardRulings rulings={card.rulings} />
                            </div>
                            }
                            {this.props.isFavorite &&
                            <div className="LocationInfo__IconRemoveFavorite">
                                <Tooltip className='LocationInfo__label' title='Remove from Favorites' placement='top'>
                                    <IconButton onClick={() => this.props.locationDelete(card.id)}>
                                        <StarIcon color="white" />
                                    </IconButton>
                                </Tooltip>
                            </div>
                            }
                            {!this.props.isFavorite &&
                            <div className="LocationInfo__IconAddFavorite">
                                <Tooltip className='LocationInfo__label' title='Add to Favorites' placement='top'>
                                    <IconButton onClick={() => this.props.locationAdd(card)}>
                                        <StarBorderIcon color="white" />
                                    </IconButton>
                                </Tooltip>
                            </div>
                            }
                        </div>
                        <div className="LocationInfo__title">
                            {card.name}
                        </div>
                    </div>
                    <div className="LocationInfo__cardBlock">
                        <div className="LocationInfo__details">
                            {card.type &&
                            <div className="LocationInfo__type">
                                <div className="LocationInfo__detailTitle">Types</div>
                                {card.type}
                            </div>
                            }
                            {card.manaCost &&
                            <div className="LocationInfo__manaCost">
                                <div className="LocationInfo__detailTitle">Mana cost</div>
                                <div className="LocationInfo__manaCostIcon">
                                    <ManaCost manaCost={card.manaCost} />
                                </div>
                            </div>
                            }
                            {card.setName &&
                            <div className="LocationInfo__set">
                                <div className="LocationInfo__detailTitle">Expansion</div>
                                <Link className="LocationInfo__setName" to={`/browse/${card.set.toLowerCase()}`}>
                                    {card.setName}
                                    <IconSet set={card.set} rarity={card.rarity} />
                                </Link>
                            </div>
                            }
                            {card.printings && card.printings.length > 1 &&
                            <div className="LocationInfo__printings">
                                <div className="LocationInfo__detailTitle">Printings</div>
                                {map(card.printingsMap, (id, set) => (
                                    <Link
                                        key={id}
                                        className="LocationInfo__setIcon"
                                        to={`/cards/${id}`}
                                    >
                                        <IconSet set={set} rarity={card.rarity} />
                                    </Link>
                                ))}
                            </div>
                            }
                            {card.legalities && card.legalities.length &&
                            <div className="LocationInfo__legalities">
                                <div className="LocationInfo__detailTitle">Formats</div>
                                <div className="LocationInfo__legality">
                                    {card.legalities && card.legalities.map(item => (
                                        <div key={item.format} className="LocationInfo__legalityName">
                                            <span>{item.format}</span><span>{item.legality}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            }
                        </div>
                        <div className="LocationInfo__textBlock">
                            {(card.text || card.flavor) &&
                            <div className="LocationInfo__textInfo">
                                {/* eslint-disable */}
                                {card.text && card.text.split('\n').map((text, key) => (
                                    <div
                                        key={key}
                                        dangerouslySetInnerHTML={{ __html: formatText(text, 'LocationInfo__textSymbols') }}
                                    />
                                ))}
                                {/* eslint-enable */}
                                {card.flavor && <br />}
                                {card.flavor && <div className="LocationInfo__textFlavor">{card.flavor}</div>}
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
            <div className="LocationInfoMobile__container">
                <MetaHelmet type={'card'} card={card} />
                <div className="LocationInfoMobile__card">
                    <div className="LocationInfoMobile__icons">
                        {card.rulings &&
                            <CardRulings rulings={card.rulings} isMobile />
                        }
                        {this.props.isFavorite &&
                            <div className="LocationInfo__IconRemoveFavorite">
                                <IconButton onClick={() => this.props.cardDelete(card.id)}>
                                    <StarIcon color="white" />
                                </IconButton>
                            </div>
                        }
                        {!this.props.isFavorite &&
                            <div className="LocationInfo__IconAddFavorite">
                                <IconButton onClick={() => this.props.cardAdd(card)}>
                                    <StarBorderIcon color="white" />
                                </IconButton>
                            </div>
                        }
                    </div>
                    <div className="LocationInfoMobile__title">
                        {card.name}
                    </div>
                    <Card card={card} foil={isFoil} needForceCheck />
                    <Link className="LocationInfoMobile__artist" to={`/search?q=${card.artist}`}>
                        Artist <span className="LocationInfoMobile__artistName">{card.artist}</span> <span>#{card.number}</span>
                    </Link>
                    <div className="LocationInfoMobile__details">
                        <div className="LocationInfoMobile__textBlock">
                            <div className="LocationInfoMobile__textInfo">
                                {/* eslint-disable */}
                                {card.text && card.text.split('\n').map((text, key) =>
                                    <div key={key} dangerouslySetInnerHTML={{__html: formatText(text, 'LocationInfo__textSymbols')}} />
                                )}
                                {/* eslint-enable */}
                                {card.flavor && <br />}
                                {card.flavor && <div className="LocationInfoMobile__textFlavor">{card.flavor}</div>}
                            </div>
                        </div>
                        <div className="LocationInfoMobile__type">
                            <div className="LocationInfoMobile__detailTitle">Types</div>
                            {card.type}
                        </div>
                        {card.manaCost &&
                            <div className="LocationInfoMobile__manaCost">
                                <div className="LocationInfoMobile__detailTitle">Mana cost</div>
                                <div className="LocationInfoMobile__manaCostIcon">
                                    <ManaCost manaCost={card.manaCost} />
                                </div>
                            </div>
                        }
                        {card.setName &&
                            <div className="LocationInfoMobile__set">
                                <div className="LocationInfoMobile__detailTitle">Expansion</div>
                                <Link className="LocationInfoMobile__setName" to={`/browse/${card.set.toLowerCase()}`}>
                                    {card.setName}
                                </Link>
                                <div><IconSet set={card.set} rarity={card.rarity} isMobile /></div>
                            </div>
                        }
                        {card.printings && card.printings.length > 1 &&
                        <div className="LocationInfoMobile__printings">
                            <div className="LocationInfoMobile__detailTitle">Printings</div>
                            {map(card.printingsMap, (id, set) => (
                                <Link
                                    key={id}
                                    className="LocationInfoMobile__setIcon"
                                    to={`/cards/${id}`}
                                >
                                    <IconSet set={set} rarity={card.rarity} isMobile />
                                </Link>
                            ))}
                        </div>
                        }
                        {card.legalities && card.legalities.length &&
                        <div className="LocationInfoMobile__legalities">
                            <div className="LocationInfoMobile__detailTitle">Formats</div>
                            <div className="LocationInfoMobile__legality">
                                {card.legalities && card.legalities.map(item => (
                                    <div key={item.format} className="LocationInfoMobile__legalityName">
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
        const { location, isMobile, loading, error } = this.props;

        if (error) {
            return (
                <ErrorPage />
            );
        }

        const root = classNames({
            'LocationInfo__root': true,
            '_mobile': this.props.isMobile,
        });

        return (
            <div className={root}>
                {!loading &&
                    <ButtonBack className="LocationInfo__back" />
                }
                <SearchBarMini
                    className="LocationInfo__search"
                    isMobile={isMobile}
                    handleSearchCardByKeyPress={this.handleSearchCardByKeyPress}
                />
                <div className="LocationInfo__background">
                    <div className="LocationInfo__backgroundComposition">
                        {!loading &&
                            <div
                                className="LocationInfo__backgroundImage"
                                style={{backgroundImage: `url(${location.imageUrl})`}}
                            />
                        }
                        <div className="LocationInfo__backgroundTrapezoid" />
                    </div>
                </div>
                {loading &&
                    <div className="LocationInfo__preloader">
                        <div className="LocationInfo__circular">
                            <Loader />
                        </div>
                    </div>
                }
                {!isMobile && !loading && this.renderDesktopCard(location) }
                {isMobile && !loading && this.renderMobileCard(location) }
            </div>
        );
    }
}

LocationInfo.propTypes = {
    history: shape({}).isRequired,
    locationId: string.isRequired,
    location: shape({}).isRequired,
    locationAdd: func.isRequired,
    locationDelete: func.isRequired,
    getLocationById: func.isRequired,
    getFavoritesLocationList: func.isRequired,
    setQueryString: func.isRequired,
    isFavorite: bool,
    isMobile: bool,
    loading: bool,
    error: bool,
};

LocationInfo.defaultProps = {
    location: {},
    isFavorite: false,
    isMobile: false,
    loading: false
};

export default connect(stateToProps, dispatchToProps)(LocationInfo);
