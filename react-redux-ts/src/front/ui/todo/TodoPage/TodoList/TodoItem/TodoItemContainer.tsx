import * as React from 'react';
import { bindActionCreators } from 'redux';
import { connect, Dispatch } from 'react-redux';
import { TodoItem, Props } from './TodoItem';
import { TodoService } from '../../../../../store/todo/services/TodoService';
import * as actions from '../../../../../store/todo/actions';
import { withContext } from '../../../../../lib/decorators';

interface ContainerProps extends Props {
    setColor?: (data: actions.SetColorPayload) => void;
}

@withContext
class TodoItemContainer extends React.Component<ContainerProps> {
    async componentWillMount(): Promise<void> {
        let todoService = new TodoService(this.context.appGuid);
        let color = await todoService.getColor(this.props.id);
        this.props.setColor({
            id: this.props.id,
            color
        });
    }

    render(): JSX.Element {
        return <TodoItem {...this.props} />;
    }
}

const ConnectedTodoItem = connect(null, mapDispatchToProps)(TodoItemContainer);

function mapDispatchToProps(
    dispatch: Dispatch<any>,
    ownProps: ContainerProps
): ContainerProps {
    let setColor = actions.setColor;
    return bindActionCreators({ setColor }, dispatch);
}

export { ConnectedTodoItem, ContainerProps };
