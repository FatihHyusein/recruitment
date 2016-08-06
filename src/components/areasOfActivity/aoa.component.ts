import {Component, OnInit} from '@angular/core';
import {AoaService} from './aoa.service'
import {TranslatePipe} from '../../shared/pipes/translate.pipe';

@Component({
    selector: 'aoa',
    styles: [
        require('./aoa.component.scss')
    ],
    template: require('./aoa.component.html'),
    providers: [AoaService],
    pipes: [TranslatePipe]
})

export class AoaComponent implements OnInit {
    constructor(private aoaService:AoaService) {
    }

    ngOnInit():any {
        $('.parallax').parallax();
        $('.modal-trigger').leanModal();
    }
}
