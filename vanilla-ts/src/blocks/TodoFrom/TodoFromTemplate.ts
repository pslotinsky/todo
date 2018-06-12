export class TodoFromTemplate {
    public static CssClass = {
        ROOT: 'b-todo-form',
        INPUT: 'b-todo-form__input'
    };

    public static render(): string {
        const { ROOT, INPUT } = TodoFromTemplate.CssClass;
        return `
            <form class="${ROOT}">
                <input class="${INPUT}" />
            </form>
        `;
    }
}
