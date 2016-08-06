import {Injectable} from '@angular/core';
import {HttpService} from '../../services'

@Injectable()
export class ToolbarService {
    private url = 'logout';

    constructor(private http:HttpService) {
    }

    public logout() {
        return this.http.post(this.url, {})
            .then(response => {
                return response;
            })
            .catch(error => {

            });
    }
}
