import {Component, OnInit} from '@angular/core';
import {} from './.service'
import {TranslatePipe} from '../../shared/pipes/translate.pipe';

@Component({
    selector: '',
    styles: [
        require('./.component.scss')
    ],
    template: require('./.component.html'),
    providers: [],
    pipes: [TranslatePipe]
})

export class ContactUsComponent implements OnInit {
    constructor(private ) {
    }

    ngOnInit():any {
    }

    private send(data):void {

    }
}
