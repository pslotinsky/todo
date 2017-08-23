import { ContainerModule, interfaces } from 'inversify';
import { Type } from '../todo/Type';
import { NewableFiter } from '../todo/iocModule';
import { FilterDecorator } from
    '../todo/TodoPage/Filters/Filter/FilterContainer';
import { Filter2 } from './TodoPage/Filters/Filter/Filter';

export const iocModule: ContainerModule = new ContainerModule(
    (
        bind: interfaces.Bind,
        unbind: interfaces.Unbind,
        isBound: interfaces.IsBound,
        rebind: interfaces.Rebind
    ) => {
        const FilterContainer = FilterDecorator(Filter2);

        rebind<NewableFiter>(Type.FILTER_CONTAINER)
            .toConstructor(FilterContainer);
    }
);
