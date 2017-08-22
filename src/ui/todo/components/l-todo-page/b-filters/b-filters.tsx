import * as React from 'react';
import { Container } from 'inversify';
import { FilterEnum } from '../../../containers/b-filter';
import { Type } from '../../../Type';

class Filters extends React.Component {
	static get contextTypes() {
		return { ioc: Container };
	}

	public render(): JSX.Element {
		const ioc: Container = this.context.ioc;
		const FilterContainer = ioc.get<any>(Type.FILTER_CONTAINER);
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

export { Filters };
