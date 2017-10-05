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
import Decks from '../Decks/container';
import Cards from '../Cards/container';
import Suggester from '../Suggester/container';
import DeckInfo from '../DeckInfo/container';
import { mapStateToProps } from '../Root/connect/stateToProps';
import { dispatchToProps } from '../Root/connect/dispatchToProps';

class Root extends React.Component {

    componentWillMount() {
        this.props.getDeckList()
            .then(() => this.props.appInitialized());
    }

    render() {
        return (
            <Router history="Dashboard">
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
                    <Easter>
                        <ul style={{ listStyleType: 'none', padding: 0 }}>
                            <li><Link to="/suggester">Suggester</Link></li>
                            <li><Link to="/decks">Decks</Link></li>
                            <li><Link to="/cards">Cards</Link></li>
                        </ul>
                    </Easter>
                    <div>
                        <Route
                            exact
                            path="/suggester"
                            component={Suggester}
                        />
                    </div>
                    <div>
                        <Route
                            path="/decks"
                            component={Decks}
                        />
                    </div>
                    <div>
                        <Route
                            path="/deck/:id"
                            component={(({match}) => <DeckInfo deckId={match.params.id} />)}
                        />
                    </div>
                    <div>
                        <Route
                            path="/cards"
                            component={Cards}
                        />
                    </div>
                </section>
            </Router>
        );
    }
}

Root.propTypes = {
    isInitial: bool.isRequired,
    getDeckList: func.isRequired,
    appInitialized: func.isRequired
};

export default connect(mapStateToProps, dispatchToProps)(Root);
