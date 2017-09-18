export interface Todo {
    id?: string;
    text: string;
    completed?: boolean;
    color?: string;
}

export enum Filter {
    SHOW_ALL = 'SHOW_ALL',
    SHOW_COMPLETED = 'SHOW_COMPLETED',
    SHOW_ACTIVE = 'SHOW_ACTIVE'
}

export interface TodoState {
    todos: Todo[];
    visibilityFilter: Filter;
}
