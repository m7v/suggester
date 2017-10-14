import './SimpleCard.css';
import React from 'react';
import Img from 'react-image';
import LazyLoad, { forceCheck } from 'react-lazyload';
import { shape, bool } from 'prop-types';
import DefaultCard from '../DefaultCard';

class SimpleCard extends React.Component {

    componentDidUpdate() {
        if (this.props.needForceCheck) {
            forceCheck();
        }
    }

    render() {
        const { card } = this.props;

        return (
            <div className="SimpleCard__root">
                <LazyLoad height={200} offset={0} overflow>
                    <Img
                        className="SimpleCard__img"
                        src={card.imageUrl}
                        loader={<DefaultCard />}
                        unloader={<DefaultCard />}
                    />
                </LazyLoad>
            </div>
        );
    }
}

SimpleCard.propTypes = {
    needForceCheck: bool,
    card: shape({}).isRequired,
};

SimpleCard.defaultProps = {
    needForceCheck: false,
};

export default SimpleCard;
