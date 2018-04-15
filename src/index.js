import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import red from 'material-ui/colors/red';
import registerServiceWorker from './registerServiceWorker';
import store from './core/store';
import Root from './modules/Root/container';

injectTapEventPlugin();

const muiTheme = createMuiTheme({
    palette: {
        type: 'dark',
        primary: red,
    },
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
