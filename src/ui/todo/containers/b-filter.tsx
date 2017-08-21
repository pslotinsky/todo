import { connect, Dispatch } from 'react-redux';
import { bindActionCreators as bind } from 'redux';
import { Props as FilterProps } from
    '../components/l-todo-page/b-filter/b-filter';
import { Store } from '../../../store';
import { Filter as FilterEnum } from '../../../store/todo/types';
import * as actions from '../../../store/todo/actions';
import { getVisibilityFilter } from '../../../store/todo/selectors';
import { provideContainer } from '../../../provide';
import { TYPE as FILTER_TYPE } from
    '../components/l-todo-page/b-filter/b-filter';

interface Props extends FilterProps {
    filter?: FilterEnum;
}

const TYPE: symbol = Symbol('FilterContainer');

const FilterContainer = provideContainer(
    TYPE,
    FILTER_TYPE,
    connect(mapStateToProps, mapDispatchToProps)
);

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

export { FilterEnum, Props, TYPE, FilterContainer };
