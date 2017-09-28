import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import App from './components/App';
import store from './store/store';

injectTapEventPlugin();

const muiTheme = getMuiTheme({
    palette: {
        primary1Color: '#424242',
        primary2Color: '#616161',
        primary3Color: '#616161',
        accent1Color: '#434343',
        accent2Color: '#ccc',
        accent3Color: '#aaa',
        textColor: '#f9f9f9',
        alternateTextColor: '#e2e2e2',
        canvasColor: '#333',
        borderColor: '#888',
        // disabledColor: fade(darkBlack, 0.3),
        pickerHeaderColor: '#424242',
        // clockCircleColor: fade(darkBlack, 0.07),
        shadowColor: '#000',
    },
});

ReactDOM.render(
    <Provider store={store}>
        <MuiThemeProvider muiTheme={muiTheme}>
            <App />
        </MuiThemeProvider>
    </Provider>,
    document.getElementById('root')
);
