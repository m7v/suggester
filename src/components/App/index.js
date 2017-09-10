import React, {Component} from 'react';
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom';
import SuggestContainer from './SuggestContainer';
import DecksContainer from './DecksContainer';
import './styles.css';

class App extends Component {

    render() {
        return (
            <Router history="Dashboard">
                <section className="App">
                    <Route
                        path="/search"
                        component={SuggestContainer}
                    />
                    <Route
                        path="/"
                        component={DecksContainer}
                    />
                </section>
            </Router>
        );
    }
}

export default App;
