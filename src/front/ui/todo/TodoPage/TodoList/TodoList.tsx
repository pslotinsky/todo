import * as React from 'react';
import { Container } from 'inversify';
// import { Type } from '../../Type';
// import { NewableTodoItem } from '../../iocModule';
import { ConnectedTodoItem } from './TodoItem/TodoItemContainer';

export interface Props {
	todos?: {
		id?: string,
		text: string,
		completed?: boolean
	}[];
	onItemClick?: (id: string) => void;
};

class TodoList extends React.Component<Props> {
	static get contextTypes() {
		return { ioc: Container };
	}

	public render(): JSX.Element {
		// const ioc: Container = this.context.ioc;
		// const TodoItem = ioc.get<NewableTodoItem>(Type.TODO_ITEM);
		let { todos, onItemClick } = this.props;
		return (
			<ul className="TodoList">
				{todos.map(todo =>
					<ConnectedTodoItem
						{...todo}
						key={todo.id}
						onClick={() => onItemClick(todo.id)}
					/>
				)}
			</ul>
		);
	}
}

export { TodoList };
