import './CardGridList.css';
import React from 'react';
import { arrayOf, shape } from 'prop-types';
import {
    GridList,
    GridTile,
} from 'material-ui';
import SimpleCard from '../SimpleCard';

export default class CardGridList extends React.Component {

    render() {
        return (
            <section className="CardGridList__results">
                {!!this.props.cards.length &&
                    <GridList
                        cellHeight={310}
                        cellWidth={225}
                        cols={this.props.cards.length >= 4 ? 4 : this.props.cards.length}
                    >
                        {this.props.cards.map((card) => (
                            <GridTile key={card.id}>
                                <SimpleCard card={card} />
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

