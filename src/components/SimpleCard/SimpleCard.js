import './SimpleCard.css';
import React from 'react';
import Img from 'react-image';
import LazyLoad, { forceCheck } from 'react-lazyload';
import { shape, bool } from 'prop-types';
import DefaultCard from '../DefaultCard';

class SimpleCard extends React.PureComponent {

    componentDidUpdate() {
        if (this.props.needForceCheck) {
            forceCheck();
        }
    }

    render() {
        const { card, oversize } = this.props;
        const imageUrl = oversize ? card.imageUrlLarge : card.imageUrl;

        return (
            <div className="SimpleCard__root">
                <LazyLoad height={200} offset={0} overflow>
                    <Img
                        className="SimpleCard__img"
                        src={imageUrl}
                        loader={<DefaultCard oversize={oversize} />}
                        unloader={<DefaultCard oversize={oversize} />}
                    />
                </LazyLoad>
            </div>
        );
    }
}

SimpleCard.propTypes = {
    needForceCheck: bool,
    oversize: bool,
    card: shape({}).isRequired,
};

SimpleCard.defaultProps = {
    needForceCheck: false,
    oversize: false,
};

export default SimpleCard;
