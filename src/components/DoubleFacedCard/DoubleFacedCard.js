import './DoubleFacedCard.css';
import React from 'react';
import Img from 'react-image';
import FlipCard from '../../components/FlipCard';
import classNames from 'classnames';
import debounce from 'lodash/debounce';
import { shape, bool } from 'prop-types';
import DefaultCard from '../../components/DefaultCard';

class DoubleFacedCard extends React.PureComponent {

    state = {
        isFlipped: false
    };

    showBack = debounce(() => this.setState({ isFlipped: true }), 150);

    showFront = debounce(() => this.setState({ isFlipped: false }), 150);

    render() {
        const { card, oversize, foil } = this.props;
        const imageUrl = oversize ? card.imageUrlLarge : card.imageUrl;
        const imageUrlFromBackSide = oversize ? card.doubleFace.imageUrlLarge : card.doubleFace.imageUrl;
        const cardClass = classNames({
            'DoubleFacedCard__img': true,
            '_default': !oversize,
            '_oversize': oversize,
            '_foil': foil
        });
        return (
            <div
                className={classNames({
                    'DoubleFacedCard__root': true,
                    '_default': !oversize,
                    '_oversize': oversize
                })}
            >
                <FlipCard isFlipped={this.state.isFlipped}>
                    <div onClick={this.showBack}>
                        <Img
                            className={cardClass}
                            src={imageUrl}
                            loader={<DefaultCard oversize={oversize} />}
                            unloader={<DefaultCard oversize={oversize} />}
                        />
                    </div>
                    <div onClick={this.showFront}>
                        <Img
                            className={cardClass}
                            src={imageUrlFromBackSide}
                            loader={<DefaultCard oversize={oversize} />}
                            unloader={<DefaultCard oversize={oversize} />}
                        />
                    </div>
                </FlipCard>
            </div>
        );
    }
}

DoubleFacedCard.propTypes = {
    foil: bool,
    oversize: bool,
    card: shape({}).isRequired,
};

DoubleFacedCard.defaultProps = {
    foil: false,
    oversize: false,
};

export default DoubleFacedCard;
