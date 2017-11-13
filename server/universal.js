const path = require('path');
const fs = require('fs');
const { default: Helmet } = require('react-helmet');

const { render } = require('./serverRender');
const { default: configuredStore } = require('../src/core/store');

module.exports = function universalLoader(req, res) {
    const filePath = path.resolve(__dirname, '..', 'build', 'index.html');

    fs.readFile(filePath, 'utf8', (err, htmlData) => {
        if (err) {
            console.error('read err', err);
            return res.status(404).end();
        }

        return serverRender(req, res, htmlData)
            .catch(e => {
                console.error('Render Error', e.message);
                return res.status(500).json({ message: `Render Error: ${e.message}` });
            });
    });
};

// this does most of the heavy lifting
async function serverRender(req, res, htmlData) {
    const context = { data: {}, head: [], req };
    const store = configuredStore;
    // first
    render(req, store, context);

    // handle our data fetching
    const keys = Object.keys(context.data);
    const promises = keys.map(k => context.data[ k ]);
    const resolved = await Promise.all(promises);

    resolved.forEach((r, i) => {
        context.data[ keys[ i ] ] = r;
    });

    // second
    const markup = render(req, store, context);
    const helmet = Helmet.renderStatic();

    // we're good, add in markup, send the response
    const RenderedApp = htmlData.replace('{{SSR}}', markup)
        .replace(
            '<meta-head/>',
            `${helmet.meta.toString()}`
        )
        .replace('{{DATA}}', new Buffer(JSON.stringify(store.getState())).toString('base64'));

    return res.send(RenderedApp);
}
