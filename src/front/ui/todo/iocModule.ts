import { Component } from 'react';
import { ContainerModule, interfaces } from 'inversify';
import { Type } from './Type';
import { Filter, Props as FilterProps } from
    './TodoPage/Filters/Filter/Filter';
import { Filters } from
    './TodoPage/Filters/Filters';
import { TodoForm, Props as TodoFormProps } from
    './TodoPage/TodoForm/TodoForm';
import { TodoItem, Props as TodoItemProps } from
    './TodoPage/TodoList/TodoItem/TodoItem';
import { TodoList, Props as TodoListProps } from
    './TodoPage/TodoList/TodoList';
import { FilterDecorator, Props as FilterContainerProps } from
    './TodoPage/Filters/Filter/FilterContainer';
import { TodoFormDecorator } from
    './TodoPage/TodoForm/TodoFormContainer';
import { TodoListDecorator } from
    './TodoPage/TodoList/TodoListContainer';

type Newable<T> = interfaces.Newable<T>;

export type NewableFiter = Newable<Component<FilterProps>>;
export type NewableFilters = Newable<Component>;
export type NewableTodoForm = Newable<Component<TodoFormProps>>;
export type NewableTodoItem = Newable<Component<TodoItemProps>>;
export type NewableTodoList = Newable<Component<TodoListProps>>;
export type NewableFilterContainer = Newable<Component<FilterContainerProps>>;
export type NewableTodoFormContainer = Newable<Component>;
export type NewableTodoListContainer = Newable<Component>;

export const iocModule: ContainerModule = new ContainerModule(
    (bind: interfaces.Bind) => {
        bind<NewableFiter>(Type.FILTER).toConstructor(Filter);
        bind<NewableFilters>(Type.FILTERS).toConstructor(Filters);
        bind<NewableTodoForm>(Type.TODO_FORM).toConstructor(TodoForm);
        bind<NewableTodoItem>(Type.TODO_ITEM).toConstructor(TodoItem);
        bind<NewableTodoList>(Type.TODO_LIST).toConstructor(TodoList);

        const FilterContainer = FilterDecorator(Filter);
        const TodoFormContainer = TodoFormDecorator(TodoForm);
        const TodoListContainer = TodoListDecorator(TodoList);
        
        bind<NewableFilterContainer>(Type.FILTER_CONTAINER)
            .toConstructor(FilterContainer);
        bind<NewableTodoFormContainer>(Type.TODO_FORM_CONTAINER)
            .toConstructor(TodoFormContainer);
        bind<NewableTodoListContainer>(Type.TODO_LIST_CONTAINER)
            .toConstructor(TodoListContainer);
    }
);
