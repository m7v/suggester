import './CardSets.css';
import 'keyrune/css/keyrune.min.css';
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { bool, shape, func } from 'prop-types';
import classNames from 'classnames';
import Loader from '../../components/Loader';
import map from 'lodash/map';
import stateToProps from './connect/stateToProps';
import dispatchToProps from './connect/dispatchToProps';

class CardSets extends React.Component {

    state = {
        blocks: {}
    };

    componentWillMount() {
        this.props.getSetList();
    }

    openBlock = (title) => {
        this.setState({
            blocks: {
                ...this.state.blocks,
                [title]: !this.state.blocks[title]
            }
        });
    };

    renderSets = () => map(this.props.sets, (arrOfSets, title) => (
        <div key={title} className="CardSets__block">
            <div
                className="CardSets__blockTitle"
                onClick={() => this.openBlock(title)}
            >
                {title.toUpperCase()}
            </div>
            <div className={classNames({ 'CardSets__sets': true, '_open': this.state.blocks[title] })}>
                {map(arrOfSets, set => (
                    <div key={set.id} className="CardSets__set">
                        <div className="CardSets__IconWrapper">
                            <i className={`CardSets__Icon ss ss-3x ss-${set.code.toLowerCase()}`} />
                        </div>
                        <div className="CardSets__setNameWrapper">
                            <Link className="CardSets__setName" to={`/browse/${set.code.toLowerCase()}`}>
                                {set.name}
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    ));

    render() {
        const { loading } = this.props;

        return (
            <section className="CardSets">
                <div className="CardSets__main">
                    {loading &&
                        <div className="CardSets__preloader">
                            <div className="CardSets__circular">
                                <Loader />
                            </div>
                        </div>
                    }
                    {!loading &&
                        <div className="CardSets__setList">
                            { this.renderSets() }
                        </div>
                    }
                </div>
            </section>
        );
    }
}

CardSets.propTypes = {
    loading: bool,
    sets: shape({}),
    getSetList: func.isRequired,
};

CardSets.defaultProps = {
    isMobile: false,
    loading: false,
    sets: [],
};

export default connect(stateToProps, dispatchToProps)(CardSets);
