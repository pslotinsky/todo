import * as React from 'react';
import { TYPE as ITEM_TYPE } from '../b-todo-item/b-todo-item';
import { provideComponent, getComponent } from '../../../../../provide';

export interface Props {
	todos?: {
		id?: string,
		text: string,
		completed?: boolean
	}[];
	onItemClick?: (id: string) => void;
};

const TYPE: symbol = Symbol('TodoList');

@provideComponent(TYPE)
class TodoList extends React.Component<Props> {
	public render(): JSX.Element {
		const TodoItem = getComponent(ITEM_TYPE);
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

export { TodoList, TYPE };
