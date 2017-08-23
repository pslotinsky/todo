import * as React from 'react';
import { Filter } from
    '../../../../todo/TodoPage/Filters/Filter/Filter';

class Filter2 extends Filter {
    /** @override */
    protected renderContent(): JSX.Element {
		let { active, children } = this.props;
		return (
            <label>
                <input
                    type="checkbox"
                    checked={!!active}
                    onClick={this.onClick}
                />
                {children}
            </label>
        );
    }
    
    /** @override */
    protected getClasses(): string[] {
        let res = super.getClasses();
        return [...res, 'Filter_2'];
    }
}

export { Filter2 };
