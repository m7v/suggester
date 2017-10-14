import './CardGridList.css';
import React from 'react';
import { Link } from 'react-router-dom';
import { arrayOf, shape } from 'prop-types';
import DoubleFacedCard from '../../components/DoubleFacedCard';
import SimpleCard from '../../components/SimpleCard';

const COUNT_RERENDER_CARDS = 12;
const DOUBLE_FACED_TYPE = 'double-faced';

class CardGridList extends React.PureComponent {

    render() {
        return (
            <section className="CardGridList__results" >
                {!!this.props.cards.length && this.props.cards.map((card, index) => (
                    <div key={card.id} className="CardGridList__result">
                        <Link className="CardGridList__resultName" to={`/cards/${card.id}`}>{card.name}</Link>
                        {card.layout && card.layout !== DOUBLE_FACED_TYPE &&
                            <SimpleCard card={card} needForceCheck={index <= COUNT_RERENDER_CARDS} />
                        }
                        {card.layout && card.layout === DOUBLE_FACED_TYPE &&
                            <DoubleFacedCard card={card} needForceCheck={index <= COUNT_RERENDER_CARDS} />
                        }
                        {!card.layout &&
                            <SimpleCard card={card} needForceCheck={index <= COUNT_RERENDER_CARDS} />
                        }
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
