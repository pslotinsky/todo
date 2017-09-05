import { Todo, Filter } from '../types';
import { Request } from '../../../lib/Request';


class TodoService {
    public async getList(filter?: Filter): Promise<Todo[]> {
        return Request.get('/api/todo');
    }
}

export { TodoService };
