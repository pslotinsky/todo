import { Store } from '../../models/Store';
import { TodoModel } from '../../models/TodoModel';
import { Value } from '../../models/FilterModel';
import { DomHelper } from '../../lib/DomHelper';

export class FilterTemplate {
    public static CssClass = {
        ROOT: 'b-filter',
        ITEM: 'b-filter__item',
        ACTIVE: 'b-filter__item_active',
        COUNT: 'b-filter__count',
        LABEL: 'b-filter__label'
    }

    public static render(): string {
        const { ROOT } = FilterTemplate.CssClass;
        return `<ul class="${ROOT}">${this.renderContent()}</ul>`;
    }

    protected static renderContent(): string {
        return `
            ${FilterTemplate.renderItem('All', Value.ALL)}
            ${FilterTemplate.renderItem('In progress', Value.UNDONE, { done: false })}
            ${FilterTemplate.renderItem('Done', Value.DONE, { done: true })}
        `;
    }

    protected static renderItem(
        label: string,
        value: Value,
        conditions?: Partial<TodoModel>
    ): string {
        const { ITEM, COUNT, LABEL, ACTIVE } = FilterTemplate.CssClass;
        const classes = DomHelper.combineClasses(
            ITEM,
            Store.getInstance().filter.value == value && ACTIVE
        );
        return `
            <li class="${classes}" data-value="${value}">
                <span class="${LABEL}">
                    ${label}
                </span>
                <span class="${COUNT}">
                    ${Store.getInstance().todos.count(conditions)}
                </span>
            </li>
        `;
    }
}
