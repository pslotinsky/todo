import * as React from 'react';
import autobind from 'autobind-decorator';
import './TodoItem.css';

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
		let res = ['TodoItem'];

		if (this.props.completed) {
			res.push('TodoItem_completed');
		}

		return res;
	}

	@autobind
	protected onClick() {
		this.props.onClick();
	}
}

export { TodoItem };
