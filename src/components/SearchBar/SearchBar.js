import './SearchBar.css';
import React from 'react';
import { func, string, bool, number } from 'prop-types';
import classNames from 'classnames';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';

const ENTER_KEY_CODE = 13;

class SearchBar extends React.PureComponent {

    state = {
        searchingCard: this.props.searchingCard
    };

    onCardChange = event => {
        this.setState({ searchingCard: event.target.value });
    };

    onSearchCardByKeyPress = event => {
        if (event.keyCode === ENTER_KEY_CODE) {
            event.preventDefault();
            this.props.handleSearchCardByKeyPress(this.state.searchingCard);
        }
    };

    render() {
        const inputWrapper = classNames({
            'SearchBar__inputWrapper': true,
            '_mobile': this.props.isMobile
        });

        return (
            <Paper className={inputWrapper} zDepth={2}>
                <div className="SearchBar__form">
                    <div className="SearchBar__input">
                        <TextField
                            type="text"
                            floatingLabelText="Searching card"
                            required="required"
                            fullWidth
                            value={this.state.searchingCard}
                            onChange={this.onCardChange}
                            onKeyDown={this.onSearchCardByKeyPress}
                        />
                    </div>
                </div>
                {!!this.props.results &&
                    <div>{this.props.results} results</div>
                }
            </Paper>
        );
    }
}

SearchBar.propTypes = {
    searchingCard: string,
    results: number,
    isMobile: bool,
    handleSearchCardByKeyPress: func.isRequired,
};

SearchBar.defaultProps = {
    searchingCard: '',
    results: 0,
    isMobile: false,
};

export default SearchBar;
