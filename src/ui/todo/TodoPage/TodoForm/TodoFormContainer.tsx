import { connect, Dispatch } from 'react-redux'
import { bindActionCreators as bind } from 'redux';
import { Props } from './TodoForm';
import * as actions from '../../../../store/todo/actions';

const TodoFormDecorator = connect(null, mapDispatchToProps);

function mapDispatchToProps(dispatch: Dispatch<any>, ownProps: Props): Props {
	const addTodo = bind(actions.addTodo, dispatch);
	return { 
		onSubmit: (text: string) => addTodo(text)
	 };
}

export { TodoFormDecorator };
