import * as React from 'react';
import { TYPE as FORM_TYPE } from '../../containers/b-todo-form';
import { TYPE as LIST_TYPE } from '../../containers/b-todo-list';
import { TYPE as FILTERS_TYPE } from './b-filters/b-filters';
import { provideComponent, getComponent } from '../../../../provide';
import './l-todo-page.css';

const TYPE: symbol = Symbol('TodoPage');

@provideComponent(TYPE)
class TodoPage extends React.Component {
	public render(): JSX.Element {
		const TodoFormContainer = getComponent(FORM_TYPE);
		const TodoListContainer = getComponent(LIST_TYPE);
		const Filters = getComponent(FILTERS_TYPE);
		return (
			<div className="l-todo-page">
				<TodoFormContainer />
				<TodoListContainer />
				<Filters />
			</div>
		);
	}
}

export { TodoPage, TYPE };
