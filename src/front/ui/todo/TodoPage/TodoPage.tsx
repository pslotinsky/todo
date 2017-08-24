import * as React from 'react';
import { Container } from 'inversify';
import { Type } from '../Type';
import {
	NewableTodoFormContainer,
	NewableTodoListContainer,
	NewableFilters
} from '../iocModule';
// import './TodoPage.css';

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
		const TodoFormContainer =
			ioc.get<NewableTodoFormContainer>(Type.TODO_FORM_CONTAINER);
		const TodoListContainer =
			ioc.get<NewableTodoListContainer>(Type.TODO_LIST_CONTAINER);
		const Filters =
			ioc.get<NewableFilters>(Type.FILTERS);
		return (
			<div className="TodoPage">
				<TodoFormContainer />
				<TodoListContainer />
				<Filters />
			</div>
		);
	}
}

export { TodoPage };
