import { ContainerModule, interfaces } from 'inversify';
import { Type } from './Type';
import { Link } from './b-link/b-link';

export const iocModule: ContainerModule = new ContainerModule(
    (bind: interfaces.Bind) => {
        bind<Link>(Type.LINK).toConstructor(Link);
    }
);
