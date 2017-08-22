import * as React from 'react';
import autobind from 'autobind-decorator';
import './b-todo-item.css';

export interface Props {
	onClick?: () => void;
	completed?: boolean;
	text: string;
}

class TodoItem extends React.Component<Props> {
	public render(): JSX.Element {
		let text = this.props.text;
		let className = this.classes.join(' ');
		
		return <li className={className} onClick={this.onClick}>{text}</li>;
	}

	protected get classes(): string[] {
		let res = ['b-todo-item'];

		if (this.props.completed) {
			res.push('b-todo-item_completed');
		}

		return res;
	}

	@autobind
	protected onClick() {
		this.props.onClick();
	}
}

export { TodoItem };
