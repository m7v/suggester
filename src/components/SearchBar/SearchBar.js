import './SearchBar.css';
import React from 'react';
import { func, string, bool } from 'prop-types';
import classNames from 'classnames';

const ENTER_KEY_CODE = 13;
const ESC_KEY_CODE = 27;
const MAX_INPUT_LENGTH = 30;

class SearchBar extends React.PureComponent {

    state = {
        searchingQuery: this.props.searchingQuery,
    };

    componentDidMount() {
        if (!this.props.isMobile) {
            this.searchInput.focus();
        }
    }

    onCardChange = event => {
        this.setState({ searchingQuery: event.target.value });
    };

    onFocusInput = () => {
        setTimeout(() => {
            this.searchInput.selectionStart = this.searchInput.selectionEnd = 10000;
        }, 0);
    };

    onSearchCardByKeyPress = event => {
        if (event.keyCode === ESC_KEY_CODE) {
            event.preventDefault();
            this.searchInput.blur();
        }
        if (event.keyCode === ENTER_KEY_CODE) {
            event.preventDefault();
            this.props.handleSearchCardByKeyPress(this.state.searchingQuery);
            this.searchInput.blur();
        }
    };

    defineSearchInput = (node) => {
        this.searchInput = node;
    };

    render() {
        const className = this.props.className || 'SearchBar__wrapper';
        return (
            <div className={className}>
                <input
                    ref={this.defineSearchInput}
                    className={classNames({
                        'SearchBar__input': true,
                        '_submitted': this.props.isSubmitted,
                        '_desktop': !this.props.isMobile,
                    })}
                    type="search"
                    value={this.state.searchingQuery}
                    maxLength={MAX_INPUT_LENGTH}
                    placeholder="Search card"
                    onChange={this.onCardChange}
                    onKeyDown={this.onSearchCardByKeyPress}
                    onFocus={this.onFocusInput}
                />
            </div>
        );
    }
}

SearchBar.propTypes = {
    className: string,
    searchingQuery: string,
    isSubmitted: bool,
    isMobile: bool,
    handleSearchCardByKeyPress: func.isRequired,
};

SearchBar.defaultProps = {
    searchingQuery: '',
    isSubmitted: false,
    isMobile: false,
    className: '',
};

export default SearchBar;
