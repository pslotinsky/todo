import { TodoRepository } from "./TodoRepository";
import { FilterModel } from "./FilterModel";

export class Store {
    private static instance: Store;

    public static getInstance(): Store {
        Store.instance = Store.instance || new Store();
        return Store.instance;
    }

    public todos: TodoRepository = new TodoRepository();
    public filter: FilterModel = new FilterModel();
}
