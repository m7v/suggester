import './DoubleFacedCard.css';
import React from 'react';
import Img from 'react-image';
import FlipCard from 'react-flipcard';
import LazyLoad, { forceCheck } from 'react-lazyload';
import { shape, bool } from 'prop-types';
import DefaultCard from '../DefaultCard';

class DoubleFacedCard extends React.Component {

    state = {
        isFlipped: false
    };

    componentDidMount() {
        if (this.props.needForceCheck) {
            forceCheck();
        }
    }

    showBack = () => {
        this.setState({
            isFlipped: true
        });
    };

    showFront = () => {
        this.setState({
            isFlipped: false
        });
    };

    render() {
        const { card } = this.props;

        return (
            <div className="DoubleFacedCard__root">
                <LazyLoad height={200} offset={100}>
                    <FlipCard disabled flipped={this.state.isFlipped}>
                        <div onClick={this.showBack}>
                            <Img
                                className="DoubleFacedCard__img"
                                src={card.imageUrl}
                                loader={<DefaultCard />}
                                unloader={<DefaultCard />}
                            />
                        </div>
                        <div onClick={this.showFront}>
                            <Img
                                className="DoubleFacedCard__img"
                                src={card.doubleFace.imageUrl}
                                loader={<DefaultCard />}
                                unloader={<DefaultCard />}
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
};

DoubleFacedCard.defaultProps = {
    needForceCheck: false,
};

export default DoubleFacedCard;
