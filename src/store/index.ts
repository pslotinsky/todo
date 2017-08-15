import { combineReducers } from 'redux';
import todo from './todo/reducers';
import { TodoStore } from './todo/types';

export const reducer = combineReducers({
  	todo
});

export interface Store {
    todo: TodoStore
}
