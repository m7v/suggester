const React = require('react');
const ReactDOMServer = require('react-dom/server');
const { Provider } = require('react-redux');
const { StaticRouter, Route, Switch } = require('react-router-dom');
const { default: Decks } = require('./../src/modules/Decks/container');
const { default: Suggester } = require('./../src/modules/Suggester/container');
const { default: DeckInfo } = require('./../src/modules/DeckInfo/container');
const { default: DeckBuilder } = require('./../src/modules/DeckBuilder/container');
const { default: Cards } = require('./../src/modules/Cards/container');
const { default: CardInfo } = require('./../src/modules/CardInfo/container');
const { default: Favorites } = require('./../src/modules/Favorites/container');
const { default: CardSets } = require('./../src/modules/CardSets/container');
const { default: CardSet } = require('./../src/modules/CardSet/container');
const { default: NavBar } = require('./../src/components/NavBar/index');
const { getFavoritesCardList } = require('./../src/core/actions/favoritesApi/favoritesApi.actions');
const { getSetList } = require('./../src/core/actions/mtgApi/mtgApi.actions');
const routes = [
    {
        exact: true,
        path: '/search',
        component: Suggester,
    },
    {
        exact: true,
        path: '/decks',
        component: Decks,
    },
    {
        exact: true,
        path: '/decks/:id',
        component: ({ match }) => <DeckInfo deckId={match.params.id} />,
        // loadData: () => getSomeData(),
    },
    {
        exact: true,
        path: '/decks/:id/edit',
        component: ({ match }) => <DeckBuilder deckId={match.params.id} />,
        // loadData: () => getSomeData(),
    },
    {
        exact: true,
        path: '/cards',
        component: Cards,
        // loadData: () => getSomeData(),
    },
    {
        exact: true,
        path: '/cards/:id',
        component: ({ match, history }) => <CardInfo cardId={match.params.id} history={history} />,
        // loadData: () => getSomeData(),
    },
    {
        exact: true,
        path: '/favorites',
        component: Favorites,
        // loadData: () => getFavoritesCardList(),
    },
    {
        exact: true,
        path: '/deck/add',
        component: DeckBuilder,
    },
    {
        exact: true,
        path: '/browse',
        component: CardSets,
        // loadData: () => getSetList(),
    },
    {
        exact: true,
        path: '/browse/:setId',
        component: ({ match, history }) => <CardSet code={match.params.setId} history={history} />,
        // loadData: () => getSomeData(),
    },
];

function render(req, store, context) {
    return ReactDOMServer.renderToString(
        <Provider store={store}>
            <StaticRouter
                location={req.url}
                context={context}
            >
                <section className="Root">
                    <NavBar />
                    <Switch>
                        {routes.map(route =>
                            <Route key={route.path} {...route} />
                        )}
                    </Switch>
                </section>
            </StaticRouter>
        </Provider>,
    );
}

module.exports = {
    render,
    routes
};
