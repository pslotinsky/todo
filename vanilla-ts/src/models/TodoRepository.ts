import { TodoModel, Event as TodoEvent } from './TodoModel';

import { EventTarget } from '../lib/EventTarget';

export enum Event {
    TODO_ADDED = 'todo-added',
    TODO_TOGGLED = 'todo-toggle'
}

export class TodoRepository extends EventTarget<Event> {
    private todos: TodoModel[] = [];

    public getAll(conditions?: Partial<TodoModel>): TodoModel[] {
        return conditions
            ? this.todos.filter(item => item.check(conditions))
            : this.todos;
    }

    public getById(id: number): TodoModel | undefined {
        return this.todos.find(item => item.id == id);
    }

    public save(todo: TodoModel): void {
        if (!this.getById(todo.id)) {
            this.add(todo);
        }
    }

    public count(conditions?: Partial<TodoModel>): number {
        return this.getAll(conditions).length;
    }

    protected add(todo: TodoModel): void {
        todo.listen(TodoEvent.DONE, () => this.dispatch(Event.TODO_TOGGLED));
        todo.listen(TodoEvent.UNDONE, () => this.dispatch(Event.TODO_TOGGLED));
        this.todos.push(todo);
        this.dispatch(Event.TODO_ADDED, todo);
    }
}
