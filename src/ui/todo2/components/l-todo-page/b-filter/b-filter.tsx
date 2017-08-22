import * as React from 'react';
import { Filter } from
    '../../../../todo/components/l-todo-page/b-filter/b-filter';

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
        return [...res, 'b-filter_2'];
    }
}

export { Filter2 };
