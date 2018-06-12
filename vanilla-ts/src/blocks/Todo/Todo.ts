import { TodoTemplate } from './TodoTemplate';

import { Store } from '../../models/Store';
import { TodoModel, Event } from '../../models/TodoModel';

export class Todo extends TodoTemplate {
    private dom: {
        root: Element
    };

    constructor(root: Element) {
        super();

        this.dom = { root };

        this.init();
    }

    protected get model(): TodoModel {
        const id = Number(this.dom.root.getAttribute('data-id'));
        return Store.getInstance().todos.getById(id);
    }

    protected init(): void {
        this.dom.root.addEventListener('click', () => this.model.toggle());
        this.model.listen(Event.DONE, this.onDone, this);
        this.model.listen(Event.UNDONE, this.onUndone, this);
    }

    protected onDone(): void {
        this.dom.root.classList.add(Todo.CssClass.DONE);
    }

    protected onUndone(): void {
        this.dom.root.classList.remove(Todo.CssClass.DONE);
    }
}
