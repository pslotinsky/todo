import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { v4 as uuid } from 'uuid';
import { uniqBy } from 'lodash';
import { Todo } from '../types';
import {
	addTodo,
	toggleTodo,
	loadTodos,
	setColor,
	SetColorPayload
} from '../actions';

const initialState: Todo[] = (typeof window != 'undefined')
	? window['__STATE__'].todo.todos
	: [];

const reducer = reducerWithInitialState(initialState)
	.case(addTodo, addTodoHandler)
	.case(toggleTodo, toggleTodoHandler)
	.case(loadTodos, loadTodosHandler)
	.case(setColor, setColorHandler);


function addTodoHandler(state: Todo[], text: string): Todo[] {
	let todo: Todo = { id: uuid(), text };
	return uniqBy([...state, todo], 'id');
}

function toggleTodoHandler(state: Todo[], id: string): Todo[] {
	return state.map((todo) => (
		(todo.id == id)
			? { ...todo, completed: !todo.completed }
			: todo
	));
}

function loadTodosHandler(state: Todo[], todos: Todo[]): Todo[] {
	return uniqBy([...state, ...todos], 'id');
}

function setColorHandler(state: Todo[], data: SetColorPayload): Todo[] {
	let { id, color } = data;
	return state.map(todo => (todo.id == id) ? {...todo, color} : todo);
}

export default reducer;
