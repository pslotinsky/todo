import { TodoFrom } from "../TodoFrom";
import { TodoList } from "../TodoList";
import { Filter } from "../Filter";

export class AppTemplate {
    public static CssClass = {
        ROOT: 'b-app',
        FILTER: 'b-app__filter',
        TODO_FORM: 'b-app__todo-form',
        TODO_LIST: 'b-app__todo-list'
    }

    public static render(): string  {
        const { ROOT, FILTER, TODO_FORM, TODO_LIST } = AppTemplate.CssClass;
        return `
            <div class="${ROOT}">
                <div class="${FILTER}">
                    ${Filter.render()}
                </div>
                <div class="${TODO_FORM}">
                    ${TodoFrom.render()}
                </div>
                <div class="${TODO_LIST}">
                    ${TodoList.render()}
                </div>
            </div>
        `;
    }
}
