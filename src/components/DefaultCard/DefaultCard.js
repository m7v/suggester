import './DefaultCard.css';
import React from 'react';

export class DefaultCard extends React.PureComponent {

    render() {
        return (
            <img
                className="DefaultCard__img _default"
                src={'/img/default-card.png'}
                alt={'MTG'}
            />
        );
    }
}
