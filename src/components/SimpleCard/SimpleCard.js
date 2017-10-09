import './SimpleCard.css';
import React from 'react';
import Img from 'react-image';
import LazyLoad from 'react-lazyload';
import { shape } from 'prop-types';
import DefaultCard from '../DefaultCard';

const SimpleCard = ({card}) => (
    <LazyLoad height={200} offset={100}>
        <Img
            className="SimpleCard__img"
            src={card.imageUrl}
            loader={<DefaultCard />}
            unloader={<DefaultCard />}
        />
    </LazyLoad>
);

SimpleCard.propTypes = {
    card: shape({}).isRequired
};

export default SimpleCard;
