import {Injectable}    from '@angular/core';
import {HttpService} from '../../../shared/services'

import 'rxjs/add/operator/toPromise';

@Injectable()
export class TicketListService {
    private url = 'ticket/list';
    public result = {};

    constructor(private http:HttpService) {
    }

    public getTickets() {
        //noinspection TypeScriptUnresolvedFunction
        return this.http.get(this.url, {})
            .then(response => {
                return response;
            })
            .catch(error => {
                return error;
            });
    }
}
