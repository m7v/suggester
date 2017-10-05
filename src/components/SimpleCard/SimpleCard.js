import './SimpleCard.css';
import React from 'react';
import Img from 'react-image';
import LazyLoad from 'react-lazyload';
import { string } from 'prop-types';
import { DefaultCard } from '../DefaultCard/DefaultCard';

export default class SimpleCard extends React.Component {

    render() {
        return (
            <LazyLoad height={200} offset={100}>
                <Img
                    className="CardSwipeList__img"
                    src={this.props.imageUrl}
                    loader={<DefaultCard />}
                    unloader={<DefaultCard />}
                />
            </LazyLoad>

        );
    }
}

SimpleCard.propTypes = {
    imageUrl: string.isRequired
};
