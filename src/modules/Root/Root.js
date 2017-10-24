import './Root.css';
import 'mana-font/css/mana.min.css';
import 'keyrune/css/keyrune.min.css';
import React from 'react';
import { connect } from 'react-redux';
import Loader from '../../components/Loader';
import { bool, func } from 'prop-types';
import {
    // BrowserRouter as Router,
    HashRouter as Router,
    Link,
    Route,
} from 'react-router-dom';
import Easter from '../Easter/container';
import Async from '../Async';
import { mapStateToProps } from '../Root/connect/stateToProps';
import { dispatchToProps } from '../Root/connect/dispatchToProps';
import NavBar from '../../components/NavBar';

const DeckBuilder = (props) => <Async load={import('../DeckBuilder/container')} componentProps={props} />;
const Decks = (props) => <Async load={import('../Decks/container')} componentProps={props} />;
const Cards = (props) => <Async load={import('../Cards/container')} componentProps={props} />;
const Suggester = (props) => <Async load={import('../Suggester/container')} componentProps={props} />;
const DeckInfo = (props) => <Async load={import('../DeckInfo/container')} componentProps={props} />;
const CardInfo = (props) => <Async load={import('../CardInfo/container')} componentProps={props} />;
const CardSets = (props) => <Async load={import('../CardSets/container')} componentProps={props} />;
const CardSet = (props) => <Async load={import('../CardSet/container')} componentProps={props} />;

class Root extends React.PureComponent {

    componentWillMount() {
        this.props.appInitialized();
    }

    shouldComponentUpdate(nextProps) {
        return this.props.isInitial !== nextProps.isInitial;
    }

    render() {
        return (
            <Router>
                <section className="Root">
                    {!this.props.isInitial &&
                        <div className="Root__preloader">
                            <div className="Root__circular">
                                <Loader />
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
                        exact
                        path="/decks"
                        component={Decks}
                    />
                    <Route
                        exact
                        path="/decks/:id"
                        component={({match}) => <DeckInfo deckId={match.params.id} />}
                    />
                    <Route
                        exact
                        path="/cards"
                        component={Cards}
                    />
                    <Route
                        exact
                        path="/cards/:id"
                        component={({match, history}) => <CardInfo cardId={match.params.id} history={history} />}
                    />
                    <Route
                        exact
                        path="/favorites"
                        component={() => <div className="Root__comingSoon"><div>Coming soon...</div></div>}
                    />
                    <Route
                        exact
                        path="/deck/add"
                        component={DeckBuilder}
                    />
                    <Route
                        exact
                        path="/browse"
                        component={CardSets}
                    />
                    <Route
                        exact
                        path="/browse/:code"
                        component={({match, history}) => <CardSet code={match.params.code} history={history} />}
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
