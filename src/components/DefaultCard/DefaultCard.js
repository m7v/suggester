import './DefaultCard.css';
import React from 'react';
import defaultCard from './assets/default-card.png';

const DefaultCard = () => (
    <img
        className="DefaultCard__img _default"
        src={defaultCard}
        alt={'MTG'}
    />
);

export default DefaultCard;
