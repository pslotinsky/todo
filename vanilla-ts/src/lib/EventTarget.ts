export type Handler = (data?: any) => void;

export class EventTarget<T = string> {
    private handlersMap: Map<T, Handler[]> = new Map();
    private contextsMap: Map<Handler, any> = new Map();

    public listen(eventName: T, handler: Handler, context: any = null): void {
        const handlers = this.getHandlers(eventName);
        this.setHandlers(eventName, [...handlers, handler]);
        this.setContext(handler, context);
    }

    public unlisten(eventName: T, handler?: Handler): void {
        const handlers = handler
            ? this.getHandlers(eventName).filter(item => item != handler)
            : [];
        this.setHandlers(eventName, handlers)
        this.setContext(handler, null);
    }

    public dispatch(eventName: T, data?: any): void {
        this.getHandlers(eventName).forEach(handler => this.runHandler(handler, data));
    }

    private getHandlers(eventName: T): Handler[] {
        return this.handlersMap.get(eventName) || [];
    }

    private setHandlers(eventName: T, handlers: Handler[]): void {
        this.handlersMap.set(eventName, handlers);
    }

    private runHandler(handler: Handler, data?: any): any {
        const context = this.contextsMap.get(handler);
        return context ? handler.call(context, data) : handler(data);
    }

    private setContext(handler: Handler, context: any): void {
        this.contextsMap.set(handler, context);
    }
}
