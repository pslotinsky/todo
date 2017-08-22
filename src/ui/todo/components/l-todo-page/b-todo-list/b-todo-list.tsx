import * as React from 'react';
import { Container } from 'inversify';
import { Type } from '../../../Type';

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
		const ioc: Container = this.context.ioc;
		const TodoItem = ioc.get<any>(Type.TODO_ITEM);
		let { todos, onItemClick } = this.props;
		return (
			<ul className="b-todo-list">
				{todos.map(todo =>
					<TodoItem
						key={todo.id}
						text={todo.text}
						completed={todo.completed}
						onClick={() => onItemClick(todo.id)}
					/>
				)}
			</ul>
		);
	}
}

export { TodoList };
