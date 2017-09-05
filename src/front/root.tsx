import "reflect-metadata";
import "babel-core/register";
import "babel-polyfill";
import * as React from 'react';
import { createStore, Store } from 'redux';
import { Provider } from 'react-redux';

import { reducer } from './store';
import { TodoPage } from './ui/todo/TodoPage/TodoPage';
import { ioc } from './ioc';

const store: Store<any> = createStore(reducer);
const root: JSX.Element = (
	<Provider store={store}>
		<TodoPage ioc={ioc} />
	</Provider>
);

store.subscribe(() => {
	console.log(store.getState());
});

export { root };
