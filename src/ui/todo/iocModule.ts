import { ContainerModule, interfaces } from 'inversify';
import { Type } from './Type';
import { Filter } from './components/l-todo-page/b-filter/b-filter';
import { Filters } from './components/l-todo-page/b-filters/b-filters';
import { TodoForm } from './components/l-todo-page/b-todo-form/b-todo-form';
import { TodoItem } from './components/l-todo-page/b-todo-item/b-todo-item';
import { TodoList } from './components/l-todo-page/b-todo-list/b-todo-list';
import { FilterDecorator } from './containers/b-filter';
import { TodoFormDecorator } from './containers/b-todo-form';
import { TodoListDecorator } from './containers/b-todo-list';

export const iocModule: ContainerModule = new ContainerModule(
    (bind: interfaces.Bind) => {
        bind<Filter>(Type.FILTER).toConstructor(Filter);
        bind<Filters>(Type.FILTERS).toConstructor(Filters);
        bind<TodoForm>(Type.TODO_FORM).toConstructor(TodoForm);
        bind<TodoItem>(Type.TODO_ITEM).toConstructor(TodoItem);
        bind<TodoList>(Type.TODO_LIST).toConstructor(TodoList);

        const FilterContainer = FilterDecorator(Filter);
        const TodoFormContainer = TodoFormDecorator(TodoForm);
        const TodoListContainer = TodoListDecorator(TodoList);
        bind<Filter>(Type.FILTER_CONTAINER).toConstructor(FilterContainer);
        bind<TodoForm>(Type.TODO_FORM_CONTAINER)
            .toConstructor(TodoFormContainer);
        bind<TodoList>(Type.TODO_LIST_CONTAINER)
            .toConstructor(TodoListContainer);
    }
);
