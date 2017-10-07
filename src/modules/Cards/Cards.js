import './Cards.css';
import React from 'react';
import { connect } from 'react-redux';
import { bool, func, shape, arrayOf } from 'prop-types';
import CardSwipeList from '../../components/CardSwipeList';
import CardGridList from '../../components/CardGridList';
import { stateToProps } from './connect/stateToProps';
import { dispatchToProps } from './connect/dispatchToProps';
import NavBar from '../../components/NavBar/NavBar';

class Cards extends React.Component {

    componentWillMount() {
        this.props.getCardList();
    }

    render() {
        return (
            <section className="Cards">
                <div className="Cards__main">
                    {this.props.isMobile &&
                    <CardSwipeList cards={this.props.cards} />
                    }
                    {!this.props.isMobile &&
                    <CardGridList cards={this.props.cards} />
                    }
                </div>
                <NavBar />
            </section>
        );
    }
}

Cards.propTypes = {
    cards: arrayOf(shape({})),
    isMobile: bool,
    getCardList: func.isRequired
};

Cards.defaultProps = {
    isMobile: false,
    cards: [],
};

export default connect(stateToProps, dispatchToProps)(Cards);
