import React from 'react';

export class DefaultCard extends React.PureComponent {

    render() {
        return (
            <img
                className="Cards__img _default"
                src={'img/default-card.png'}
                alt={'MTG'}
            />
        );
    }
}
