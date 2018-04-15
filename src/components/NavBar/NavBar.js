import './NavBar.css';
import React from 'react';
import BottomNavigation, { BottomNavigationButton } from 'material-ui/BottomNavigation';
import { shape } from 'prop-types';
import withRouter from 'react-router-dom/withRouter';
import findIndex from 'lodash/findIndex';
import Paper from 'material-ui/Paper';
// import IconViewModule from 'material-ui-icons/ViewModule';
// import IconViewCarousel from 'material-ui-icons/ViewCarousel';
import IconSearch from 'material-ui-icons/Search';
// import IconAddBox from 'material-ui-icons/AddBox';
import IconFavorite from 'material-ui-icons/Favorite';
import IconBrowse from 'material-ui-icons/Explore';

const browseIcon = <IconBrowse />;
// const AddIcon = <IconAddBox />;
const favoritesIcon = <IconFavorite />;
const searchIcon = <IconSearch />;
// const deckIcon = <IconViewModule />;
// const cardIcon = <IconViewCarousel />;

const navbarConfig = [
    {
        path: '/search',
        icon: searchIcon,
        label: 'Search',
    },
    // {
    //     path: '/browse',
    //     icon: browseIcon,
    //     label: 'Browse',
    // },
    {
        path: '/news',
        icon: browseIcon,
        label: 'news',
    },
    // {
    //     path: '/deck/add',
    //     icon: AddIcon,
    //     label: 'Add Deck',
    // },
    {
        path: '/timetable',
        icon: favoritesIcon,
        label: 'Timetable',
    },
    // {
    //     path: '/cards',
    //     icon: cardIcon,
    //     label: 'Library',
    // },
    // {
    //     path: '/decks',
    //     icon: deckIcon,
    //     label: 'Decks',
    // }
];

class NavBar extends React.PureComponent {

    getRouteIndex(itemPath) {
        const path = itemPath || this.props.location.pathname;
        return findIndex(navbarConfig, (o) => path.indexOf(o.path) >= 0);
    }

    renderNavigationLinks() {
        return navbarConfig.map((item) => (
            <BottomNavigationButton
                key={item.path}
                icon={item.icon}
                value={this.getRouteIndex(item.path)}
                className={'NavBar__button'}
                onClick={() => {
                    if (this.props.location.pathname !== item.path) {
                        this.props.history.push(item.path);
                    }
                }}
            />
        ));
    }

    render() {
        return (
            <Paper className="NavBar__root" elevation={4}>
                <BottomNavigation value={this.getRouteIndex()}>
                    { this.renderNavigationLinks() }
                </BottomNavigation>
            </Paper>
        );
    }
}

NavBar.propTypes = {
    location: shape({}).isRequired,
    history: shape({}).isRequired,
};

export default withRouter(NavBar);
