import * as React from 'react';
import { Container } from 'inversify';
import autobind from 'autobind-decorator';
import { Type } from '../../../../common/Type';
import './b-filter.css';

interface Props {
    active?: Boolean;
    children?: JSX.Element | String;
    onClick?: () => void;
}

class Filter extends React.Component<Props> {
	static get contextTypes() {
		return { ioc: Container };
	}

	public render(): JSX.Element {
		let className = this.getClasses().join(' ');
		return <div className={className}>{this.renderContent()}</div>;
	}

	protected renderContent(): JSX.Element {
		const ioc: Container = this.context.ioc;
		const Link = ioc.get<any>(Type.LINK);
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

export { Props, Filter };
