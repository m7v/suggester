import { createSelector } from 'reselect';

const getCardInfo = (state) => state.appContext.CardInfo.data;
const getFavorites = (state) => state.favorites.items;

const cardSelector = createSelector([
    getCardInfo
], cards => cards);

const favoriteSelector = createSelector([
    getFavorites
], favorites => favorites);

const getCard = (cards, cardId) => cards[cardId] || {};
const isFavorite = (cards, cardId) => !!cards[cardId];

export function stateToProps(state, props) {
    return {
        cardId: props.cardId,
        card: getCard(cardSelector(state), props.cardId),
        isFavorite: isFavorite(favoriteSelector(state), props.cardId),
        isMobile: state.appContext.isMobile,
        loading: state.appContext.Cards.loading,
        error: state.appContext.Cards.error,
    };
}
