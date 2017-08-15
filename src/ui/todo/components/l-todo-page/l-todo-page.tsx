import * as React from 'react';
import { TodoFormContainer } from '../../containers/b-todo-form';
import { TodoListContainer } from '../../containers/b-todo-list';
import { Filters } from './b-filters/b-filters';
import './l-todo-page.css';

export class TodoPage extends React.Component {
	public render(): JSX.Element {
		return (
			<div className="l-todo-page">
				<TodoFormContainer />
				<TodoListContainer />
				<Filters />
			</div>
		);
	}
}
