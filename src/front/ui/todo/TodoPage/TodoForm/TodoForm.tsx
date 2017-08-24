import * as React from 'react'
import autobind from 'autobind-decorator';

export interface Props {
	onSubmit?: (text: string) => void;
}

class TodoForm extends React.Component<Props> {
	private input: HTMLInputElement;

	public render(): JSX.Element {
		return (
			<form className="TodoForm" onSubmit={this.onSubmit}>
				<input
					className="TodoForm__input"
					ref={node => this.input = node}
				/>
				<button className="TodoForm__submit" type="submit">
					Add Todo
				</button>
			</form> 
		);
	}

	protected get value(): string {
		return this.input.value.trim();
	}

	protected set value(value: string) {
		this.input.value = value;
	}

	protected submit() {
		let text = this.value;
		if (text) {
			this.props.onSubmit(text);
			this.value = '';
		}	
	}

	@autobind
	protected onSubmit(event: React.FormEvent<HTMLFormElement>) {
		event.preventDefault();
		this.submit();
	}
}

export { TodoForm };
