import "reflect-metadata";
import "babel-core/register";
import "babel-polyfill";
import * as React from 'react';
import { Provider, Store } from 'react-redux';

import { State } from './store';
import { ioc } from './ioc';
import { TodoPage } from './ui/todo/TodoPage/TodoPage';

function createApp(store: Store<State>, guid?: string) {
	store.subscribe(() => {
		console.log(store.getState().app.lastAction);
	});

	let res: JSX.Element = (
		<Provider store={store}>
			<TodoPage ioc={ioc} appGuid={guid} />
		</Provider>
	);

	return res;
}

export { createApp };
