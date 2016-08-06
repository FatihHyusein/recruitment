import {Injectable} from '@angular/core';
import {Subject} from "rxjs/Rx";

@Injectable()
export class ToastMessagesService {
    public messagesSource;
    public messages;

    constructor() {
        this.messagesSource = new Subject<string>();
        this.messages = this.messagesSource.asObservable();
    }
}
