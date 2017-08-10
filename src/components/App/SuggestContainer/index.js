import './styles.css';
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import SwipeableViews from 'react-swipeable-views';
import { bindKeyboard } from 'react-swipeable-views-utils';
import { bool, number, string, func, shape, arrayOf } from 'prop-types';
import MobileDetect from 'mobile-detect';
import Img from 'react-image';
import {
    Paper,
    TextField,
    GridList,
    GridTile,
    CircularProgress
} from 'material-ui';
import { cyan500 } from 'material-ui/styles/colors';
import {
    getSuggestions
} from '../../../actions/suggestions/suggestions.actions';

const ENTER_KEY_CODE = 13;

const Views = bindKeyboard(SwipeableViews);

class SuggestContainer extends Component {

    state = {
        searchingCard: this.props.searchingCard
    };

    componentWillMount = () => {
        if (this.state.searchingCard) {
            this.props.getSuggestions(this.state.searchingCard);
        }
    };

    getDefaultCard = () => (<img src={'img/default-card.jpg'} alt={'MTG'} />);

    getPhoneCardResults = () => (
        <section>
            {!!this.props.suggestions.length &&
            <Views className="SuggestContainer__resultsPhone">
                {this.props.suggestions.map(card => (
                    <div key={card.id} className="SuggestContainer__result">
                        <Img
                            src={card.src}
                            loader={this.getDefaultCard()}
                            unloader={this.getDefaultCard()}
                        />
                    </div>
                ))}
            </Views>
            }
        </section>
    );

    getDesktopCardResults = () => (
        <section className="SuggestContainer__results">
            {!!this.props.suggestions.length &&
                <GridList
                    cellHeight={310}
                    cellWidth={225}
                    cols={4}
                >
                    {this.props.suggestions.map((card) => (
                        <GridTile key={card.src}>
                            <Img
                                src={card.src}
                                loader={this.getDefaultCard()}
                                unloader={this.getDefaultCard()}
                            />
                        </GridTile>
                    ))}
                </GridList>
            }
        </section>
    );

    isValidCard = () => !!this.state.searchingCard.length;

    isDisabled = () => !this.isValidCard();

    handleCardChange = event => {
        this.setState({searchingCard: event.target.value});
    };

    handleSearchCard = (event) => {
        event.preventDefault();
        if (!this.props.loading) {
            this.props.getSuggestions(this.state.searchingCard);
        }
    };

    handleSearchCardByKeyPress = event => {
        if (event.keyCode === ENTER_KEY_CODE) {
            this.handleSearchCard(event);
        }
    };

    render() {
        const primaryColor = cyan500;

        return (
            <section className="SuggestContainer">
                <div className="SuggestContainer__main" style={{backgroundColor: primaryColor}}>
                    <Paper className="SuggestContainer__card" zDepth={2}>
                        <section>
                            <div className="SuggestContainer__form">
                                <div className="SuggestContainer__input">
                                    <TextField
                                        type="text"
                                        floatingLabelText="Searching card"
                                        required="required"
                                        fullWidth
                                        value={this.state.searchingCard}
                                        onChange={this.handleCardChange}
                                        onKeyDown={this.handleSearchCardByKeyPress}
                                    />
                                </div>
                            </div>
                            {!!this.props.suggestions.length &&
                                <span>{ `${this.props.suggestions.length} results` }</span>
                            }
                        </section>
                    </Paper>
                    {(!this.props.loading && this.props.isPhone) &&
                        this.getPhoneCardResults()
                    }
                    {(!this.props.loading && !this.props.isPhone) &&
                        this.getDesktopCardResults()
                    }
                    {this.props.loading &&
                        <CircularProgress size={80} thickness={5} color="#fff" />
                    }
                </div>
            </section>
        );
    }
}

SuggestContainer.propTypes = {
    loading: bool,
    searchingCard: string,
    suggestions: arrayOf(shape({
        id: number,
        src: string,
    })),
    getSuggestions: func.isRequired,
    isPhone: bool
};

SuggestContainer.defaultProps = {
    loading: false,
    isPhone: false,
    searchingCard: '',
    suggestions: [],
};

function mapStateToProps(state) {
    return {
        searchingCard: state.suggester.get('query'),
        suggestions: state.suggester.get('suggestions'),
        loading: state.suggester.getIn(['meta', 'loading']),
        isPhone: new MobileDetect(window.navigator.userAgent).is('iPhone'),
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        getSuggestions
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SuggestContainer);
