import { connect, Dispatch } from 'react-redux';
import { bindActionCreators as bind } from 'redux';
import * as actions from '../../../store/todo/actions';
import { TYPE as LIST_TYPE, Props } from
	'../components/l-todo-page/b-todo-list/b-todo-list';
import { getVisibleTodos } from '../../../store/todo/selectors';
import { Store } from '../../../store';
import { provideContainer } from '../../../provide';

const TYPE: symbol = Symbol('TodoListContainer');

const TodoListContainer = provideContainer(
	TYPE,
	LIST_TYPE,
	connect(mapStateToProps, mapDispatchToProps)
);

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

export { TodoListContainer, TYPE };
