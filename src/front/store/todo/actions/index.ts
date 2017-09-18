import { actionCreatorFactory } from 'typescript-fsa';
import { Todo } from '../types';

const actionCreator = actionCreatorFactory();

type SetColorPayload = { id: string, color: string };

const addTodo = actionCreator<string>('ADD_TODO');
const setVisibilityFilter = actionCreator<string>('SET_VISIBILITY_FILTER');
const toggleTodo = actionCreator<string>('TOGGLE_TODO');
const loadTodos = actionCreator<Todo[]>('LOAD_TODOS');
const setColor = actionCreator<SetColorPayload>('SET_COLOR');

export {
    addTodo,
    setVisibilityFilter,
    toggleTodo,
    loadTodos,
    setColor,
    SetColorPayload
};
