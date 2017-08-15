import { actionCreatorFactory } from 'typescript-fsa';

const actionCreator = actionCreatorFactory();

const addTodo = actionCreator<string>('ADD_TODO');
const setVisibilityFilter = actionCreator<string>('SET_VISIBILITY_FILTER');
const toggleTodo = actionCreator<string>('TOGGLE_TODO');

export { addTodo, setVisibilityFilter, toggleTodo };
