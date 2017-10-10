import './CardInfo.css';
import React from 'react';
import { connect } from 'react-redux';
import { bool, string, func, shape } from 'prop-types';
import { dispatchToProps } from './connect/dispatchToProps';
import { stateToProps } from './connect/stateToProps';
import SimpleCard from '../../components/SimpleCard/SimpleCard';

class CardInfo extends React.Component {

    componentWillMount() {
        if (this.props.cardId) {
            this.props.getCardById(this.props.cardId);
        }
    }

    render() {
        return (
            <div className="CardInfo__root">
                <div className="CardInfo__card">
                    <SimpleCard card={this.props.card} />
                </div>
            </div>
        );
    }
}

CardInfo.propTypes = {
    cardId: string.isRequired,
    card: shape({}).isRequired,
    getCardById: func.isRequired,
    isMobile: bool,
    loading: bool,
};

CardInfo.defaultProps = {
    isMobile: false,
    loading: false
};

export default connect(stateToProps, dispatchToProps)(CardInfo);
