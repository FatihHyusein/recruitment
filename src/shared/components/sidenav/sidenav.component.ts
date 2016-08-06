import {Component, OnInit} from '@angular/core';
import {Router, ROUTER_DIRECTIVES} from '@angular/router';
import {SideNavService} from './sidenav.service';

@Component({
    selector: 'side-nav',
    styles: [
        require('./sidenav.component.scss')
    ],
    template: require('./sidenav.component.html'),
    providers: [SideNavService],
    directives: [ROUTER_DIRECTIVES]
})
export class SideNav implements OnInit {
    private openedClassName = "active";

    constructor(public toolbarService:SideNavService,
                public router:Router) {
    }

    ngOnInit():any {
    }

    private toggleNavGroup(e):void {
        if (e.target.className.indexOf(this.openedClassName) > -1) {
            e.target.className = e.target.className.replace(new RegExp('\\b' + this.openedClassName + '\\b'), '');
        }
        else {
            e.target.className += ' ' + this.openedClassName;
        }
    }
}
