import {PLATFORM_DIRECTIVES} from '@angular/core';
import {provideRouter, ROUTER_DIRECTIVES, RouterConfig}  from '@angular/router';

import {Dashboard} from './dashboard';
import {ContactUsComponent} from './contactUs/contactUs.component';
import {AoaComponent} from './areasOfActivity/aoa.component';
import {BrigadesComponent} from './brigades/brigades.component';


import {Tickets} from './tickets';
import {TicketListComponent} from './tickets/ticketList/ticketList.component';
import {TicketDetailComponent} from './tickets/ticketDetail/ticketDetail.component';
import {Login} from './login';

const routes:RouterConfig = [
    {path: '', component: Dashboard},
    {path: 'cantactUs', component: ContactUsComponent},
    {path: 'aoa', component: AoaComponent},
    {path: 'brigades', component: BrigadesComponent},


    {path: 'login', component: Login},
    {
        path: 'tickets',
        component: Tickets,
        children: [
            {path: ':id', component: TicketDetailComponent},
            {path: '', component: TicketListComponent}
        ]
    }
];


export const ROUTER_PROVIDERS = [
    provideRouter(routes),
    {
        provide: PLATFORM_DIRECTIVES,
        useValue: ROUTER_DIRECTIVES,
        multi: true
    }
];
