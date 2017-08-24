import { Container } from 'inversify';
import { iocModule as commonIocModule } from './ui/common/iocModule';
import { iocModule as todoIocModule } from './ui/todo/iocModule';
import { iocModule as todo2IocModule } from './ui/todo2/iocModule';

const ioc: Container = new Container();
ioc.load(
    commonIocModule,
    todoIocModule
);

if (Math.random() >= 0.5) {
    ioc.load(todo2IocModule);
}

export { ioc };
