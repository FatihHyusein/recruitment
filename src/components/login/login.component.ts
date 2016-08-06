import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {FORM_DIRECTIVES, FORM_PROVIDERS} from '@angular/forms';

import {LoginService} from './login.service';

@Component({
    selector: 'login',
    styles: [
        require('./login.component.scss')
    ],
    template: require('./login.component.html'),
    providers: [LoginService, FORM_PROVIDERS],
    directives: [FORM_DIRECTIVES]
})
export class Login {

    constructor(public router:Router,
                public loginService:LoginService) {
    }

    login(form:any) {
        this.loginService.doLogin(form)
            .then((response) => {
                if (response.hasError) {
                    return;
                }
                this.router.navigate(['/']);
            });

    }
}
