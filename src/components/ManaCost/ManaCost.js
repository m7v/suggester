import './ManaCost.css';
import React from 'react';
import classNames from 'classnames';
import { string } from 'prop-types';
import { getManaClass, getManaIcon, isSplit } from '../../core/helpers/mana.helper';

class ManaCost extends React.PureComponent {

    render() {
        if (!this.props.manaCost) {
            return null;
        }
        return (
            <div className="ManaCost__root">
                {this.props.manaCost.match(/\{(.*?)\}/g)
                    .map(rawMana => rawMana.replace('{', '').replace('}', ''))
                    .map((mana, index) => (
                        <i
                            key={`${index}_${mana}_${(new Date()).getTime()}`}
                            className={classNames({
                                'ManaCost__mana': true,
                                [`ManaCost__mana_${getManaClass(mana)}`]: true,
                                'ms-split': isSplit(mana),
                                'ms-cost': true,
                                'ms': true,
                                [`ms-${getManaIcon(mana)}`]: true,
                            })}
                        />
                    ))
                }
            </div>
        );
    }
}

ManaCost.propTypes = {
    manaCost: string,
};

ManaCost.defaultProps = {
    manaCost: '',
};

export default ManaCost;
