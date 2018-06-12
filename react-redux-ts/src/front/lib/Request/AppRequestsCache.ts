class AppRequestsCache {
    public waitingRequestsCount: number = 0;

    public data: { [url: string]: any } = {};

    public guid: string;

    constructor(guid: string) {
        this.guid = guid;
    }
}

export { AppRequestsCache };
