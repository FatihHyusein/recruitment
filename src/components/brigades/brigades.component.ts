import {Component, OnInit} from '@angular/core';
import {BrigadesService} from './brigades.service'
import {TranslatePipe} from '../../shared/pipes/translate.pipe';

@Component({
    selector: 'brigades',
    styles: [
        require('./brigades.component.scss')
    ],
    template: require('./brigades.component.html'),
    providers: [BrigadesService],
    pipes: [TranslatePipe]
})

export class BrigadesComponent implements OnInit {
    constructor(private brigadesService:BrigadesService) {
    }

    ngOnInit():any {
        $('.parallax').parallax();
    }
}
