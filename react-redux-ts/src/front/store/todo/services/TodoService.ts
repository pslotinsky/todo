import { Todo, Filter } from '../types';
import { Request } from '../../../lib/Request/Request';


class TodoService {
    private request: Request;

    constructor(appGuid?: string) {
        this.request = new Request(appGuid);
    }

    public async getList(filter?: Filter): Promise<Todo[]> {
        return await this.request.get('http://localhost:3000/api/todo');
    }

    public async getColor(id: string): Promise<string> {
        let url = `http://localhost:3000/api/todo/${id}/color`;
        let res: any = await this.request.get(url);
        return res.color;
    }
}

export { TodoService };
