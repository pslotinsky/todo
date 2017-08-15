import * as React from 'react';

export interface Props {
    children?: JSX.Element | String;
    onClick?: () => void;
    href?: string;
}

export class Link extends React.Component<Props> {
    public render(): JSX.Element {
        let href = this.props.href || '#';
        let children = this.props.children || '';
        return (
            <a className="b-link"
                href={href}
                onClick={(event) => this.onClick(event)}>
                {children}
            </a>
        );
    }

    protected onClick(event: React.MouseEvent<HTMLElement>): void {
        if (this.props.onClick) {
            event.preventDefault();
            this.props.onClick();
        }
    }
}
