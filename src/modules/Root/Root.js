import './Root.css';
import React from 'react';
import { connect } from 'react-redux';
import { CircularProgress, LinearProgress } from 'material-ui';
import { bool, func } from 'prop-types';
import {
    BrowserRouter as Router,
    Link,
    Route,
} from 'react-router-dom';
import Easter from '../Easter/container';
import asyncComponent from '../Async';
import { mapStateToProps } from '../Root/connect/stateToProps';
import { dispatchToProps } from '../Root/connect/dispatchToProps';
import NavBar from '../../components/NavBar';

const Decks = asyncComponent(() => import('../Decks/container'));
const Cards = asyncComponent(() => import('../Cards/container'));
const Suggester = asyncComponent(() => import('../Suggester/container'));
const DeckInfo = asyncComponent(() => import('../DeckInfo/container'));

class Root extends React.Component {

    componentWillMount() {
        this.props.appInitialized();
    }

    render() {
        return (
            <Router basename="/suggester" >
                <section className="Root">
                    {!this.props.isInitial &&
                        <div className="Root__preloader">
                            <div className="Root__circular">
                                <CircularProgress size={80} thickness={5} color="#fff" />
                            </div>
                            <div className="Root__linear">
                                <LinearProgress mode="indeterminate" />
                            </div>
                        </div>
                    }
                    <NavBar />
                    <Easter>
                        <ul style={{ listStyleType: 'none', padding: 0 }}>
                            <li><Link to="/search">Suggester</Link></li>
                            <li><Link to="/decks">Decks</Link></li>
                            <li><Link to="/cards">Cards</Link></li>
                            <li><Link to="/favorites">Favorites</Link></li>
                        </ul>
                    </Easter>
                    <Route
                        exact
                        path="/search"
                        component={Suggester}
                    />
                    <Route
                        path="/decks"
                        component={Decks}
                    />
                    <Route
                        path="/deck/:id"
                        component={(({match}) => <DeckInfo deckId={match.params.id} />)}
                    />
                    <Route
                        path="/cards"
                        component={Cards}
                    />
                    <Route
                        path="/card/:id"
                        component={(({match}) => <div>Card {match.params.id}</div>)}
                    />
                    <Route
                        path="/favorites"
                        component={() => <div>Favorites</div>}
                    />
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
