import { connect, Dispatch } from 'react-redux'
import { bindActionCreators as bind } from 'redux';
import { TodoForm, Props } from
	'../components/l-todo-page/b-todo-form/b-todo-form';
import * as actions from '../../../store/todo/actions';

export const TodoFormContainer = connect(null, mapDispatchToProps)(TodoForm);

function mapDispatchToProps(dispatch: Dispatch<any>, ownProps: Props): Props {
	const addTodo = bind(actions.addTodo, dispatch);
	return { 
		onSubmit: (text: string) => addTodo(text)
	 };
}
