import { connect, Dispatch } from 'react-redux';
import { bindActionCreators as bind } from 'redux';
import * as actions from '../../../store/todo/actions';
import { TodoList, Props } from
	'../components/l-todo-page/b-todo-list/b-todo-list';
import { getVisibleTodos } from '../../../store/todo/selectors';
import { Store } from '../../../store';

export const TodoListContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(TodoList);

function mapStateToProps(state: Store): Props {
	return {
		todos: getVisibleTodos(state)
	};
};

function mapDispatchToProps(dispatch: Dispatch<any>, ownProps: Props): Props {
    const toggleTodo = bind(actions.toggleTodo, dispatch);
    return {
        onItemClick: (id: string) => toggleTodo(id)
    };
}
