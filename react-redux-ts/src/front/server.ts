import { renderToString } from 'react-dom/server';
import { Store } from 'react-redux';
import { v4 as uuid } from 'uuid';
import { create as createStore, State } from './store';
import { createApp } from './app';
import { RequestManager } from './lib/Request/RequestManager';

function renderHtml(app: JSX.Element, store: Store<State>): string {
    console.log('<< render html >>');
    let html = `
        <!doctype html>
        <html lang="en">
            <head>
                <meta charset="utf-8">
                <meta name="viewport"
                      content="width=device-width, initial-scale=1">
                <title>Todos</title>
                <link href="styles.css" media="all" rel="stylesheet">
            </head>
            <body>
                <div id="root"><div>${renderToString(app)}</div></div>
                <script>__STATE__=${JSON.stringify(store.getState())};</script>
                <script src="bundle.js"></script>
            </body>
        </html>`;

    return html.trim();
}

function renderHtmlAsync(
    app: JSX.Element,
    store: Store<State>,
    guid: string
): Promise<string> {
    return new Promise((resolve: (html: string) => void) => {
        let hasWaitingRequests = RequestManager.hasWaitingRequests(guid);
        store.subscribe(() => {
            if (hasWaitingRequests && !RequestManager.hasWaitingRequests(guid)) {
                hasWaitingRequests = RequestManager.hasWaitingRequests(guid);
                let res = renderHtml(app, store);
                resolve(res);
            }
        });
    });
}

export async function render(): Promise<string> {
    let store = createStore();
    let guid = uuid();
    let app = createApp(store, guid);

    RequestManager.createCache(guid);
    let res = renderHtml(app, store);
    while (RequestManager.hasWaitingRequests(guid)) {
        res = await renderHtmlAsync(app, store, guid);
    }
    RequestManager.removeCache(guid);

    return res;
}
