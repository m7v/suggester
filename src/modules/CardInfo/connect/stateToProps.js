import { createSelector } from 'reselect';

const getCardInfo = (state) => state.appContext.CardInfo.data;

const cardSelector = createSelector([
    getCardInfo
], cards => cards);

const getCard = (cards, cardId) => cards[cardId] || {};

export function stateToProps(state, props) {
    return {
        cardId: props.cardId,
        card: getCard(cardSelector(state), props.cardId),
        isMobile: state.appContext.isMobile,
        loading: state.appContext.Cards.loading,
        error: state.appContext.Cards.error,
    };
}
