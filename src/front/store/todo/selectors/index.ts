import { createSelector } from 'reselect';
import { Todo, Filter } from '../types';
import { Store } from '../../';

const todosSelector = (state: Store): Todo[] => state.todo.todos;
const visibilityFilterSelector = (state: Store): Filter =>
    state.todo.visibilityFilter;

export const getVisibleTodos = createSelector(
    [todosSelector, visibilityFilterSelector],
    (todos: Todo[], filter: Filter): Todo[] => {
        let res;

        switch (filter) {
            case Filter.SHOW_ALL:
                res = todos;
                break;
            case Filter.SHOW_COMPLETED:
                res = todos.filter((todo: Todo) => todo.completed);
                break;
            case Filter.SHOW_ACTIVE:
                res = todos.filter((todo: Todo) => !todo.completed);
                break;
            default:
                throw new Error(`Unknown filter: ${filter}`);
        }

        return res;
    }
);

export const getVisibilityFilter = createSelector(
    visibilityFilterSelector,
    (filter: Filter) => filter
);
