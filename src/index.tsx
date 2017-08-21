import "reflect-metadata";
import * as React from 'react';
import { render } from 'react-dom';
import { createStore, Store } from 'redux';
import { Provider } from 'react-redux';

import { reducer } from './store';
import { getComponent } from './provide';

import { TYPE } from './ui/todo/components/l-todo-page/l-todo-page';
import './ui/common';
import './ui/todo';
import './ui/todo2';

const store: Store<any> = createStore(reducer);
const TodoPage = getComponent(TYPE);
const element: JSX.Element =
	<Provider store={store}>
		<TodoPage />
	</Provider>;
const root: HTMLElement = document.getElementById('root');

render(element, root);
