import {Component, ChangeDetectionStrategy} from '@angular/core';
import {ROUTER_DIRECTIVES, Router} from "@angular/router";
import {ToastMessages} from '../../shared/components/toastMessages';
import {Toolbar} from '../../shared/components/toolbar';
import {SideNav} from '../../shared/components/sidenav';

@Component({
    selector: 'app',
    changeDetection: ChangeDetectionStrategy.Default, // Everything else uses OnPush,
    template: `
    <toolbar></toolbar>

    <main>
      <toast-messages></toast-messages>
      <router-outlet></router-outlet>
    </main>
  `,
    directives: [
        ROUTER_DIRECTIVES,
        ToastMessages,
        Toolbar,
        SideNav
    ],


})

export class App {
    constructor(private router:Router) {

    }
}
