import {Injectable}    from '@angular/core';
import {HttpService} from '../../shared/services'

@Injectable()
export class AoaService {
    constructor(private http:HttpService) {
    }
}
