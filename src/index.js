import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import red from 'material-ui/colors/red';
import registerServiceWorker from './registerServiceWorker';
import store from './core/store';
import Root from './modules/Root/container';
// import { appContextSetSWData } from './core/actions/appContext/appContext.types';
// import { suggestionsSetSWData } from './core/actions/suggestions/suggestions.types';
// import { IndexedDBStorage } from './core/lib/IndexedDBStorage';

injectTapEventPlugin();

const muiTheme = createMuiTheme({
    palette: {
        type: 'dark',
        primary: red,
    },
});

// const storage = new IndexedDBStorage('mtg-manager', 1);
// storage.getItem('store')
//     .then(data => {
//         const state = JSON.parse(data);
//         store.dispatch(appContextSetSWData(state.appContext));
//         store.dispatch(suggestionsSetSWData(state.suggester));
//     })
//     .catch(() => {});

ReactDOM.render(
    <Provider store={store}>
        <MuiThemeProvider theme={muiTheme}>
            <Root />
        </MuiThemeProvider>
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
