import './NewsList.css';
import 'keyrune/css/keyrune.min.css';
import React from 'react';
import { connect } from 'react-redux';
import Img from 'react-image';
import { bool, arrayOf, shape, func } from 'prop-types';
import map from 'lodash/map';
import Loader from '../../components/Loader';
import MetaHelmet from '../../components/MetaHelmet';
import stateToProps from './connect/stateToProps';
import dispatchToProps from './connect/dispatchToProps';
import ErrorPage from '../../components/ErrorPage/ErrorPage';

class NewsList extends React.PureComponent {

    state = {
        blocks: {}
    };

    componentWillMount() {
        this.props.getNewsList();
    }

    openBlock = (title) => {
        this.setState({
            blocks: {
                ...this.state.blocks,
                [title]: !this.state.blocks[title]
            }
        });
    };

    renderNews = () => map(this.props.news, (oneNews, index) => (
        <div key={index} className="NewsList__block">
            <div className="NewsList__setNameWrapper">
                <div className="NewsList__blockTitle">
                    {oneNews.title}
                </div>
                <Img
                    className="NewsList__blockImage"
                    src={oneNews.image}
                />
                <div className="NewsList__blockDescription">
                    {oneNews.text}
                </div>
            </div>
        </div>
    ));

    render() {
        const { loading, error } = this.props;

        return (
            <section className="NewsList">
                <MetaHelmet type={'news'} />
                <div className="NewsList__main">
                    {loading &&
                        <div className="NewsList__preloader">
                            <div className="NewsList__circular">
                                <Loader />
                            </div>
                        </div>
                    }
                    {!loading && error &&
                        <ErrorPage />
                    }
                    {!loading && !error &&
                        <div className="NewsList__setList">
                            { this.renderNews() }
                        </div>
                    }
                </div>
            </section>
        );
    }
}

NewsList.propTypes = {
    loading: bool,
    error: bool,
    news: arrayOf(shape({})),
    getNewsList: func.isRequired,
};

NewsList.defaultProps = {
    isMobile: false,
    loading: false,
    error: false,
    news: [],
};

export default connect(stateToProps, dispatchToProps)(NewsList);
