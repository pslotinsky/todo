import { FilterTemplate } from "./FilterTemplate";

import { Store } from "../../models/Store";
import { Event as TodosEvent } from "../../models/TodoRepository";
import { Value, Event as FilterEvent } from "../../models/FilterModel";

export class Filter extends FilterTemplate {
    protected dom: {
        root: Element;
        items: Element[];
    };

    constructor(root: Element) {
        super();

        this.dom = {
            root,
            items: Array.from(root.getElementsByClassName(Filter.CssClass.ITEM))
        };

        this.startListen();
    }

    protected startListen(): void {
        this.dom.items.forEach(item => item.addEventListener('click', this.onItemClick));
        Store.getInstance().todos.listen(TodosEvent.TODO_ADDED, this.reRender, this);
        Store.getInstance().todos.listen(TodosEvent.TODO_TOGGLED, this.reRender, this);
        Store.getInstance().filter.listen(FilterEvent.CHANGE, this.reRender, this);
    }

    protected stopListen(): void {
        this.dom.items.forEach(item => item.removeEventListener('click', this.onItemClick));
        Store.getInstance().todos.unlisten(TodosEvent.TODO_ADDED, this.reRender);
        Store.getInstance().todos.unlisten(TodosEvent.TODO_TOGGLED, this.reRender);
        Store.getInstance().filter.unlisten(FilterEvent.CHANGE, this.reRender);
    }

    protected onItemClick(event: MouseEvent): void {
        const element = event.currentTarget as Element;
        Store.getInstance().filter.value = element.getAttribute('data-value') as Value;
    }

    protected reRender(): void {
        this.stopListen();
        this.dom.root.innerHTML = Filter.renderContent();
        this.dom.items = Array.from(this.dom.root.getElementsByClassName(Filter.CssClass.ITEM));
        this.startListen();
    }
}
