import { combineReducers } from 'redux';
import todo from './todo/reducers';
import app from './app/reducers/index';
import { TodoStore } from './todo/types';

export const reducer = combineReducers({
    todo,
    app
});

export interface Store {
    todo: TodoStore
}
