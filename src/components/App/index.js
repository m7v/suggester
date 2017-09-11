import React, {Component} from 'react';
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom';
import EasterContainer from './EasterContainer';
import SuggestContainer from './SuggestContainer';
import DecksContainer from './DecksContainer';
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
                            path="/"
                            component={DecksContainer}
                        />
                    </div>
                </section>
            </Router>
        );
    }
}

export default App;
