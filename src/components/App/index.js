import React, {Component} from 'react';
import {
    BrowserRouter as Router,
    Route
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
                        <SuggestContainer />
                    </EasterContainer>
                    <div>
                        <Route
                            path="/search"
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
                </section>
            </Router>
        );
    }
}

export default App;
