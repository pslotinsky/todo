import { connect, Dispatch } from 'react-redux'
import { bindActionCreators as bind } from 'redux';
import { TYPE as FORM_TYPE, Props } from
	'../components/l-todo-page/b-todo-form/b-todo-form';
import { provideContainer } from '../../../provide';
import * as actions from '../../../store/todo/actions';

const TYPE: symbol = Symbol('TodoFormContainer');

const TodoFormContainer = provideContainer(
	TYPE,
	FORM_TYPE,
	connect(null, mapDispatchToProps)
);

function mapDispatchToProps(dispatch: Dispatch<any>, ownProps: Props): Props {
	const addTodo = bind(actions.addTodo, dispatch);
	return { 
		onSubmit: (text: string) => addTodo(text)
	 };
}

export { TodoFormContainer, TYPE };
