import React, {Component} from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import {bindActionCreators} from 'redux';
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom';
import {connect} from 'react-redux';
import SuggestContainer from './SuggestContainer';
import {
    getSuggestions
} from '../../actions/suggestions/suggestions.actions';
import './styles.css';

class App extends Component {

    render() {
        return (
            <Router history="Dashboard">
                <section className="App">
                    <Route
                        path="/"
                        component={SuggestContainer}
                    />
                </section>
            </Router>
        );
    }
}

App.propTypes = {
    suggester: ImmutablePropTypes.map
};

App.defaultProps = {
    suggester: new Map()
};

function mapStateToProps(state) {
    return {
        suggester: state.suggester,
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        getSuggestions
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
