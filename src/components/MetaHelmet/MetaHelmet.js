import React from 'react';
import { Helmet } from 'react-helmet';
import { string, shape } from 'prop-types';
import isEmpty from 'lodash/isEmpty';

class MetaHelmet extends React.PureComponent {

    render() {
        const {type, set, card } = this.props;

        switch (type) {
            case 'decks':
                return (
                    <Helmet>
                        <title>{'Decks | MTG Manager'}</title>
                        <meta name="twitter:title" content={'Decks | MTG Manager'} />
                        <meta property="og:title" content={'Decks | MTG Manager'} />
                        <meta property="og:site_name" content="MTG Manager" />
                        <meta property="og:type" content="site" />
                        <meta property="og:url" content="https://m7v.github.io/suggester" />
                        <meta name="twitter:card" content="summary_large_image" />
                        <meta name="twitter:site" content="@m7v.github.io/suggester" />
                        <meta name="twitter:creator" content="@mikhailovcom" />
                    </Helmet>
                );
            case 'favorites':
                return (
                    <Helmet>
                        <title>{'Favorites | MTG Manager'}</title>
                        <meta name="twitter:title" content={'Favorites | MTG Manager'} />
                        <meta property="og:title" content={'Favorites | MTG Manager'} />
                        <meta property="og:site_name" content="MTG Manager" />
                        <meta property="og:type" content="site" />
                        <meta property="og:url" content="https://m7v.github.io/suggester" />
                        <meta name="twitter:card" content="summary_large_image" />
                        <meta name="twitter:site" content="@m7v.github.io/suggester" />
                        <meta name="twitter:creator" content="@mikhailovcom" />
                    </Helmet>
                );
            case 'deckbuilder':
                return (
                    <Helmet>
                        <title>{'Deck builder | MTG Manager'}</title>
                        <link rel="canonical" href={'https://m7v.github.io/suggester/#/browse'} />
                        <meta name="twitter:title" content={'Deck builder | MTG Manager'} />
                        <meta property="og:title" content={'Deck builder | MTG Manager'} />
                        <meta property="og:site_name" content="MTG Manager" />
                        <meta property="og:type" content="site" />
                        <meta property="og:url" content="https://m7v.github.io/suggester" />
                        <meta name="twitter:card" content="summary_large_image" />
                        <meta name="twitter:site" content="@m7v.github.io/suggester" />
                        <meta name="twitter:creator" content="@mikhailovcom" />
                    </Helmet>
                );
            case 'sets':
                return (
                    <Helmet>
                        <title>{'Sets | MTG Manager'}</title>
                        <link rel="canonical" href={'https://m7v.github.io/suggester/#/browse'} />
                        <meta name="twitter:title" content={'Sets | MTG Manager'} />
                        <meta property="og:title" content={'Sets | MTG Manager'} />
                        <meta property="og:site_name" content="MTG Manager" />
                        <meta property="og:type" content="site" />
                        <meta property="og:url" content="https://m7v.github.io/suggester" />
                        <meta name="twitter:card" content="summary_large_image" />
                        <meta name="twitter:site" content="@m7v.github.io/suggester" />
                        <meta name="twitter:creator" content="@mikhailovcom" />
                    </Helmet>
                );
            case 'set':
                return (
                    !isEmpty(set) &&
                        <Helmet>
                            <title>{`${set.name} | MTG Manager`}</title>
                            <link rel="canonical" href={`https://m7v.github.io/suggester/#/browse/${set.code}`} />
                            <meta name="twitter:title" content={`${set.name} | MTG Manager`} />
                            <meta property="og:site_name" content="MTG Manager" />
                            <meta property="og:type" content="site" />
                            <meta property="og:url" content="https://m7v.github.io/suggester" />
                            <meta name="twitter:card" content="summary_large_image" />
                            <meta name="twitter:site" content="@m7v.github.io/suggester" />
                            <meta name="twitter:creator" content="@mikhailovcom" />
                        </Helmet>
                );
            case 'card':
                return (
                    !isEmpty(card) &&
                        <Helmet>
                            <title>{`${card.name} | MTG Manager`}</title>
                            <link rel="canonical" href={`https://m7v.github.io/suggester/#/cards/${card.id}`} />
                            <meta name="twitter:image" content={card.imageUrlLarge} />
                            <meta name="twitter:title" content={`${card.name} | MTG Manager`} />
                            <meta name="twitter:description" content={card.text || card.flavor} />
                            <meta property="og:image" content={card.imageUrlLarge} />
                            <meta property="og:title" content={`${card.name} | MTG Manager`} />
                            <meta property="og:description" content={card.text || card.flavor} />
                            <meta property="og:site_name" content="MTG Manager" />
                            <meta property="og:type" content="site" />
                            <meta property="og:url" content="https://m7v.github.io/suggester" />
                            <meta name="twitter:card" content="summary_large_image" />
                            <meta name="twitter:site" content="@m7v.github.io/suggester" />
                            <meta name="twitter:creator" content="@mikhailovcom" />
                        </Helmet>
                );
            case 'search':
                return (
                    <Helmet>
                        <title>{'Search Card | MTG Manager'}</title>
                        <meta property="og:title" content={'Search Card | MTG Manager'} />
                        <meta property="og:site_name" content="MTG Manager" />
                        <meta property="og:type" content="site" />
                        <meta property="og:url" content="https://m7v.github.io/suggester" />
                        <meta name="twitter:title" content={'Search Card | MTG Manager'} />
                        <meta name="twitter:card" content="summary_large_image" />
                        <meta name="twitter:site" content="@m7v.github.io/suggester" />
                        <meta name="twitter:creator" content="@mikhailovcom" />
                    </Helmet>
                );
            default:
        }
        return (
            <Helmet>
                <title>{'MTG Manager'}</title>
                <meta property="og:title" content={'MTG Manager'} />
                <meta property="og:site_name" content="MTG Manager" />
                <meta property="og:type" content="site" />
                <meta property="og:url" content="https://m7v.github.io/suggester" />
                <meta name="twitter:title" content={'MTG Manager'} />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content="@m7v.github.io/suggester" />
                <meta name="twitter:creator" content="@mikhailovcom" />
            </Helmet>
        );
    }
}

MetaHelmet.propTypes = {
    type: string.isRequired,
    card: shape({}),
    set: shape({}),
};

MetaHelmet.defaultProps = {
    card: {},
    set: {},
};

export default MetaHelmet;
