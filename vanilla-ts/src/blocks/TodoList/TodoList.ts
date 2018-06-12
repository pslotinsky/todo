import { TodoListTemplate } from './TodoListTemplate';

import { Todo } from '../Todo';

import { Store } from '../../models/Store';
import { Event as TodosEvent } from '../../models/TodoRepository';
import { TodoModel } from '../../models/TodoModel';
import { Event as FilterEvent, Value } from '../../models/FilterModel';
import { DomHelper } from '../../lib/DomHelper';

export class TodoList extends TodoListTemplate {
    private dom: {
        root: Element;
    };

    private items: Todo[];

    constructor(root: Element) {
        super();

        this.dom = { root };

        const itemRoots = Array.from(root.getElementsByClassName(Todo.CssClass.ROOT));
        this.items = itemRoots.map(root => new Todo(root));

        this.init();
    }

    public init(): void {
        Store.getInstance().todos.listen(TodosEvent.TODO_ADDED, this.onTodoAdded, this);
        Store.getInstance().filter.listen(FilterEvent.CHANGE, this.onFilterChanged, this);
    }

    protected onTodoAdded(data: TodoModel): void {
        const itemElement = DomHelper.createElementFromHtml(TodoList.renderItem(data))
        this.dom.root.appendChild(itemElement);

        const todoElement = itemElement.getElementsByClassName(Todo.CssClass.ROOT)[0];
        const todo = new Todo(todoElement);
        this.items.push(todo);
    }

    protected onFilterChanged(status: Value) {
        const { FILTER_DONE, FILTER_UNDONE } = TodoList.CssClass;

        switch (status) {
            case Value.DONE:
                this.dom.root.classList.add(FILTER_DONE);
                this.dom.root.classList.remove(FILTER_UNDONE);
                break;

            case Value.UNDONE:
                this.dom.root.classList.remove(FILTER_DONE);
                this.dom.root.classList.add(FILTER_UNDONE);
                break;

            default:
                this.dom.root.classList.remove(FILTER_DONE);
                this.dom.root.classList.remove(FILTER_UNDONE);
                break;
        }
    }
}
