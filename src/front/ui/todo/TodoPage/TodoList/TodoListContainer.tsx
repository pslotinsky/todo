import * as React from 'react';
import { connect, Dispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../../../store/todo/actions';
import { Props } from './TodoList';
import { getVisibleTodos } from '../../../../store/todo/selectors';
import { Store } from '../../../../store';
import { Todo } from '../../../../store/todo/types';
import { TodoList } from './TodoList';
import { TodoService } from '../../../../store/todo/services/TodoService';

interface ContainerProps {
    todos?: Todo[];
    loadTodos?: (todos: Todo[]) => void;
    toggleTodo?: (id: string) => void;
}

class TodoListContainer extends React.Component<ContainerProps> {
    async componentDidMount(): Promise<void> {
        let todoService = new TodoService();
        let todos = await todoService.getList();
        this.props.loadTodos(todos);
    }

    render(): JSX.Element {
        let { todos, toggleTodo } = this.props;
        return (
            <TodoList
                todos={todos}
                onItemClick={(id: string) => toggleTodo(id)}
            />
        );
    }
}

const ConnectedTodoList =
    connect(mapStateToProps, mapDispatchToProps)(TodoListContainer);

function mapStateToProps(state: Store): Props {
	return { todos: getVisibleTodos(state) };
};

function mapDispatchToProps(
    dispatch: Dispatch<any>,
    ownProps: ContainerProps
): ContainerProps {
    let { toggleTodo, loadTodos } = actions;
    return bindActionCreators({ toggleTodo, loadTodos }, dispatch);
}

export { ConnectedTodoList, ContainerProps };
