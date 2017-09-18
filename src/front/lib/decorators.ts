import * as PropTypes from 'prop-types';
import { Container } from 'inversify';

export function withContext(target: any): any {
    target.contextTypes = {
        ioc: Container,
        appGuid: PropTypes.string
    };

    return target;
}
