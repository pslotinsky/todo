import { AppRequestsCache } from './AppRequestsCache';

class RequestManager {
    public static caches: AppRequestsCache[] = [];

    public static createCache(guid: string): void {
        let cache = new AppRequestsCache(guid);
        this.caches.push(cache);
    }

    public static hasWaitingRequests(guid: string): boolean {
        let cache = this.getCache(guid);
        return (cache.waitingRequestsCount > 0);
    }

    public static removeCache(guid: string) {
        let index = this.caches.findIndex(cache => (cache.guid == guid));
        if (index > -1) {
            this.caches.splice(index, 1);
        }
    }

    public static get(guid: string, url: string): any {
        let cache = this.getCache(guid);

        let res = cache.data[url];
        if (!res) {
            cache.waitingRequestsCount++;
        }

        return res;
    }

    public static set(guid: string, url: string, data: any): void {
        let cache = this.getCache(guid);
        if (!cache.data[url]) {
            cache.data[url] = data;
            cache.waitingRequestsCount--;
        }
    }

    private static getCache(guid: string): AppRequestsCache {
        return this.caches.find(cache => (cache.guid == guid));
    }
}

export { RequestManager };
