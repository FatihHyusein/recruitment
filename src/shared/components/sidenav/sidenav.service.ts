import {Injectable} from '@angular/core';
import {HttpService} from '../../services'

@Injectable()
export class SideNavService {
    private url = 'logout';

    constructor(private http:HttpService) {
    }


}
