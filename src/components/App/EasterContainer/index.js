import React, {Component} from 'react';
import EasterEgg from 'react-easter';

class EasterContainer extends Component {
    konamiCode = [
        'arrowleft',
        'arrowleft',
        'arrowright',
        'arrowright',
        'enter',
    ];

    render() {
        return (
            <EasterEgg keys={this.konamiCode}>
                <div className="EasterContainer">
                    {this.props.children}
                </div>
            </EasterEgg>
        );
    }
}

export default EasterContainer;
