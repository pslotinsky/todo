export interface Todo {
    id?: string;
    text: string;
    completed?: boolean;
}

export enum Filter {
    SHOW_ALL = 'SHOW_ALL',
    SHOW_COMPLETED = 'SHOW_COMPLETED',
    SHOW_ACTIVE = 'SHOW_ACTIVE'
}

export interface TodoStore {
    todos: Todo[];
    visibilityFilter: Filter;
}
