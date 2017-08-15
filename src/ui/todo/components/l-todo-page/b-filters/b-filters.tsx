import * as React from 'react'
import { FilterContainer, FilterEnum } from '../../../containers/b-filter'

export class Filters extends React.Component {
	public render(): JSX.Element {
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
