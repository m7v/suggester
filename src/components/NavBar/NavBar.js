import './NavBar.css';
import React from 'react';
import BottomNavigation, { BottomNavigationButton } from 'material-ui/BottomNavigation';
import { shape } from 'prop-types';
import withRouter from 'react-router-dom/withRouter';
import classNames from 'classnames';
import Paper from 'material-ui/Paper';
import IconViewModule from 'material-ui-icons/ViewModule';
import IconViewCarousel from 'material-ui-icons/ViewCarousel';
import IconSearch from 'material-ui-icons/Search';
// import IconFavorite from 'material-ui-icons/Favorite';
import IconBrowse from 'material-ui-icons/Explore';

const browseIcon = <IconBrowse />;
// const favoritesIcon = <IconFavorite />;
const searchIcon = <IconSearch />;
const deckIcon = <IconViewModule />;
const cardIcon = <IconViewCarousel />;

const navbarConfig = [
    {
        path: '/search',
        icon: searchIcon,
        label: 'Search',
    },
    // {
    //     path: '/favorites',
    //     icon: favoritesIcon,
    //     label: 'Favorites',
    // },
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

class NavBar extends React.PureComponent {

    state = {
        // @TODO need for BrowserRouter
        selectedNav: navbarConfig.findIndex(item => window.location.pathname.indexOf(item.path) !== -1)
        // selectedNav: window.location.hash.split('#')[1]
    };

    getClassName = (index) =>
        classNames({ 'NavBar__selectedIcon': this.state.selectedNav === index });

    handleChange = (event, selectedNav) => {
        this.setState({ selectedNav });
    };

    renderNavigationLinks() {
        return navbarConfig.map((item, index) => (
            <BottomNavigationButton
                key={item.path}
                label={item.label}
                icon={item.icon}
                value={index}
                onClick={() => {
                    this.setState({ selectedNav: index });
                    if (window.location.hash.indexOf(item.path) < 0) {
                        this.props.history.push(item.path);
                    }
                }}
            />
        ));
    }

    render() {
        return (
            <Paper className="NavBar__root" elevation={4}>
                <BottomNavigation value={this.state.selectedNav} onChange={this.handleChange}>
                    { this.renderNavigationLinks() }
                </BottomNavigation>
            </Paper>
        );
    }
}

NavBar.propTypes = {
    history: shape({}).isRequired,
};

export default withRouter(NavBar);
