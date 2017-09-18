import { combineReducers, createStore, Store } from 'redux';
import todo from './todo/reducers';
import app from './app/reducers/index';
import { TodoState } from './todo/types';

export interface State {
    todo?: TodoState;
    app?: any;
}

export function create(): Store<State> {
    const reducer = combineReducers({
        todo,
        app
    });
    return createStore(reducer);
}
