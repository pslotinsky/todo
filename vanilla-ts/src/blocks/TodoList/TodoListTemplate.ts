import { Todo } from "../Todo";

import { Store } from "../../models/Store";
import { TodoModel } from "../../models/TodoModel";

export class TodoListTemplate {
    public static CssClass = {
        ROOT: 'b-todo-list',
        ITEM: 'b-todo-list__item',
        FILTER_DONE: 'b-todo-list_filter_done',
        FILTER_UNDONE: 'b-todo-list_filter_undone'
    }

    public static render(): string {
        const { ROOT } = TodoListTemplate.CssClass;
        return `
            <ul class="${ROOT}">
                ${Store.getInstance().todos.getAll().map(todo =>
                    TodoListTemplate.renderItem(todo)
                )}
            </ul>
        `;
    }

    public static renderItem(todo: TodoModel): string {
        const { ITEM } = TodoListTemplate.CssClass;
        return `
            <li class="${ITEM}">
                ${Todo.render(todo)}
            </li>
        `;
    }
}
