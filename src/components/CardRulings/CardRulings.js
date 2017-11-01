import './CardRulings.css';
import React from 'react';
import withRouter from 'react-router-dom/withRouter';
import { arrayOf, shape } from 'prop-types';
import IconInfoOutline from 'material-ui-icons/InfoOutline';
import IconButton from 'material-ui/IconButton';
import Drawer from 'material-ui/Drawer';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import DoneIcon from 'material-ui-icons/Done';

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
        const { rulings } = this.props;
        return (
            <div className="CardRulings__root">
                <Drawer open={this.state.rulingsOpen} anchor="top" onRequestClose={this.handleRulingsClose}>
                    <div className="CardRulings__drawer">
                        <span className="CardRulings__title">Rulings</span>
                        <List>
                            {rulings && rulings.map(ruling => (
                                <ListItem key={ruling.text} className="CardRulings__item">
                                    <ListItemIcon>
                                        <DoneIcon />
                                    </ListItemIcon>
                                    <ListItemText
                                        className="CardRulings__text"
                                        primary={ruling.text}
                                        secondary={ruling.date}
                                    />
                                </ListItem>
                            ))}
                        </List>
                    </div>
                </Drawer>
                <IconButton className="CardRulings__IconInfo" onClick={this.handleRulingsOpen}>
                    <IconInfoOutline />
                </IconButton>
            </div>
        );
    }
}

CardRulings.propTypes = {
    rulings: arrayOf(shape({})),
};

CardRulings.defaultProps = {
    rulings: []
};

export default withRouter(CardRulings);
