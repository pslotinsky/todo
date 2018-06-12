import axios from 'axios';
import { RequestManager } from './RequestManager';

class Request {
    private appGuid: string;

    constructor(appGuid?: string) {
        this.appGuid = appGuid;
    }

    public async get(url: string): Promise<any> {
        let data;

        if (this.appGuid) {
            data = RequestManager.get(this.appGuid, url);
        }

        if (!data) {
            let response = await axios.get(url);
            data = response.data;
        }

        if (this.appGuid) {
            RequestManager.set(this.appGuid, url, data);
        }
        
        return data;
    }
}

export { Request };
