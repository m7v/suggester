import './Root.css';
import React from 'react';
import {
    BrowserRouter as Router,
    Link,
    Route,
} from 'react-router-dom';
import Easter from '../Easter/container';
import Suggester from '../Suggester/container';
import Decks from '../Decks/container';
import DeckInfo from '../DeckInfo/container';

class Root extends React.Component {

    render() {
        return (
            <Router history="Dashboard">
                <section className="App">
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
                            component={() => <div>Card list</div>}
                        />
                    </div>
                </section>
            </Router>
        );
    }
}

export default Root;
