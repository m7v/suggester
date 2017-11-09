import React from 'react';
import { shape, bool } from 'prop-types';
import { DOUBLE_FACED_TYPE } from '../../core/helpers/mtgCard.helper';
import SimpleCard from '../../components/SimpleCard/SimpleCard';
import DoubleFacedCard from '../../components/DoubleFacedCard/DoubleFacedCard';

class Card extends React.PureComponent {

    render() {
        const { card, needForceCheck, oversize } = this.props;

        return (
            <div>
                {card.layout && card.layout !== DOUBLE_FACED_TYPE &&
                    <SimpleCard card={card} oversize={oversize} needForceCheck={needForceCheck} />
                }
                {card.layout && card.layout === DOUBLE_FACED_TYPE &&
                    <DoubleFacedCard card={card} oversize={oversize} needForceCheck={needForceCheck} />
                }
                {!card.layout &&
                    <SimpleCard card={card} oversize={oversize} needForceCheck={needForceCheck} />
                }
            </div>
        );
    }
}

Card.propTypes = {
    needForceCheck: bool,
    oversize: bool,
    card: shape({}).isRequired,
};

Card.defaultProps = {
    needForceCheck: false,
    oversize: false,
};

export default Card;
