import React from 'react';
import EasterEgg from 'react-easter';
import { oneOfType, element, array } from 'prop-types';
import konamiCode from './config';

class Easter extends React.Component {
    render() {
        return (
            <EasterEgg keys={konamiCode} timeout={5000}>
                <div className="EasterContainer">
                    {this.props.children}
                </div>
            </EasterEgg>
        );
    }
}

Easter.propTypes = {
    children: oneOfType([ array, element ]).isRequired,
};

export default Easter;
