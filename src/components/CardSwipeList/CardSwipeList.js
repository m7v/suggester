import './CardSwipeList.css';
import React from 'react';
import SwipeableViews from 'react-swipeable-views';
import { virtualize } from 'react-swipeable-views-utils';
import { arrayOf, shape } from 'prop-types';
import SimpleCard from '../SimpleCard/SimpleCard';

const Views = virtualize(SwipeableViews);

export default class CardSwipeList extends React.Component {

    cardRenderer = ({ key }) => {
        let index;
        if (key < 0) {
            index = this.props.cards.length + key;
        } else {
            if (this.props.cards.length - 1 >= key) {
                index = key;
            } else {
                index = key - this.props.cards.length;
            }
        }
        const card = this.props.cards[index];

        return (
            <div key={card.id} className="CardSwipeList__result">
                <SimpleCard imageUrl={card.imageUrl} />
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
