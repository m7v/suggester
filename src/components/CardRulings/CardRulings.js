import './CardRulings.css';
import React from 'react';
import { arrayOf, shape, bool } from 'prop-types';
import { formatText } from '../../core/helpers/mana.helper';
import Tooltip from 'material-ui/Tooltip';
import IconButton from 'material-ui/IconButton';
import IconInfoOutline from 'material-ui-icons/InfoOutline';
import Dialog, { DialogActions, DialogContent } from 'material-ui/Dialog';
import Button from 'material-ui/Button';

class CardRulings extends React.PureComponent {

    state = {
        rulingsOpen: false
    };

    handleRulingsClose = () => {
        this.handleRulingsClick(false);
    };
    handleRulingsOpen = () => {
        this.handleRulingsClick(true);
    };

    handleRulingsClick = (value) => {
        this.setState({ rulingsOpen: !!value });
    };

    render() {
        const { rulings, isMobile } = this.props;
        return (
            <div className="CardRulings__root">
                <Dialog
                    fullScreen={isMobile}
                    ignoreBackdropClick
                    ignoreEscapeKeyUp
                    open={this.state.rulingsOpen}
                >
                    <div className="CardRulings__title">Rulings</div>
                    <DialogContent className="CardRulings__drawer">
                        {/* eslint-disable */}
                        <ul className="CardRulings__itemList">
                            {rulings && rulings.map(ruling => (
                                <li key={ruling.text} className="CardRulings__item">
                                    <div
                                        className="CardRulings__text"
                                        dangerouslySetInnerHTML={{ __html: formatText(ruling.text, 'CardRulings__mana')}}
                                    />
                                </li>
                            ))}
                        </ul>
                        {/*eslint-enable*/}
                    </DialogContent>
                    <DialogActions className="CardRulings__actions">
                        <Button className="CardRulings__closeButton" color="primary" onClick={this.handleRulingsClose}>
                            Close
                        </Button>
                    </DialogActions>
                </Dialog>
                <Tooltip className='CardRulings__label' title='Card rulings' placement='top'>
                    <IconButton className="CardRulings__IconInfo" onClick={this.handleRulingsOpen}>
                        <IconInfoOutline />
                    </IconButton>
                </Tooltip>
            </div>
        );
    }
}

CardRulings.propTypes = {
    isMobile: bool,
    rulings: arrayOf(shape({})),
};

CardRulings.defaultProps = {
    rulings: [],
    isMobile: false,
};

export default CardRulings;
