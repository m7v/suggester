import './NavBar.css';
import React from 'react';
import { BottomNavigation, BottomNavigationItem } from 'material-ui/BottomNavigation';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import Paper from 'material-ui/Paper';
import IconViewModule from 'material-ui/svg-icons/action/view-module';
import IconViewCarousel from 'material-ui/svg-icons/action/view-carousel';
import IconSearch from 'material-ui/svg-icons/action/search';
import IconFavorite from 'material-ui/svg-icons/action/favorite';
import IconBrowse from 'material-ui/svg-icons/action/explore';

const favoritesIcon = <IconFavorite />;
const searchIcon = <IconSearch />;
const deckIcon = <IconViewModule />;
const cardIcon = <IconViewCarousel />;
const browseIcon = <IconBrowse />;

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

export default class NavBar extends React.Component {

    state = {
        selectedNav: navbarConfig.findIndex(item => window.location.pathname.indexOf(item.path) !== -1)
    };

    getClassName = (index) =>
        classNames({ 'NavBar__selectedIcon': this.state.selectedNav === index });

    getNavigationIcon = (item, index) =>
        <Link to={item.path} className={this.getClassName(index)} >{item.icon}</Link>;

    renderNavigationLinks() {
        return navbarConfig.map((item, index) => (
            <BottomNavigationItem
                key={item.path}
                className="NavBar__icon"
                label={item.label}
                icon={this.getNavigationIcon(item, index)}
                onClick={() => this.setState({ selectedNav: index })}
            />
        ));
    }

    render() {
        return (
            <Paper className="NavBar__root" zDepth={2}>
                <BottomNavigation selectedIndex={this.state.selectedNav}>
                    { this.renderNavigationLinks() }
                </BottomNavigation>
            </Paper>
        );
    }
}
