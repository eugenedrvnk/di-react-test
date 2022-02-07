import { HttpServiceType } from "../../common/HttpService"

class UsersServiceType {
    private http;
    constructor(http: HttpServiceType) {
        this.http = http;
    }
    get: () => Promise<any>;
    post: () => Promise<any>;
}

export {
    UsersServiceType
}