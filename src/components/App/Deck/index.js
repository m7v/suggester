import './styles.css';
import 'mana-font/css/mana.min.css';
import {map, sum} from 'lodash';
import React, {Component} from 'react';
import {object, func} from 'prop-types';
import {
    Card,
} from 'material-ui';

const manaMap = {
    white: 'w',
    red: 'r',
    black: 'b',
    green: 'g',
    blue: 'u',
};

class Deck extends Component {

    render() {
        const {deck, removeDeck} = this.props;
        const pureCardCount = sum(Object.values(deck.analytics.colorComposition));

        return (
            <Card className="Deck__deckCard">
                <div className="Deck__deckHead">
                    <div
                        className="Deck__cardHeadliner"
                        style={{ backgroundImage: `url(${deck.headliner})` }}
                        onClick={() => removeDeck(deck.id)}
                    />
                    <div className="Deck__cardManaPool">
                        <ul className="Deck__cardMana">
                            {map(deck.analytics.colorComposition, (count, mana) => {
                                const manaClass = `mana mana-${manaMap[mana]} ms ms-${manaMap[mana]}`;
                                return <i key={mana} className={manaClass} />;
                            })}
                        </ul>
                    </div>
                    <div className="Deck__title">
                        {deck.name}
                    </div>
                </div>
                <div className="Deck__manaBar">
                    {map(deck.analytics.colorComposition, (count, mana) =>
                        (<div
                            key={mana}
                            className={`Deck__mana mana-${manaMap[mana]}`}
                            style={{
                                width: `${(count / pureCardCount) * 100}%`,
                            }}
                        />),
                    )}
                </div>
                <div className="Deck__composition">
                    <div className="Deck__cardMana">
                        {map(deck.analytics.deckComposition, (count, type) => {
                            const className = `type type-${type} ms ms-${type}`;
                            return (
                                <span key={type} className="Deck__manaWrapper">
                                    <div className={className} />
                                    <span className="Deck__cardManaNumber">{count}</span>
                                </span>
                            );
                        })}
                    </div>
                </div>
            </Card>
        );
    }
}

Deck.propTypes = {
    deck: object.isRequired,
    removeDeck: func.isRequired
};

export default Deck;
