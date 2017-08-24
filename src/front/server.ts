import { renderToString } from 'react-dom/server';
import { root } from './root';

export function render(): string {
    let html = `
        <!doctype html>
        <html lang="en">
            <head>
                <meta charset="utf-8">
                <meta name="viewport" content="width=device-width, initial-scale=1">
                <title>Todos</title>
            </head>
            <body>
                <div id="root">${renderToString(root)}</div>
                <script src="bundle.js"></script>
            </body>
        </html>`;

    return html.trim();
}
