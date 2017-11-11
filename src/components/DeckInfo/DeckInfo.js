import './DeckInfo.css';
import React from 'react';
import { shape } from 'prop-types';
import {
    Line as LineChart,
    Bar as BarChart,
} from 'react-chartjs';
import map from 'lodash/map';
import sum from 'lodash/sum';
import { chartOptions } from './config';

const manaMap = {
    white: 'w',
    red: 'r',
    black: 'b',
    green: 'g',
    blue: 'u',
};

class DeckInfo extends React.PureComponent {

    render() {
        const { deck } = this.props;
        const pureCardCount = sum(Object.values(deck.analytics.colorComposition));

        const curve = Object.values(deck.analytics.manaCurve);
        const labels = Object.keys(deck.analytics.manaCurve);
        const deckCompositionLabels = Object.keys(deck.analytics.deckComposition);
        const composition = Object.values(deck.analytics.deckComposition);
        const rarityLabels = [
            'basic land',
            'common',
            'uncommon',
            'rare',
            'mythic rare'
        ];
        const rarity = rarityLabels.map(label => deck.analytics.cardRarity[label]);
        labels.shift();
        curve.shift();

        const manaCurve = {
            labels,
            datasets: [{data: curve}]
        };

        const cardRarity = {
            labels: rarityLabels,
            datasets: [{data: rarity}]
        };

        const deckComposition = {
            labels: deckCompositionLabels,
            datasets: [{data: composition}]
        };

        return (
            <div className="DeckInfo__deckCard">
                <div className="DeckInfo__deckHead">
                    <div className="DeckInfo__cardManaPool">
                        <ul className="DeckInfo__cardMana">
                            {map(deck.analytics.colorComposition, (count, mana) => {
                                const manaClass = `mana ms ms-${manaMap[mana]}`;
                                return <i key={mana} className={manaClass} />;
                            })}
                        </ul>
                    </div>
                    <div className="DeckInfo__title">{deck.name}</div>
                </div>
                <div className="DeckInfo__avatar">
                    <div className="DeckInfo__cardHeadlinerWrapper">
                        <div
                            className="DeckInfo__cardHeadliner"
                            style={{ backgroundImage: `url(${deck.headliner})` }}
                        />
                    </div>
                    <div className="DeckInfo__description" />
                </div>
                <div className="DeckInfo__manaBar">
                    {map(deck.analytics.colorComposition, (count, mana) => {
                        const manaClass = `ms ms-${manaMap[mana]}`;
                        return (
                            <div
                                key={mana}
                                className={`DeckInfo__mana DeckInfo__mana-${manaMap[mana]}`}
                                style={{ width: `${(count / pureCardCount) * 100}%` }}
                            >
                                <i key={mana} className={manaClass} />
                            </div>
                        );
                    })}
                </div>
                <div className="DeckInfo__legality">
                    {map(deck.legality, (item) => (
                        <div key={item.format} className="DeckInfo__legalityName">
                            <span>{item.format}</span><span>{item.legality}</span>
                        </div>
                    ))}
                </div>
                <div className="DeckInfo__composition">
                    {map(deck.analytics.deckComposition, (count, type) => {
                        const className = `type type-${type} ms ms-${type}`;
                        return (
                            <span key={type} className="DeckInfo__compositionWrapper">
                                <div className={className} />
                                <span className="DeckInfo__cardManaNumber">{count}</span>
                            </span>
                        );
                    })}
                </div>
                <div className="DeckInfo__stat">
                    <BarChart
                        data={deckComposition}
                        options={chartOptions}
                    />
                    <LineChart
                        data={manaCurve}
                        options={chartOptions}
                    />
                    <BarChart
                        data={cardRarity}
                        options={chartOptions}
                    />
                </div>
            </div>
        );
    }
}

DeckInfo.propTypes = {
    deck: shape({}).isRequired,
};

export default DeckInfo;
