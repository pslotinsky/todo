import { TodoFromTemplate } from './TodoFromTemplate';

import { Store } from "../../models/Store";
import { TodoModel } from '../../models/TodoModel';

export class TodoFrom extends TodoFromTemplate {
    private dom: {
        root: HTMLFormElement;
        input: HTMLInputElement;
    };

    constructor(root: Element) {
        super();

        this.dom = {
            root: root as HTMLFormElement,
            input: root.getElementsByClassName(TodoFrom.CssClass.INPUT)[0] as HTMLInputElement
        };

        this.init();
    }

    protected init(): void {
        this.dom.root.addEventListener('submit', event => this.onSubmit(event));
    }

    protected onSubmit(event: Event): void {
        const text = this.dom.input.value;
        const todo = new TodoModel({ text });
        Store.getInstance().todos.save(todo);
        this.dom.input.value = '';

        event.preventDefault();
    }
}
