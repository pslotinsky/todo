import { ioc } from './ioc';

let containerProviders: {
    type: symbol,
    componentType: symbol,
    decorator: any
}[] = [];

export function provideComponent(type: symbol): any {
    return (Component: any) => {
        ioc.registerConstructor(type, Component);
        containerProviders.forEach((containerProvider) => {
            let { type, componentType, decorator } = containerProvider;
            registerContainer(type, componentType, decorator);
        });
        return Component;
    };
}

export function provideContainer(
    type: symbol,
    componentType: symbol,
    decorator: any
): any {
    containerProviders.push({ type, componentType, decorator });
    return registerContainer(type, componentType, decorator);
}

export function getComponent(type: symbol): any {
    return ioc.get(type);
}

function registerContainer(
    type: symbol,
    componentType: symbol,
    decorator: any
): any {
    const Component = ioc.get(componentType);
    const Container = decorator(Component);
    ioc.registerConstructor(type, Container);
    return Container;
}
