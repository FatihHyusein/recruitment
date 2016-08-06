import {HttpService} from './http.service';
import {ConsoleService} from './console.service';
import {TableService} from './table.service';
import {TranslateService} from './translate.service';

export {HttpService} ;
export {ConsoleService};
export {TableService};
export {TranslateService};


export const PROJECTS_PROVIDERS:any[] = [
    HttpService,
    ConsoleService,
    TableService,
    TranslateService
];
