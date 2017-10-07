import './Cards.css';
import React from 'react';
import { connect } from 'react-redux';
import { bool, func, shape, arrayOf } from 'prop-types';
import CardSwipeList from '../../components/CardSwipeList';
import CardGridList from '../../components/CardGridList';
import { stateToProps } from './connect/stateToProps';
import { dispatchToProps } from './connect/dispatchToProps';
import { CircularProgress } from 'material-ui';

class Cards extends React.Component {

    componentWillMount() {
        this.props.getCardList();
    }

    render() {
        return (
            <section className="Cards">
                <div className="Cards__main">
                    {!this.props.loading && this.props.isMobile &&
                    <div className="Cards__swipe">
                        <CardSwipeList cards={this.props.cards} />
                    </div>
                    }
                    {!this.props.loading && !this.props.isMobile &&
                    <CardGridList cards={this.props.cards} />
                    }
                    {this.props.loading &&
                    <div className="Cards__preloader">
                        <div className="Cardsr__circular">
                            <CircularProgress size={120} thickness={8} color="#fff"/>
                        </div>
                    </div>
                    }
                </div>
            </section>
        );
    }
}

Cards.propTypes = {
    cards: arrayOf(shape({})),
    isMobile: bool,
    loading: bool,
    getCardList: func.isRequired,
};

Cards.defaultProps = {
    isMobile: false,
    cards: [],
    loading: false
};

export default connect(stateToProps, dispatchToProps)(Cards);
