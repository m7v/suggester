import React, {Component} from 'react';
import {
    BrowserRouter as Router,
    Link,
    Route,
} from 'react-router-dom';
import EasterContainer from '../../containers/EasterContainer';
import SuggestContainer from '../../containers/SuggestContainer';
import DecksContainer from '../../containers/DecksContainer';
import DeckInfoContainer from '../../containers/DeckInfoContainer';
import './styles.css';

class App extends Component {

    render() {
        return (
            <Router history="Dashboard">
                <section className="App">
                    <EasterContainer>
                        <ul style={{ listStyleType: 'none', padding: 0 }}>
                            <li><Link to="/">Suggester</Link></li>
                            <li><Link to="/decks">Decks</Link></li>
                            <li><Link to="/cards">Cards</Link></li>
                        </ul>
                    </EasterContainer>
                    <div>
                        <Route
                            exact
                            path="/"
                            component={SuggestContainer}
                        />
                    </div>
                    <div>
                        <Route
                            path="/decks"
                            component={DecksContainer}
                        />
                    </div>
                    <div>
                        <Route
                            path="/deck/:id"
                            component={(({match}) => <DeckInfoContainer deckId={match.params.id} />)}
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

export default App;
