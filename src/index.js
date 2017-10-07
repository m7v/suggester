import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import {
    blue500,
    grey600,
    red700, red600, red900,
    fullWhite,
} from 'material-ui/styles/colors';
import { fade } from 'material-ui/utils/colorManipulator';
import store from './store';
import Root from './modules/Root/container';

injectTapEventPlugin();

const muiTheme = getMuiTheme({
    palette: {
        primary1Color: blue500,
        primary2Color: blue500,
        primary3Color: grey600,
        accent1Color: red700,
        accent2Color: red600,
        accent3Color: red900,
        textColor: fullWhite,
        secondaryTextColor: fade(fullWhite, 0.7),
        alternateTextColor: '#303030',
        canvasColor: '#303030',
        borderColor: fade(fullWhite, 0.3),
        disabledColor: fade(fullWhite, 0.3),
        pickerHeaderColor: fade(fullWhite, 0.12),
        clockCircleColor: fade(fullWhite, 0.12),
    },
});

ReactDOM.render(
    <Provider store={store}>
        <MuiThemeProvider muiTheme={muiTheme}>
            <Root />
        </MuiThemeProvider>
    </Provider>,
    document.getElementById('root')
);
