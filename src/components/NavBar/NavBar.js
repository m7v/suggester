import './NavBar.css';
import React from 'react';
import { BottomNavigation, BottomNavigationItem } from 'material-ui/BottomNavigation';
import { Link } from 'react-router-dom';
import Paper from 'material-ui/Paper';
import IconViewModule from 'material-ui/svg-icons/action/view-module';
import IconViewCarousel from 'material-ui/svg-icons/action/view-carousel';
import IconSearch from 'material-ui/svg-icons/action/search';
import IconFavorite from 'material-ui/svg-icons/action/favorite';
// import IconBrowse from 'material-ui/svg-icons/action/explore';

const favoritesIcon = <IconFavorite />;
const searchIcon = <IconSearch />;
const deckIcon = <IconViewModule />;
const cardIcon = <IconViewCarousel />;
// const browseIcon = <IconBrowse />;

const navbarConfig = [
    {
        path: '/suggester',
        icon: searchIcon,
        label: 'Search',
    },
    {
        path: '/favorites',
        icon: favoritesIcon,
        label: 'Favorites',
    },
    // {
    //     path: '/browse',
    //     icon: browseIcon,
    //     label: 'Browse',
    // },
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

export default class NavBar extends React.PureComponent {

    render() {
        return (
            <Paper className="NavBar__root" zDepth={2}>
                <BottomNavigation>
                    {navbarConfig.map(item => (
                        <Link key={item.path} to={item.path}>
                            <BottomNavigationItem
                                label={item.label}
                                icon={item.icon}
                            />
                        </Link>))
                    }
                </BottomNavigation>
            </Paper>
        );
    }
}
