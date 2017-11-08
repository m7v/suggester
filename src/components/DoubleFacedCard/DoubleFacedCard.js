import './DoubleFacedCard.css';
import React from 'react';
import Img from 'react-image';
import FlipCard from 'react-flipcard';
import classNames from 'classnames';
import debounce from 'lodash/debounce';
import LazyLoad, { forceCheck } from 'react-lazyload';
import { shape, bool } from 'prop-types';
import DefaultCard from '../../components/DefaultCard';

class DoubleFacedCard extends React.PureComponent {

    state = {
        isFlipped: false
    };

    componentDidMount() {
        if (this.props.needForceCheck) {
            forceCheck();
        }
    }

    showBack = debounce(() => this.setState({ isFlipped: true }), 150);

    showFront = debounce(() => this.setState({ isFlipped: false }), 150);

    render() {
        const { card, oversize } = this.props;
        const imageUrl = oversize ? card.imageUrlLarge : card.imageUrl;
        const imageUrlFromBackSide = oversize ? card.doubleFace.imageUrlLarge : card.doubleFace.imageUrl;

        return (
            <div
                className={classNames({
                    'DoubleFacedCard__root': true,
                    '_default': !oversize,
                    '_oversize': oversize
                })}
            >
                <LazyLoad height={200} offset={0} overflow>
                    <FlipCard disabled flipped={this.state.isFlipped}>
                        <div onClick={this.showBack}>
                            <Img
                                className={classNames({
                                    'DoubleFacedCard__img': true,
                                    '_default': !oversize,
                                    '_oversize': oversize
                                })}
                                src={imageUrl}
                                loader={<DefaultCard oversize={oversize} />}
                                unloader={<DefaultCard oversize={oversize} />}
                            />
                        </div>
                        <div onClick={this.showFront}>
                            <Img
                                className={classNames({
                                    'DoubleFacedCard__img': true,
                                    '_default': !oversize,
                                    '_oversize': oversize
                                })}
                                src={imageUrlFromBackSide}
                                loader={<DefaultCard oversize={oversize} />}
                                unloader={<DefaultCard oversize={oversize} />}
                            />
                        </div>
                    </FlipCard>
                </LazyLoad>
            </div>
        );
    }
}

DoubleFacedCard.propTypes = {
    card: shape({}).isRequired,
    needForceCheck: bool,
    oversize: bool,
};

DoubleFacedCard.defaultProps = {
    needForceCheck: false,
    oversize: false,
};

export default DoubleFacedCard;
