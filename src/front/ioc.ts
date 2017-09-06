import getDecorators from "inversify-inject-decorators";
import { Container } from 'inversify';

const ioc: Container = new Container();
const decorators = getDecorators(ioc);
const inject = decorators.lazyInject;

import { iocModule as commonIocModule } from './ui/common/iocModule';
import { iocModule as todoIocModule } from './ui/todo/iocModule';
import { iocModule as todo2IocModule } from './ui/todo2/iocModule';

ioc.load(
    commonIocModule,
    todoIocModule
);

if (Math.random() >= 0.5) {
    ioc.load(todo2IocModule);
}

export { ioc, inject };
