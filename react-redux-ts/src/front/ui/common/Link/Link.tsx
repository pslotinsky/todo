import * as React from 'react';
import autobind from 'autobind-decorator';

interface LinkProps {
    children?: JSX.Element | String;
    onClick?: () => void;
    href?: string;
}

interface ILink extends React.Component<LinkProps> {
}

class Link extends React.Component<LinkProps> implements ILink {
    public render(): JSX.Element {
        let href = this.props.href || '#';
        let children = this.props.children || '';
        return (
            <a className="Link" href={href} onClick={this.onClick}>
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

export { LinkProps, ILink, Link };
