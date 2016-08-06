import {Component, OnInit} from '@angular/core';
import {ContactUsService} from './contactUs.service'
import {MaterializeDirective} from "angular2-materialize";

@Component({
    selector: 'contact-us',
    directives: [MaterializeDirective],
    styles: [
        require('./contactUs.component.scss')
    ],
    template: require('./contactUs.component.html'),
    providers: [ContactUsService]
})

export class ContactUsComponent implements OnInit {
    constructor(private contactUsService:ContactUsService) {
    }

    ngOnInit():any {
        $('select').material_select();



    }


}
