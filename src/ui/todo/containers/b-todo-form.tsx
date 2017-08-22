import { connect, Dispatch } from 'react-redux'
import { bindActionCreators as bind } from 'redux';
import { Props } from
	'../components/l-todo-page/b-todo-form/b-todo-form';
import * as actions from '../../../store/todo/actions';

const TodoFormDecorator = connect(null, mapDispatchToProps);

function mapDispatchToProps(dispatch: Dispatch<any>, ownProps: Props): Props {
	const addTodo = bind(actions.addTodo, dispatch);
	return { 
		onSubmit: (text: string) => addTodo(text)
	 };
}

export { TodoFormDecorator };
