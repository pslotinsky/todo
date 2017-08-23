import * as React from 'react';
import { Container } from 'inversify';
import { FilterEnum } from './Filter/FilterContainer';
import { Type } from '../../Type';
import { NewableFilterContainer } from '../../iocModule';

class Filters extends React.Component {
	static get contextTypes() {
		return { ioc: Container };
	}

	public render(): JSX.Element {
		const ioc: Container = this.context.ioc;
		const FilterContainer =
			ioc.get<NewableFilterContainer>(Type.FILTER_CONTAINER);
		return (
			<div className="Filters">
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
