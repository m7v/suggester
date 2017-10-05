import './CardGridList.css';
import React from 'react';
import { arrayOf, shape } from 'prop-types';
import {
    GridList,
    GridTile,
} from 'material-ui';
import SimpleCard from '../SimpleCard/SimpleCard';

export default class CardGridList extends React.Component {

    render() {
        return (
            <section className="CardGridList__results">
                {!!this.props.cards.length &&
                    <GridList
                        cellHeight={310}
                        cellWidth={225}
                        cols={4}
                    >
                        {this.props.cards.map((card) => (
                            <GridTile key={card.imageUrl}>
                                <SimpleCard imageUrl={card.imageUrl} />
                            </GridTile>
                        ))}
                    </GridList>
                }
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

