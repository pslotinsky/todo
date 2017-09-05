import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { v4 as uuid } from 'uuid';
import { addTodo, toggleTodo, loadTodos } from '../actions';
import { Todo } from '../types';

const reducer = reducerWithInitialState([])
	.case(addTodo, addTodoHandler)
	.case(toggleTodo, toggleTodoHandler)
	.case(loadTodos, loadTodosHandler);


function addTodoHandler(state: Todo[], text: string) {
	let todo: Todo = { id: uuid(), text };
	return [...state, todo];
}

function toggleTodoHandler(state: Todo[], id: string) {
	return state.map((todo) => (
		(todo.id == id)
			? { ...todo, completed: !todo.completed }
			: todo
	));
}

function loadTodosHandler(state: Todo[], todos: Todo[]) {
	return [...state, ...todos];
}

export default reducer;
