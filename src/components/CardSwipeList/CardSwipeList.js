import './CardSwipeList.css';
import React from 'react';
import SwipeableViews from 'react-swipeable-views';
import { virtualize } from 'react-swipeable-views-utils';
import { arrayOf, shape } from 'prop-types';
import SimpleCard from '../../components/SimpleCard';

const Views = virtualize(SwipeableViews);

export default class CardSwipeList extends React.PureComponent {

    cardRenderer = ({ key }) => {
        let index;
        if (key < 0) {
            const newKey = key * (-1);
            const multiplier = Math.ceil(newKey / this.props.cards.length);
            index = multiplier * this.props.cards.length - newKey;
        } else {
            const orderKey = key;
            const multiplier = Math.floor(orderKey / this.props.cards.length);
            index = orderKey - multiplier * this.props.cards.length;
        }
        const card = this.props.cards[index];

        return (
            <div key={key} className="CardSwipeList__result">
                <SimpleCard card={card} needForceCheck />
            </div>
        );
    };

    render() {
        return (
            <section>
                {!!this.props.cards.length &&
                    <Views
                        overscanSlideBefore={2}
                        overscanSlideAfter={2}
                        className="CardSwipeList__results"
                        slideRenderer={this.cardRenderer}
                    />
                }
            </section>
        );
    }
}

CardSwipeList.propTypes = {
    cards: arrayOf(shape({}))
};

CardSwipeList.defaultProps = {
    cards: []
};
