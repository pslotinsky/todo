import * as React from 'react';
import { Container } from 'inversify';
import autobind from 'autobind-decorator';
import { Type } from '../../../../common/Type';
import { NewableLink } from '../../../../common/iocModule';
import './Filter.css';

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
		const Link = ioc.get<NewableLink>(Type.LINK);
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

export { Props, Filter };