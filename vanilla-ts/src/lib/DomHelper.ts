export class DomHelper {
    public static clearHtml(html: string): string {
        return html.trim()
            .split(/>[\s]*</g)
            .join('><');
    }

    public static createElementFromHtml(html: string): Element {
        const div = document.createElement('div');
        div.innerHTML = html.trim();
        return div.firstChild as Element;
    }

    public static combineClasses(...args: string[]): string {
        return args.filter(arg => arg).join(' ');
    }
}
