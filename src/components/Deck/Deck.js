import './Deck.css';
import 'mana-font/css/mana.min.css';
import React from 'react';
import { Link } from 'react-router-dom';
import { shape } from 'prop-types';
import { Bar as BarChart } from 'react-chartjs';
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

class Deck extends React.Component {

    render() {
        const { deck } = this.props;
        const pureCardCount = sum(Object.values(deck.analytics.colorComposition));

        const curve = Object.values(deck.analytics.manaCurve);
        const labels = Object.keys(deck.analytics.manaCurve);
        labels.shift();
        curve.shift();

        const manaCurve = {
            labels,
            datasets: [{data: curve}]
        };

        return (
            <div className="Deck__deckCard">
                <div className="Deck__deckHead">
                    <div className="Deck__cardManaPool">
                        <ul className="Deck__cardMana">
                            {map(deck.analytics.colorComposition, (count, mana) => {
                                const manaClass = `mana ms ms-${manaMap[mana]}`;
                                return <i key={mana} className={manaClass} />;
                            })}
                        </ul>
                    </div>
                    <Link to={`/deck/${deck.id}`} replace className="Deck_link">
                        <div className="Deck__title" >
                            {deck.name}
                        </div>
                    </Link>
                </div>
                <div className="Deck__avatar">
                    <div className="Deck__cardHeadlinerTop" />
                    <Link to={`/deck/${deck.id}`} replace >
                        <div className="Deck__cardHeadlinerWrapper">
                            <div
                                className="Deck__cardHeadliner"
                                style={{ backgroundImage: `url(${deck.headliner})` }}
                            />
                        </div>
                    </Link>
                    <div className="Deck__cardHeadlinerBottom" />
                </div>
                <div className="Deck__manaBar">
                    {map(deck.analytics.colorComposition, (count, mana) => {
                        const manaClass = `ms ms-${manaMap[mana]}`;
                        return (
                            <div
                                key={mana}
                                className={`Deck__mana mana-${manaMap[mana]}`}
                                style={{
                                    width: `${Math.floor((count / pureCardCount) * 100)}%`,
                                }}
                            >
                                <i key={mana} className={manaClass} />
                            </div>);
                    })}
                </div>
                <div className="stat">
                    <BarChart
                        data={manaCurve}
                        options={chartOptions}
                        width="600"
                        height="250"
                    />
                </div>
                <div className="Deck__composition">
                    {map(deck.analytics.deckComposition, (count, type) => {
                        const className = `type type-${type} ms ms-${type}`;
                        return (
                            <span key={type} className="Deck__compositionWrapper">
                                <div className={className} />
                                <span className="Deck__cardManaNumber">{count}</span>
                            </span>
                        );
                    })}
                </div>
            </div>
        );
    }
}

Deck.propTypes = {
    deck: shape({}).isRequired
};

export default Deck;
