import React from 'react';
import withRouter from 'react-router-dom/withRouter';
import { string, shape } from 'prop-types';
import IconButton from 'material-ui/IconButton';
import IconArrowBack from 'material-ui-icons/ArrowBack';

class ButtonBack extends React.PureComponent {

    handleClick = () => {
        this.props.history.goBack();
    };

    render() {
        return (
            <IconButton className={this.props.className} onClick={this.handleClick}>
                <IconArrowBack />
            </IconButton>
        );
    }
}

ButtonBack.propTypes = {
    className: string.isRequired,
    history: shape({}).isRequired,
};

export default withRouter(ButtonBack);
