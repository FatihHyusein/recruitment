import {Injectable}    from '@angular/core';
import {HttpService} from '../../shared/services'

@Injectable()
export class BrigadesService {
    constructor(private http:HttpService) {
    }
}
