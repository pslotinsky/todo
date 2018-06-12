import * as React from 'react';
import { connect, Dispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../../../store/todo/actions';
import { Props, TodoList } from './TodoList';
import { getVisibleTodos } from '../../../../store/todo/selectors';
import { State } from '../../../../store';
import { Todo } from '../../../../store/todo/types';
import { TodoService } from '../../../../store/todo/services/TodoService';
import { withContext } from '../../../../lib/decorators';

interface ContainerProps {
    todos?: Todo[];
    loadTodos?: (todos: Todo[]) => void;
    toggleTodo?: (id: string) => void;
}

@withContext
class TodoListContainer extends React.Component<ContainerProps> {
    async componentWillMount(): Promise<void> {
        let todoService = new TodoService(this.context.appGuid);
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

function mapStateToProps(state: State): Props {
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
