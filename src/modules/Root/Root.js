import './Root.css';
import 'mana-font/css/mana.min.css';
import 'keyrune/css/keyrune.min.css';
import React from 'react';
import { connect } from 'react-redux';
import { bool, func } from 'prop-types';
import Router from 'react-router-dom/BrowserRouter';
import Route from 'react-router-dom/Route';
import Switch from 'react-router-dom/Switch';
import Async from '../../components/Async';
import { mapStateToProps } from './connect/stateToProps';
import { dispatchToProps } from './connect/dispatchToProps';
import NavBar from '../../components/NavBar';
import Loader from '../../components/Loader';

const Favorites = (props) => <Async load={import('../Favorites/container')} componentProps={props} />;
const Suggester = (props) => <Async load={import('../Suggester/container')} componentProps={props} />;
const CardInfo = (props) => <Async load={import('../CardInfo/container')} componentProps={props} />;
const CardSets = (props) => <Async load={import('../CardSets/container')} componentProps={props} />;
const CardSet = (props) => <Async load={import('../CardSet/container')} componentProps={props} />;

class Root extends React.Component {

    componentWillMount() {
        this.props.appInitialized();
    }

    shouldComponentUpdate(nextProps) {
        return this.props.isInitial !== nextProps.isInitial;
    }

    render() {
        const { isInitial } = this.props;
        return (
            <Router>
                <section className="Root">
                    {!isInitial &&
                        <div className="Root__preloader">
                            <div className="Root__circular">
                                <Loader />
                            </div>
                        </div>
                    }
                    <NavBar />
                    <Switch>
                        <Route
                            exact
                            path="/search"
                            component={Suggester}
                        />
                        <Route
                            exact
                            path="/cards/:id"
                            component={({match, history}) => <CardInfo cardId={match.params.id} history={history} />}
                        />
                        <Route
                            exact
                            path="/favorites"
                            component={Favorites}
                        />
                        <Route
                            exact
                            path="/browse"
                            component={CardSets}
                        />
                        <Route
                            exact
                            path="/browse/:setId"
                            component={({match, history}) => <CardSet code={match.params.setId} history={history} />}
                        />
                    </Switch>
                </section>
            </Router>
        );
    }
}

Root.propTypes = {
    isInitial: bool.isRequired,
    appInitialized: func.isRequired
};

export default connect(mapStateToProps, dispatchToProps)(Root);
