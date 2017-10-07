import './NavBar.css';
import React from 'react';
import { BottomNavigation, BottomNavigationItem } from 'material-ui/BottomNavigation';
import { Link } from 'react-router-dom';
import Paper from 'material-ui/Paper';
import IconViewModule from 'material-ui/svg-icons/action/view-module';
import IconViewCarousel from 'material-ui/svg-icons/action/view-carousel';
import IconSearch from 'material-ui/svg-icons/action/search';
// import IconFavorite from 'material-ui/svg-icons/action/favorite';

// const favoritesIcon = <IconFavorite />;
const searchIcon = <IconSearch />;
const deckIcon = <IconViewModule />;
const cardIcon = <IconViewCarousel />;

const navbarConfig = [
    {
        path: 'suggester',
        icon: searchIcon,
        label: 'Search',
    },
    {
        path: 'decks',
        icon: deckIcon,
        label: 'Decks',
    },
    {
        path: 'cards',
        icon: cardIcon,
        label: 'Cards',
    },
    // {
    //     path: 'favorites',
    //     icon: favoritesIcon,
    //     label: 'Favorites',
    // },
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
