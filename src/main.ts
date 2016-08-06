import {enableProdMode} from '@angular/core';
import {bootstrap} from '@angular/platform-browser-dynamic';
import {HTTP_PROVIDERS} from '@angular/http';
import {disableDeprecatedForms, provideForms} from '@angular/forms';
import {MaterializeDirective} from "angular2-materialize";

// shared
import {PROJECTS_PROVIDERS} from './shared/services';
import {PROJECT_SHARED_COMPONENTS_PROVIDERS} from './shared/components';

// routes
import {ROUTER_PROVIDERS} from './components/routes';

// root component
import {App} from './components/app';

// common styles
import './shared/styles/styles.scss';

if (process.env.NODE_ENV === 'production') {
    enableProdMode();
}


bootstrap(App, [
    HTTP_PROVIDERS,
    PROJECTS_PROVIDERS,
    ROUTER_PROVIDERS,
    PROJECT_SHARED_COMPONENTS_PROVIDERS,

    disableDeprecatedForms(),
    provideForms()
]).catch((error:Error) => console.error(error));
