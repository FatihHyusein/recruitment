import {Component, OnInit} from '@angular/core';
import {TicketDetailService} from './ticketDetail.service';
import {TableService} from '../../../shared/services';
import {ActivatedRoute} from '@angular/router';

import {ITicket} from '../tickets.component';

@Component({
    selector: 'ticket-detail',
    styles: [
        require('./ticketDetail.component.scss')
    ],
    template: require('./ticketDetail.component.html'),
    providers: [TicketDetailService, TableService]
})

export class TicketDetailComponent implements OnInit {
    private ticket:ITicket= <ITicket>{};

    constructor(private ticketDetailService:TicketDetailService,
                private route:ActivatedRoute) {
    }

    ngOnInit():any {
        //noinspection TypeScriptUnresolvedVariable
        this.ticketDetailService.getTicket(this.route.params.value.id).then(response => {
            this.ticket = response;
        })
    }
}
