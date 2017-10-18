import './SearchBarMini.css';
import React from 'react';
import { func, string } from 'prop-types';

const ENTER_KEY_CODE = 13;

class SearchBarMini extends React.PureComponent {

    state = {
        searchingCard: this.props.searchingCard
    };

    componentDidMount() {
        if (this.state.searchingCard) {
            this.searchInput.focus();
        }
    }

    onCardChange = event => {
        this.setState({ searchingCard: event.target.value });
    };

    onSearchCardByKeyPress = event => {
        if (event.keyCode === ENTER_KEY_CODE) {
            event.preventDefault();
            this.props.handleSearchCardByKeyPress(this.state.searchingCard);
            this.searchInput.blur();
        }
    };

    defineSearchInput = (node) => {
        this.searchInput = node;
    };

    render() {
        const className = this.props.className || 'SearchBarMini__wrapper';
        return (
            <div className={className}>
                <input
                    ref={this.defineSearchInput}
                    className="SearchBarMini__input"
                    type="search"
                    value={this.state.searchingCard}
                    placeholder="Search"
                    onChange={this.onCardChange}
                    onKeyDown={this.onSearchCardByKeyPress}
                />
            </div>
        );
    }
}

SearchBarMini.propTypes = {
    className: string,
    searchingCard: string,
    handleSearchCardByKeyPress: func.isRequired,
};

SearchBarMini.defaultProps = {
    searchingCard: '',
    className: '',
};

export default SearchBarMini;
