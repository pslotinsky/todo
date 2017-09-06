import * as React from 'react';
import autobind from 'autobind-decorator';
import { inject } from '../../../../../ioc';
import { ILink } from '../../../../common/Link/Link';

interface FilterProps {
    active?: Boolean;
    children?: JSX.Element | String;
    onClick?: () => void;
}

interface IFilter extends React.Component<FilterProps> {
}

class Filter extends React.Component<FilterProps> implements IFilter {
	@inject('ILink')
	private Link: new () => ILink;

	public render(): JSX.Element {
		let className = this.getClasses().join(' ');
		return <div className={className}>{this.renderContent()}</div>;
	}

	protected renderContent(): JSX.Element {
		const { Link } = this;
		const { active, children } = this.props;
		return active
			? <span>{children}</span>
			: <Link onClick={this.onClick}>{children}</Link>;
	}

	protected getClasses(): string[] {
		let classes = ['Filter'];

		if (this.props.active) {
			classes.push('Filter_active');
		}

		return classes;
	}

	@autobind
	protected onClick(): void {
		this.props.onClick();
	}
}

export { FilterProps, IFilter, Filter };
