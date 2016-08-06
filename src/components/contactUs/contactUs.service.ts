import {Injectable}    from '@angular/core';
import {HttpService} from '../../shared/services'

import 'rxjs/add/operator/toPromise';

@Injectable()
export class ContactUsService {
    constructor(private http:HttpService) {
    }
}
