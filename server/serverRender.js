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
                        <Route
                            exact
                            path="/search"
                            component={Suggester}
                        />
                        <Route
                            exact
                            path="/decks"
                            component={Decks}
                        />
                        <Route
                            exact
                            path="/decks/:id"
                            component={({match}) => <DeckInfo deckId={match.params.id} />}
                        />
                        <Route
                            exact
                            path="/decks/:id/edit"
                            component={({match}) => <DeckBuilder deckId={match.params.id} />}
                        />
                        <Route
                            exact
                            path="/cards"
                            component={Cards}
                        />
                        <Route
                            exact
                            path="/cards/:id"
                            component={
                                ({match, history}) => <CardInfo cardId={match.params.id} history={history} />
                            }
                        />
                        <Route
                            exact
                            path="/favorites"
                            component={Favorites}
                        />
                        <Route
                            exact
                            path="/deck/add"
                            component={DeckBuilder}
                        />
                        <Route
                            exact
                            path="/browse"
                            component={CardSets}
                        />
                        <Route
                            exact
                            path="/browse/:setId"
                            component={
                                ({match, history}) => <CardSet code={match.params.setId} history={history} />
                            }
                        />
                    </Switch>
                </section>
            </StaticRouter>
        </Provider>,
    );
}

module.exports = {
    render
};
