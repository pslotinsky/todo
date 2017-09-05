import axios from 'axios';

class Request {
    public static async get(url: string): Promise<any> {
        let req = new Request();
        return req.get(url);
    }

    async get(url: string): Promise<any> {
        let res = await axios.get(url);
        return res.data;
    }
}

export { Request };
