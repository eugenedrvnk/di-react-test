import { HttpServiceType } from '.';

const HttpService: HttpServiceType = {
    get: (url) => fetch(url),
    post: (url) => fetch(url),
}

export {
    HttpService
}