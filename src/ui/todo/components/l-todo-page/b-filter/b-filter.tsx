import * as React from 'react';
import autobind from 'autobind-decorator';
import { provideComponent, getComponent } from '../../../../../provide';
import { TYPE as LINK_TYPE } from '../../../../common/b-link/b-link';
import './b-filter.css';

interface Props {
    active?: Boolean;
    children?: JSX.Element | String;
    onClick?: () => void;
}

const TYPE: symbol = Symbol('Filter');

@provideComponent(TYPE)
class Filter extends React.Component<Props> {
	public constructor(props?: Props, context?: any) {
		super(props, context);
	}

	public render(): JSX.Element {
		let className = this.getClasses().join(' ');
		return <div className={className}>{this.renderContent()}</div>;
	}

	protected renderContent(): JSX.Element {
		const Link = getComponent(LINK_TYPE);
		const { active, children } = this.props;
		return active
			? <span>{children}</span>
			: <Link onClick={this.onClick}>{children}</Link>;
	}

	protected getClasses(): string[] {
		let classes = ['b-filter'];

		if (this.props.active) {
			classes.push('b-filter_active');
		}

		return classes;
	}

	@autobind
	protected onClick(): void {
		this.props.onClick();
	}
}

export { Props, TYPE, Filter };
