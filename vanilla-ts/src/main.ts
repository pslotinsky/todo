import { App } from './blocks/App';
import { DomHelper } from './lib/DomHelper';

if (typeof document != 'undefined') {
    const root = document.getElementsByClassName(App.CssClass.ROOT)[0];
    new App(root);
}

export function render(): string {
    return DomHelper.clearHtml(`
        <!DOCTYPE html>
        <html>
            <head>
                <link href="styles.css" rel="stylesheet">
                <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet">
            </head>
            <body>
                ${App.render()}
                <script src="scripts.js"></script>
            </body>
        </html>
    `);
}
