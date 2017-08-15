import * as React from 'react';
import autobind from 'autobind-decorator';
import { Link } from '../../../../common/b-link/b-link';
import './b-filter.css';

export interface Props {
    active?: Boolean;
    children?: JSX.Element | String;
    onClick?: () => void;
}

export class Filter extends React.Component<Props> {
	public render(): JSX.Element {
		let className = this.classes.join(' ');
		let { active, children } = this.props;

		return (
			<div className={className}>
				{active
					? <span>{children}</span>
					: <Link onClick={this.onClick}>{children}</Link>}
			</div>
		);
	}

	protected get classes(): string[] {
		let classes = ['b-filter'];

		if (this.props.active) {
			classes.push('b-filter_active');
		}

		return classes;
	}

	@autobind
	protected onClick() {
		this.props.onClick();
	}
}
