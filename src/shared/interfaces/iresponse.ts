interface IToast {
    text:string;
}

export interface IResponse {
    // toasts:IToast[];
    _body:string;
    headers:Object,
    ok:boolean,
    status:number,
    statusText:string,
    type:number,
    url:string
}
