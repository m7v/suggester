import './Suggester.css';
import React from 'react';
import { connect } from 'react-redux';
import LazyLoad from 'react-lazyload';
import SwipeableViews from 'react-swipeable-views';
import { bindKeyboard } from 'react-swipeable-views-utils';
import NumberEasing from 'react-number-easing';
import { bool, number, string, func, shape, arrayOf } from 'prop-types';
import Img from 'react-image';
import {
    Paper,
    TextField,
    GridList,
    GridTile,
    CircularProgress
} from 'material-ui';
import { mapStateToProps } from './connect/stateToProps';
import { mapDispatchToProps } from './connect/dispatchToProps';

const ENTER_KEY_CODE = 13;

const Views = bindKeyboard(SwipeableViews);

class Suggester extends React.Component {

    state = {
        searchingCard: this.props.searchingCard
    };

    componentWillMount = () => {
        if (this.state.searchingCard) {
            this.props.getSuggestions(this.state.searchingCard);
        }
    };

    getDefaultCard = () => (
        <img
            className="Suggester__img _default"
            src={'img/default-card.png'}
            alt={'MTG'}
        />
    );

    getPhoneCardResults = () => (
        <section>
            {!!this.props.suggestions.length &&
            <Views className="Suggester__resultsPhone">
                {this.props.suggestions.map(card => (
                    <div key={card.id} className="Suggester__result">
                        <LazyLoad height={200} offset={100}>
                            <Img
                                className="Suggester__img"
                                src={card.src}
                                loader={this.getDefaultCard()}
                                unloader={this.getDefaultCard()}
                            />
                        </LazyLoad>
                    </div>
                ))}
            </Views>
            }
        </section>
    );

    getDesktopCardResults = () => (
        <section className="Suggester__results">
            {!!this.props.suggestions.length &&
                <GridList
                    cellHeight={310}
                    cellWidth={225}
                    cols={4}
                >
                    {this.props.suggestions.map((card) => (
                        <GridTile key={card.src}>
                            <LazyLoad height={200} offset={100}>
                                <Img
                                    className="Suggester__img"
                                    src={card.src}
                                    loader={this.getDefaultCard()}
                                    unloader={this.getDefaultCard()}
                                />
                            </LazyLoad>
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
        return (
            <section className="Suggester">
                <div className="Suggester__main">
                    <Paper className="Suggester__card" zDepth={2}>
                        <section>
                            <div className="Suggester__form">
                                <div className="Suggester__input">
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
                                <span>
                                    <NumberEasing
                                        value={this.props.suggestions.length}
                                        speed={3000}
                                        ease='quintInOut'
                                    /> results
                                </span>
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

Suggester.propTypes = {
    loading: bool,
    searchingCard: string,
    suggestions: arrayOf(shape({
        id: number,
        src: string,
    })),
    getSuggestions: func.isRequired,
    isPhone: bool
};

Suggester.defaultProps = {
    loading: false,
    isPhone: false,
    searchingCard: '',
    suggestions: [],
};

export default connect(mapStateToProps, mapDispatchToProps)(Suggester);
