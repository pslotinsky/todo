import { Component } from 'react';
import { ContainerModule, interfaces } from 'inversify';
import { Type } from './Type';
import { Link, Props as LinkProps } from './Link/Link';

type Newable<T> = interfaces.Newable<T>;

export type NewableLink = Newable<Component<LinkProps>>;

export const iocModule: ContainerModule = new ContainerModule(
    (bind: interfaces.Bind) => {
        bind<NewableLink>(Type.LINK).toConstructor(Link);
    }
);
