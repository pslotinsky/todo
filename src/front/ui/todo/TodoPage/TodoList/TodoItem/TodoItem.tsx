import * as React from 'react';
import autobind from 'autobind-decorator';

export interface Props {
	id?: string;
	text?: string;
	completed?: boolean;
	color?: string;
	onClick?: () => void;
}

class TodoItem extends React.Component<Props> {
	public render(): JSX.Element {
		let className = this.classes.join(' ');
		let { text, color } = this.props;
		
		return (
			<li
				className={className}
				onClick={this.onClick}
				style={{backgroundColor: color || 'none'}}
			>
				{text}
			</li>
		);
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
