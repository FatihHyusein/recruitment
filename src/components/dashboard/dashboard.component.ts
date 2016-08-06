import {Component, OnInit} from '@angular/core';
import {TranslatePipe} from '../../shared/pipes/translate.pipe';
import {MaterializeDirective} from "angular2-materialize";

@Component({
    selector: 'dashboard',
    directives: [MaterializeDirective],
    template: require('./dashboard.component.html'),
    styles: [require('./dashboard.component.scss')],
    pipes: [TranslatePipe]
})

export class Dashboard implements OnInit{
    ngOnInit():any {
        //noinspection TypeScriptUnresolvedFunction
        $('.carousel.carousel-slider').carousel({full_width: true});
    }
    constructor() {
    }
}
