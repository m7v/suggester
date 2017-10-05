import './CardSwipeList.css';
import React from 'react';
import SwipeableViews from 'react-swipeable-views';
import { bindKeyboard } from 'react-swipeable-views-utils';
import { arrayOf, shape, string } from 'prop-types';
import SimpleCard from '../SimpleCard/SimpleCard';

const Views = bindKeyboard(SwipeableViews);

export default class CardSwipeList extends React.Component {

    render() {
        return (
            <section>
                {!!this.props.cards.length &&
                <Views className="CardSwipeList__results">
                    {this.props.cards.map(card => (
                        <div key={card.id} className="CardSwipeList__result">
                            <SimpleCard imageUrl={card.imageUrl} />
                        </div>
                    ))}
                </Views>
                }
            </section>
        );
    }
}

CardSwipeList.propTypes = {
    cards: arrayOf(shape({
        id: string,
        imageUrl: string,
    }))
};

CardSwipeList.defaultProps = {
    cards: []
};
