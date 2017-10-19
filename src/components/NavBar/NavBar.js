import './NavBar.css';
import React from 'react';
import BottomNavigation, { BottomNavigationButton } from 'material-ui/BottomNavigation';
import withRouter from 'react-router-dom/withRouter';
import classNames from 'classnames';
import Paper from 'material-ui/Paper';
import IconViewModule from 'material-ui-icons/ViewModule';
import IconViewCarousel from 'material-ui-icons/ViewCarousel';
import IconSearch from 'material-ui-icons/Search';
import IconFavorite from 'material-ui-icons/Favorite';
import IconBrowse from 'material-ui-icons/Explore';

const browseIcon = <IconBrowse />;
const favoritesIcon = <IconFavorite />;
const searchIcon = <IconSearch />;
const deckIcon = <IconViewModule />;
const cardIcon = <IconViewCarousel />;

const navbarConfig = [
    {
        path: '/search',
        icon: searchIcon,
        label: 'Search',
    },
    {
        path: '/favorites',
        icon: favoritesIcon,
        label: 'Favorites',
    },
    {
        path: '/browse',
        icon: browseIcon,
        label: 'Browse',
    },
    {
        path: '/cards',
        icon: cardIcon,
        label: 'Library',
    },
    {
        path: '/decks',
        icon: deckIcon,
        label: 'Decks',
    }
];

const BottomRouteNavigationButton = withRouter(({ history, className, label, icon, path, handleClick }) => (
    <BottomNavigationButton
        className={className}
        label={label}
        icon={icon}
        value={path}
        onClick={() => {
            handleClick();
            if (window.location.hash.indexOf(path) < 0) {
                history.push(path);
            }
        }}
    />
));

export default class NavBar extends React.PureComponent {

    state = {
        // @TODO need for BrowserRouter
        // selectedNav: navbarConfig.findIndex(item => window.location.pathname.indexOf(item.path) !== -1)
        selectedNav: window.location.hash.split('#')[1]
    };

    getClassName = (index) =>
        classNames({ 'NavBar__selectedIcon': this.state.selectedNav === index });

    handleChange = (event, selectedNav) => {
        this.setState({ selectedNav });
    };

    renderNavigationLinks() {
        return navbarConfig.map((item, index) => (
            <BottomRouteNavigationButton
                key={item.path}
                label={item.label}
                icon={item.icon}
                path={item.path}
                handleClick={() => this.setState({ selectedNav: index })}
            />
        ));
    }

    render() {
        return (
            <Paper className="NavBar__root" elevation={2}>
                <BottomNavigation value={this.state.selectedNav} onChange={this.handleChange}>
                    { this.renderNavigationLinks() }
                </BottomNavigation>
            </Paper>
        );
    }
}
