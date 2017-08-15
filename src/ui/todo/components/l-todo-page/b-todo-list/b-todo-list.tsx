import * as React from 'react';
import { TodoItem } from '../b-todo-item/b-todo-item';

export interface Props {
	todos?: {
		id?: string,
		text: string,
		completed?: boolean
	}[];
	onItemClick?: (id: string) => void;
};

export class TodoList extends React.Component<Props> {
	public render(): JSX.Element {
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
