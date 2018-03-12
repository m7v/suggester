import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import red from 'material-ui/colors/red';
import registerServiceWorker from './registerServiceWorker';
import store from './core/store';
import { sendMessageToSW } from './core/middlewares/swStore';
import Root from './modules/Root/container';
import { appContextSetSWData } from './core/actions/appContext/appContext.types';
import { suggestionsSetSWData } from './core/actions/suggestions/suggestions.types';

injectTapEventPlugin();

const muiTheme = createMuiTheme({
    palette: {
        type: 'dark',
        primary: red,
    },
});

sendMessageToSW('getStore')
    .then((data) => {
        store.dispatch(appContextSetSWData(data.appContext));
        store.dispatch(suggestionsSetSWData(data.suggester));
    });

ReactDOM.render(
    <Provider store={store}>
        <MuiThemeProvider theme={muiTheme}>
            <Root />
        </MuiThemeProvider>
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
