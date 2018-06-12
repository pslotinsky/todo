import { TodoModel } from "../../models/TodoModel";
import { DomHelper } from "../../lib/DomHelper";

export class TodoTemplate {
    public static CssClass = {
        ROOT: 'b-todo',
        DONE: 'b-todo_done'
    }

    public static render({ id, text, done }: TodoModel): string {
        const { ROOT, DONE } = TodoTemplate.CssClass;

        const classes = DomHelper.combineClasses(
            ROOT,
            done && DONE
        );

        return `
            <div class="${classes}" data-id="${id}">
                ${text}
            </div>
        `;
    }
}
