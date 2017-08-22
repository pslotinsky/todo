import * as React from 'react';
import { Container } from 'inversify';
import { Type } from '../../Type';
import './l-todo-page.css';

interface Props {
    ioc?: Container;
}

class TodoPage extends React.Component<Props> {
	static get childContextTypes() {
		return { ioc: Container };
	}

	getChildContext(): Props {
		return { ioc: this.props.ioc };
	}

	public render(): JSX.Element {
		const ioc = this.props.ioc;
		const TodoFormContainer = ioc.get<any>(Type.TODO_FORM_CONTAINER);
		const TodoListContainer = ioc.get<any>(Type.TODO_LIST_CONTAINER);
		const Filters = ioc.get<any>(Type.FILTERS);
		return (
			<div className="l-todo-page">
				<TodoFormContainer />
				<TodoListContainer />
				<Filters />
			</div>
		);
	}
}

export { TodoPage };
