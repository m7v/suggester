import './CardSets.css';
import 'keyrune/css/keyrune.min.css';
import React from 'react';
import { connect } from 'react-redux';
import Link from 'react-router-dom/Link';
import { bool, shape, func } from 'prop-types';
import map from 'lodash/map';
import classNames from 'classnames';
import Loader from '../../components/Loader';
import MetaHelmet from '../../components/MetaHelmet';
import stateToProps from './connect/stateToProps';
import dispatchToProps from './connect/dispatchToProps';
import IconSet from '../../components/IconSet/IconSet';
import ErrorPage from '../../components/ErrorPage/ErrorPage';

class CardSets extends React.PureComponent {

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
                    <Link key={set.code} className="CardSets__set" to={`/browse/${set.code.toLowerCase()}`}>
                        <div className="CardSets__IconWrapper">
                            <IconSet set={set.code} isSet />
                        </div>
                        <div className="CardSets__setNameWrapper">
                            <div className="CardSets__setName">
                                {set.name}
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    ));

    render() {
        const { loading, error } = this.props;

        return (
            <section className="CardSets">
                <MetaHelmet type={'sets'} />
                <div className="CardSets__main">
                    {loading &&
                        <div className="CardSets__preloader">
                            <div className="CardSets__circular">
                                <Loader />
                            </div>
                        </div>
                    }
                    {!loading && error &&
                        <ErrorPage />
                    }
                    {!loading && !error &&
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
    error: bool,
    sets: shape({}),
    getSetList: func.isRequired,
};

CardSets.defaultProps = {
    isMobile: false,
    loading: false,
    error: false,
    sets: [],
};

export default connect(stateToProps, dispatchToProps)(CardSets);
