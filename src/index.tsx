import * as React from 'react'
import { render } from 'react-dom'
import { createStore, Store } from 'redux'
import { Provider } from 'react-redux'
import { TodoPage } from './ui/todo/components/l-todo-page/l-todo-page'
import { reducer } from './store'

const store: Store<any> = createStore(reducer);
const element: JSX.Element =
	<Provider store={store}>
		<TodoPage />
	</Provider>;
const root: HTMLElement = document.getElementById('root');

render(element, root);
