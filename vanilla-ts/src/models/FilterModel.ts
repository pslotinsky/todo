import { EventTarget } from '../lib/EventTarget';

export enum Value {
    ALL = 'all',
    DONE = 'done',
    UNDONE = 'undone'
}

export enum Event {
    CHANGE = 'change'
}

export class FilterModel extends EventTarget<Event> {
    private value_: Value = Value.ALL;

    public hasStatus(status: Value): boolean {
        return this.value_ == status;
    }

    public get value(): Value {
        return this.value_;
    }

    public set value(value: Value) {
        this.value_ = value;
        this.dispatch(Event.CHANGE, value);
    }
}
