export type HttpServiceType = {
    get: (url: string) => Promise<any>;
    post: (url: string) => Promise<any>;
}

import { HttpService as HttpServicePackage } from "./HttpService"

export {
    HttpServicePackage as HttpService
}