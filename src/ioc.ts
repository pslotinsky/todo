import { Container, interfaces } from 'inversify';

class IocManager {
    private ioc: Container = new Container();

    merge(...args: Container[]) {
        this.ioc = args.reduce((res: Container, cur: Container): Container => {
            return <Container>Container.merge(res, cur);
        }, this.ioc);
    }

    get(serviceId: interfaces.ServiceIdentifier<any>): any {
        return this.ioc.get<any>(serviceId);
    }

    registerConstructor(
        serviceId: interfaces.ServiceIdentifier<any>,
        newable: interfaces.Newable<any>
    ): void {
        let from = this.ioc.isBound(serviceId)
            ? this.ioc.rebind<interfaces.Newable<any>>(serviceId)
            : this.ioc.bind<interfaces.Newable<any>>(serviceId);
        from.toConstructor(newable);
    }
}

export const ioc = new IocManager();
