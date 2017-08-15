import { connect, Dispatch } from 'react-redux';
import { bindActionCreators as bind } from 'redux';
import {
    Filter,
    Props as FilterProps
} from '../components/l-todo-page/b-filter/b-filter';
import { Store } from '../../../store';
import { Filter as FilterEnum } from '../../../store/todo/types';
import * as actions from '../../../store/todo/actions';
import { getVisibilityFilter } from '../../../store/todo/selectors';

export { FilterEnum };

export interface Props extends FilterProps {
    filter?: FilterEnum;
}

export const FilterContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Filter);

function mapStateToProps(state: Store, ownProps: Props): Props {
    return {
        active: (ownProps.filter == getVisibilityFilter(state))
    };
}

function mapDispatchToProps(dispatch: Dispatch<any>, ownProps: Props): Props {
    const setVisibilityFilter = bind(actions.setVisibilityFilter, dispatch);
    return {
        onClick: () => setVisibilityFilter(ownProps.filter)
    };
}
