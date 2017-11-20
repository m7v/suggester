import './SimpleCard.css';
import React from 'react';
import classNames from 'classnames';
import { shape, bool } from 'prop-types';
import LazyLoad, { forceCheck } from 'react-lazyload';
import Img from 'react-image';
import DefaultCard from '../../components/DefaultCard';

class SimpleCard extends React.PureComponent {

    componentDidUpdate() {
        if (this.props.needForceCheck) {
            forceCheck();
        }
    }

    render() {
        const { card, oversize, foil } = this.props;
        const imageUrl = oversize ? card.imageUrlLarge : card.imageUrl;

        return (
            <div className="SimpleCard__root">
                <LazyLoad height={200} offset={0} overflow>
                    <Img
                        className={classNames({
                            'SimpleCard__img': true,
                            '_default': !oversize,
                            '_oversize': oversize,
                            '_foil': foil
                        })}
                        src={imageUrl}
                        loader={<DefaultCard oversize={oversize} />}
                        unloader={<SimpleCard card={card} needForceCheck={this.props.needForceCheck} foil={foil} />}
                    />
                </LazyLoad>
            </div>
        );
    }
}

SimpleCard.propTypes = {
    needForceCheck: bool,
    oversize: bool,
    foil: bool,
    card: shape({}).isRequired,
};

SimpleCard.defaultProps = {
    needForceCheck: false,
    oversize: false,
    foil: false,
};

export default SimpleCard;
