import './CardGridList.css';
import React from 'react';
import Link from 'react-router-dom/Link';
import { arrayOf, shape } from 'prop-types';
import SimpleCard from '../../components/SimpleCard';

const COUNT_RERENDER_CARDS = 12;

class CardGridList extends React.PureComponent {

    getCardLink = (card, index) => {
        if (card.rarity === 'Basic Land') {
            return (
                <div className="CardGridList__resultName _basicLand">
                    {card.name}
                    <SimpleCard card={card} needForceCheck={index <= COUNT_RERENDER_CARDS} />
                </div>
            );
        }
        return (
            <Link className="CardGridList__resultName" to={`/cards/${card.id}`}>
                {card.name}
                <SimpleCard card={card} needForceCheck={index <= COUNT_RERENDER_CARDS} />
            </Link>
        );
    };

    render() {
        return (
            <section className="CardGridList__results" >
                {!!this.props.cards.length && this.props.cards.map((card, index) => (
                    <div key={card.id} className="CardGridList__result">
                        { this.getCardLink(card, index) }
                    </div>
                ))}
            </section>
        );
    }
}

CardGridList.propTypes = {
    cards: arrayOf(shape({}))
};

CardGridList.defaultProps = {
    cards: []
};

export default CardGridList;
