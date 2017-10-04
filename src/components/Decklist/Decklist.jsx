import React, {Component} from 'react';
import { map } from 'lodash';
import { object, string, func } from 'prop-types';

class Decklist extends Component {

    render() {
        const { deck, selectedCardId, handleShowCard } = this.props;

        return (
            <section style={{ display: 'flex' }}>
                <ul style={{ height: '400px', overflowY: 'scroll' }}>
                    {deck && map(deck.cards, card => (
                        <li
                            key={card.id}
                            style={{
                                width: '170px',
                                height: '20px',
                            }}
                            onMouseOver={() => handleShowCard(card)}
                        >
                            {card.name}
                        </li>
                    ))}
                </ul>
                <div>
                    {map(deck.cards, card =>
                        (<img
                            key={card.id}
                            src={card.imageUrl}
                            style={{
                                display: selectedCardId === card.id ? 'block' : 'none',
                            }}
                            alt="mtg"
                        />),
                    )}
                </div>
            </section>
        );
    }
}

Decklist.propTypes = {
    deck: object.isRequired,
    selectedCardId: string.isRequired,
    handleShowCard: func.isRequired,
};

export default Decklist;
