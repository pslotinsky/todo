import * as React from 'react';
import autobind from 'autobind-decorator';
import { provideComponent } from '../../../provide';

interface Props {
    children?: JSX.Element | String;
    onClick?: () => void;
    href?: string;
}

const TYPE: symbol = Symbol('Link');

@provideComponent(TYPE)
class Link extends React.Component<Props> {
    public render(): JSX.Element {
        let href = this.props.href || '#';
        let children = this.props.children || '';
        return (
            <a className="b-link" href={href} onClick={this.onClick}>
                {children}
            </a>
        );
    }

    @autobind
    protected onClick(event: React.MouseEvent<HTMLElement>): void {
        if (this.props.onClick) {
            event.preventDefault();
            this.props.onClick();
        }
    }
}

export { Props, TYPE, Link };
