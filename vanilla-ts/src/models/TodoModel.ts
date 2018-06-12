import { EventTarget } from '../lib/EventTarget';

export enum Event {
    DONE = 'done',
    UNDONE = 'undone'
}

export class TodoModel extends EventTarget<Event> {
    public id: number;
    public text: string;
    public done: boolean;

    constructor({
        id = Date.now(),
        text = '',
        done = false
    }: Partial<TodoModel>) {
        super();

        this.id = id;
        this.text = text;
        this.done = done;
    }

    public toggle(): void {
        this.done = !this.done;
        this.done
            ? this.dispatch(Event.DONE)
            : this.dispatch(Event.UNDONE);
    }

    public check(conditions?: Partial<TodoModel>): boolean {
        return Object.keys(conditions).every(key => conditions[key] == this[key]);
    }
}
