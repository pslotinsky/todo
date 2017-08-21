import * as React from 'react';
import { FilterEnum, TYPE as FILTER_TYPE } from '../../../containers/b-filter';
import { provideComponent, getComponent } from '../../../../../provide';

const TYPE: symbol = Symbol('Filters');

@provideComponent(TYPE)
class Filters extends React.Component {
	public render(): JSX.Element {
		const FilterContainer = getComponent(FILTER_TYPE);
		return (
			<div className="b-filters">
				Show:
				{" "}
				<FilterContainer filter={FilterEnum.SHOW_ALL}>
					All
				</FilterContainer>
				{", "}
				<FilterContainer filter={FilterEnum.SHOW_ACTIVE}>
					Active
				</FilterContainer>
				{", "}
				<FilterContainer filter={FilterEnum.SHOW_COMPLETED}>
					Completed
				</FilterContainer>
			</div>
		);
	}
}

export { Filters, TYPE };
