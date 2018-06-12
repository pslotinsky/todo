import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { setVisibilityFilter } from '../actions';
import { Filter } from '../types';

const reducer = reducerWithInitialState(Filter.SHOW_ALL)
	.case(setVisibilityFilter, setVisibilityFilterHandler);
	
function setVisibilityFilterHandler(state: string, filter: Filter) {
	return filter;
}

export default reducer;
