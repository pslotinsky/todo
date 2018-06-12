import { ContainerModule, interfaces } from 'inversify';
import { Link, ILink } from './Link/Link';

export const iocModule: ContainerModule = new ContainerModule(
    (bind: interfaces.Bind) => {
        bind<new () => ILink>('ILink').toConstructor(Link);
    }
);
