import { AppTemplate } from './AppTemplate';

import { TodoFrom } from '../TodoFrom';
import { TodoList } from '../TodoList';
import { Filter } from '../Filter';

export class App extends AppTemplate {
    constructor(root: Element) {
        super();

        const formRoot = root.getElementsByClassName(TodoFrom.CssClass.ROOT)[0];
        new TodoFrom(formRoot);

        const listRoot = root.getElementsByClassName(TodoList.CssClass.ROOT)[0];
        new TodoList(listRoot);

        const filtersRoot = root.getElementsByClassName(Filter.CssClass.ROOT)[0];
        new Filter(filtersRoot);
    }
}
