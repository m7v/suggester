import './styles.css';
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
    Paper
} from 'material-ui';
import AutoComplete from 'material-ui/AutoComplete';
import { cyan500 } from 'material-ui/styles/colors';
import {
    getSuggestions
} from '../../../actions/suggestions/suggestions.actions';

class SuggestContainer extends Component {

    handleUpdateInput = (value) => {
        this.props.getSuggestions(value);
    };

    render() {
        const primary1Color = cyan500;

        return (
            <section className="SuggestContainer">
                <div className="SuggestContainer__main" style={{backgroundColor: primary1Color}}>
                    <Paper className="SuggestContainer__card" zDepth={2}>
                        <div>
                            <AutoComplete
                                hintText="Услуги и товары, организации, адреса"
                                dataSource={this.props.suggestions}
                                onUpdateInput={this.handleUpdateInput}
                                floatingLabelText="Поиск"
                                fullWidth
                            />
                        </div>
                    </Paper>
                </div>
            </section>
        );
    }
}

SuggestContainer.propTypes = {
    suggestions: PropTypes.array,
    getSuggestions: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
    return {
        suggestions: state.suggester.get('suggestions')
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        getSuggestions
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SuggestContainer);
