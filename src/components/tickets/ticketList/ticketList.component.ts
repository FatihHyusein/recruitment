import {Component, OnInit} from '@angular/core';
import {TicketListService} from './ticketList.service'
import {TableService} from '../../../shared/services'

import {ITicket} from '../tickets.component';
import {Router} from "@angular/router";

interface ITicketData {
    tickets:ITicket[]
}

@Component({
    selector: 'ticket-list',
    styles: [
        require('./ticketList.component.scss')
    ],
    template: require('./ticketList.component.html'),
    providers: [TicketListService, TableService]
})

export class TicketListComponent implements OnInit {
    private data:ITicketData = {
        tickets: []
    };
    private headers = [
        'title',
        'statusId',
        'assignedToEmployee',
        'assignedToTeam',
        'closingDate',
    ];
    private sortBy = {};
    private searchText:string;
    private pages:number[];
    private currentPage:number;

    constructor(private ticketListService:TicketListService,
                private tableService:TableService,
                private  router:Router) {
    }

    ngOnInit():any {
        this.ticketListService.getTickets().then(response => {
            for (let i in response) {
                if (response.hasOwnProperty(i)) {
                    this.data.tickets.push(response[i]);
                }
            }

            this.pages = this.tableService.setPagination(this.data.tickets.length);
            if (!this.currentPage) {
                this.currentPage = 1;
            }
        })
    }

    private sort(header, event):void {
        this.sortBy = this.tableService.sort(header, this.sortBy, event);
    }

    private search(text, event):void {
        this.tableService.search(text, event)
            .then((t)=> {
                this.searchText = t;
            }).catch(() => {
        });
    }

    private changePage(page, event):void {
        this.currentPage = this.tableService.changePage(page, event);
    }

    private showDetailsPage(ticketId:number) {
        if (!ticketId) {
            return;
        }
        this.router.navigate(['/tickets/' + ticketId]);
    }
}
