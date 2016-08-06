export interface IHttp {
    get(url:string, params:any): void;
    getResource(url:string): void;
    post(url:string, params:any): void;
}
