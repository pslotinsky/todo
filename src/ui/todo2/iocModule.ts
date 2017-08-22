import { ContainerModule, interfaces } from 'inversify';
import { Type } from '../todo/Type';
import { FilterDecorator } from '../todo/containers/b-filter';
import { Filter2 } from './components/l-todo-page/b-filter/b-filter';

export const iocModule: ContainerModule = new ContainerModule(
    (
        bind: interfaces.Bind,
        unbind: interfaces.Unbind,
        isBound: interfaces.IsBound,
        rebind: interfaces.Rebind
    ) => {
        const FilterContainer = FilterDecorator(Filter2);
        rebind<any>(Type.FILTER_CONTAINER).toConstructor(FilterContainer);
    }
);
