import './DefaultCard.css';
import React from 'react';
import { bool } from 'prop-types';
import classNames from 'classnames';
import defaultCard from './assets/default-card.png';
import oversizeDefaultCard from './assets/oversize-default-card.jpeg';

const DefaultCard = (props) => (
    <img
        className={classNames({
            'DefaultCard__img': true,
            '_default': !props.oversize,
            '_oversize': props.oversize
        })}
        src={props.oversize ? oversizeDefaultCard : defaultCard}
        alt={'MTG'}
    />
);

DefaultCard.propTypes = {
    oversize: bool,
};

DefaultCard.defaultProps = {
    oversize: false,
};

export default DefaultCard;
