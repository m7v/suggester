import './NavBar.css';
import React from 'react';
import { Link } from 'react-router-dom';
import { string } from 'prop-types';
import classNames from 'classnames';
import {List, ListItem} from 'material-ui/List';
import Drawer from 'material-ui/Drawer';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/svg-icons/navigation/menu';
import IconViewModule from 'material-ui/svg-icons/action/view-module';
import IconViewCarousel from 'material-ui/svg-icons/action/view-carousel';
import IconSearch from 'material-ui/svg-icons/action/search';
import IconFavorite from 'material-ui/svg-icons/action/favorite';
import IconBrowse from 'material-ui/svg-icons/action/explore';

const browseIcon = <IconBrowse viewBox={'0 0 22 22'} />;
const favoritesIcon = <IconFavorite viewBox={'0 0 22 22'} />;
const searchIcon = <IconSearch viewBox={'0 0 22 22'} />;
const deckIcon = <IconViewModule viewBox={'0 0 22 22'} />;
const cardIcon = <IconViewCarousel viewBox={'0 0 22 22'} />;

const navbarConfig = [
    {
        path: '/search',
        icon: searchIcon,
    },
    {
        path: '/favorites',
        icon: favoritesIcon,
    },
    {
        path: '/browse',
        icon: browseIcon,
    },
    {
        path: '/cards',
        icon: cardIcon,
    },
    {
        path: '/decks',
        icon: deckIcon,
    }
];

class NavBar extends React.Component {

    state = {
        // @TODO need for BrowserRouter
        // selectedNav: navbarConfig.findIndex(item => window.location.pathname.indexOf(item.path) !== -1)
        open: false,
        selectedNav: navbarConfig.findIndex(item => window.location.hash.indexOf(item.path) !== -1)
    };

    getClassName = (index) =>
        classNames({ 'NavBar__selectedIcon': this.state.selectedNav === index });

    handleToggle = () => this.setState({open: !this.state.open});

    handleItemClick = (index) => this.setState({open: false, selectedNav: index});

    renderNavigationLinks() {
        return navbarConfig.map((item, index) => (
            <Link key={item.path} to={item.path} className={this.getClassName(index)} >
                <ListItem
                    className="NavBar__icon"
                    leftIcon={item.icon}
                    onClick={() => this.handleItemClick(item)}
                />
            </Link>
        ));
    }

    render() {
        return (
            <div className="NavBar__root">
                <IconButton className="NavBar__icon" onClick={this.handleToggle}>
                    <IconMenu />
                </IconButton>
                <Drawer
                    docked={false}
                    width={90}
                    open={this.state.open}
                    onRequestChange={(open) => this.setState({open})}
                    swipeAreaWidth={10}
                >
                    <List>
                        { this.renderNavigationLinks() }
                    </List>
                </Drawer>
            </div>
        );
    }
}

NavBar.propTypes = {
    className: string,
};

NavBar.defaultProps = {
    className: '',
};

export default NavBar;
