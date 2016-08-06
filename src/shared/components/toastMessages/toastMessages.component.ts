import {Component, OnInit} from '@angular/core';

import {ToastMessagesService} from './toastMessages.service';

import {IToast} from '../../interfaces'

@Component({
    selector: 'toast-messages',
    styles: [
        require('./toastMessages.component.scss')
    ],
    template: require('./toastMessages.component.html')
})
export class ToastMessages implements OnInit {
    private messages:any[];

    constructor(public toastMessagesService:ToastMessagesService) {
    }

    ngOnInit():any {
        this.toastMessagesService.messages.subscribe(
            messagesArray => {
                this.showMessages(messagesArray);
            }
        )
    }

    public showMessages(m:any[]) {
        this.messages = m;
    }
}
