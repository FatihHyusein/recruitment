import {Injectable}    from '@angular/core';
import {HttpService} from '../../shared/services'

import 'rxjs/add/operator/toPromise';

@Injectable()
export class LoginService {
    private url = 'login';
    public invalidData = false;
    public message = '';
    public isError = false;
    public result = {};

    constructor(private http:HttpService) {
    }

    public doLogin(form:any) {
        if (form.username == '' || form.password == '') {
            this.isError = true;
            this.message = 'Невалидни данни.';
        }
        else {
            return this.http.post(this.url,
                {
                    username: form.username,
                    password: form.password
                })
                .then(response => {
                    response.hasError = false;
                    return response;
                })
                .catch(error => {
                    return {
                        'message': '',
                        'hasError': true
                    }
                });
        }
    }
}
