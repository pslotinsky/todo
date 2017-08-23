import { Component } from 'react';
import { ContainerModule, interfaces } from 'inversify';
import { Type } from './Type';
import { Link, Props as LinkProps } from './b-link/b-link';

type Newable<T> = interfaces.Newable<T>;

export type NewableLink = Newable<Component<LinkProps>>;

export const iocModule: ContainerModule = new ContainerModule(
    (bind: interfaces.Bind) => {
        bind<NewableLink>(Type.LINK).toConstructor(Link);
    }
);
