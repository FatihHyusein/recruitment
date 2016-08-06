import {Injectable}    from '@angular/core';
import {HttpService} from '../../shared/services'

@Injectable()
export class Service {
    constructor(private http:HttpService) {
    }
}
