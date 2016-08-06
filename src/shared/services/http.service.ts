import {Injectable} from '@angular/core';
import {Headers, Http, Response, RequestOptions} from '@angular/http';
import {Router} from '@angular/router';

import {ToastMessagesService} from '../components/toastMessages/toastMessages.service';
import {IResponse, IHttp} from  '../interfaces';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';


@Injectable()
export class HttpService implements IHttp {

    private baseUrl = "http://dev10.io.web.imperiax.org/rec/dest/";

    constructor(private http:Http,
                private router:Router,
                private toasts:ToastMessagesService) {
    }

    private isErrorResponse(res:any):boolean {
        //Will be updated
        return !res.success;
        return !res || !res.response || res.success === false;
    }

    private showMessages(res:any):void {
        if (res.messages) {
            this.toasts.messagesSource.next(res.messages);
        }
    }

    private checkIfLoggedIn(response:any) {
        if (response.toasts && response.toasts[0].text == 'User is not logged in.') {
            this.router.navigateByUrl('/login');
        }
    }

    private successResponse(res:IResponse) {
        // if (this.isErrorResponse(res)) {
        //     return Promise.reject(res);
        // }

        // this.checkIfLoggedIn(res);
        // this.showMessages(res);

        return JSON.parse(res._body).result;
    }

    private failResponse(error:any) {
        let err = {
            messages: [{
                type: "negative",
                text: "Something went wrong!"
            }]
        };

        if (typeof error == 'string' && typeof error.json !== 'undefined') {
            let parsedError = error.json();

            if (!parsedError.messages || parsedError.messages && parsedError.messages.length == 0) {
                parsedError.messages = err.messages;
            }
            err = parsedError;
        }
        else if (error) {
            if (error.messages) {
                err = error;
            }
            else {
                let errorMsg = err.messages;
                err = error;
                err.messages = errorMsg;
            }
        }

        this.checkIfLoggedIn(err);
        this.showMessages(err);

        return Promise.reject(err);
    }

    private static convertToSendParams(params:any):string {
        let paramsToString = '';

        for (let param in params) {
            if (params.hasOwnProperty(param)) {
                paramsToString += param + '=' + encodeURIComponent(params[param]) + '&';
            }
        }
        paramsToString = paramsToString.slice(0, paramsToString.length - 1);
        return paramsToString;
    }

    public getResource(url:string) {
        return this.http.get(this.baseUrl + url)
            .toPromise()
            .then(res => {
                //noinspection TypeScriptUnresolvedVariable
                return JSON.parse(res._body);
            })
            .catch(error => {
                return error;
            });
    }

    public get(url, params) {
        return this.http.get(this.baseUrl + url + '?' + HttpService.convertToSendParams(params))
            .toPromise()
            .then(res => {
                return this.successResponse(res);
            })
            .catch(error => {
                this.failResponse(error)
            });
    }

    public post(url, params) {
        let headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'});
        let headersOptions = new RequestOptions({headers: headers});

        //noinspection TypeScriptUnresolvedFunction
        return this.http.post(this.baseUrl + url, HttpService.convertToSendParams(params), headersOptions)
            .toPromise()
            .then(res => {
                return this.successResponse(res);
            })
            .catch(error => {
                return this.failResponse(error)
            });
    }
}
