import {Component, Input} from '@angular/core';

export interface ITicket {
    assignedToEmployee:any,
    assignedToTeam:any,
    attachments:any,
    closingDate:any,
    creationDate:any,
    creatorId:any,
    creatorUserType:any,
    creatorUsername:any,
    description:any,
    dueDate:any,
    employeeUsername:any,
    lastChangeDate:any,
    masterTicketId:any,
    priorityId:any,
    reasonId:any,
    resolutionId:any,
    scheduledFor:any,
    serviceExpirationDate:any,
    serviceLastRenewalDate:any,
    serviceName:any,
    sourceChannelId:any,
    statusId:any,
    subscriberId:any,
    ticketId:any,
    ticketTypeId:any,
    title:any
}

@Component({
    selector: 'tickets',
    template: `
    <h1>TICKETS</h1>
    <router-outlet></router-outlet>
  `
})

export class Tickets {

    constructor() {
    }
}
