import "reflect-metadata";
import * as React from 'react';
import { render } from 'react-dom';
import { createStore, Store } from 'redux';
import { Provider } from 'react-redux';

import { reducer } from './store';
import { TodoPage } from './ui/todo/components/l-todo-page/l-todo-page';
import { ioc } from './ioc';

const store: Store<any> = createStore(reducer);
const element: JSX.Element =
	<Provider store={store}>
		<TodoPage ioc={ioc} />
	</Provider>;
const root: HTMLElement = document.getElementById('root');

render(element, root);
