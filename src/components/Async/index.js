import React from 'react';
import PropTypes from 'prop-types';

class Async extends React.Component {
    constructor(props) {
        super(props);
        this.cancelUpdate = false;
    }

    componentWillMount() {
        this.cancelUpdate = false;
        this.props.load.then((c) => {
            this.C = c;
            if (!this.cancelUpdate) {
                this.forceUpdate();
            }
        });
    }

    componentWillUnmount() {
        this.cancelUpdate = true;
    }

    render() {
        const { componentProps } = this.props;
        /* eslint-disable */
        return this.C
            ? this.C.default
                ? <this.C.default {...componentProps} />
                : <this.C {...componentProps} />
            : null;
        /* eslint-enable */
    }
}

Async.propTypes = {
    componentProps: PropTypes.shape({}).isRequired,
    load: PropTypes.instanceOf(Promise).isRequired
};

export default Async;
