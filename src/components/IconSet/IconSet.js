import './IconSet.css';
import React from 'react';
import classNames from 'classnames';
import { bool, string } from 'prop-types';

const getSetName = (setCode) => {
    switch (setCode.toLowerCase()) {
        case 'mps':
            return 'mp1';
        case 'mps_akh':
            return 'mp2';
        default:
            return setCode.toLowerCase();
    }
};

const IconSet = ({set, rarity, isMobile, isSet, isGradient}) => {
    if (!set) {
        return '';
    }
    const className = classNames({
        'IconSet__cardSet': true,
        'ss': true,
        'ss-grad': isGradient,
        [`ss-${getSetName(set)}`]: true,
        'ss-2x': !isSet && isMobile,
        'ss-3x': isSet,
        [`_${getSetName(rarity)}`]: true,
    });

    return <i className={className} />;
};

IconSet.propTypes = {
    set: string.isRequired,
    rarity: string,
    isMobile: bool,
    isSet: bool,
    isGradient: bool,
};

IconSet.defaultProps = {
    rarity: 'mythic',
    isMobile: false,
    isSet: false,
    isGradient: false,
};

export default IconSet;
