import {Injectable}    from '@angular/core';
import {HttpService} from '../../../shared/services'

@Injectable()
export class TicketDetailService {
    private url = 'ticket/showTicket';
    public result = {};

    constructor(private http:HttpService) {
    }

    public getTicket(id:number) {
        //noinspection TypeScriptUnresolvedFunction
        return this.http.get(this.url, {ticketId: id})
            .then(response => {
                return response.ticketData;
            })
            .catch(error => {
                return error;
            });
    }
}
