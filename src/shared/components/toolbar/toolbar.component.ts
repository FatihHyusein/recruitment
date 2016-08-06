import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {ToolbarService} from './toolbar.service';
import {TranslateService} from '../../services/translate.service';
import {TranslatePipe} from '../../pipes/translate.pipe';

@Component({
    selector: 'toolbar',
    styles: [
        require('./toolbar.component.scss')
    ],
    template: require('./toolbar.component.html'),
    providers: [ToolbarService],
    pipes: [TranslatePipe]
})
export class Toolbar implements OnInit {
    private selectedLanguage:string;
    private languages:string[];

    constructor(public toolbarService:ToolbarService,
                public router:Router,
                public translateService:TranslateService) {
    }

    ngOnInit():any {
        this.translateService.getLanguages().then((languages) => {
            this.languages = languages;
            this.selectedLanguage = this.languages.find((l) => {
                if (l === 'en') {
                    return l;
                }
            });
            this.changeLanguage(this.selectedLanguage);
        });
    }

    changeLanguage(language:string) {
        this.translateService.changeLanguage(language).then((changedLanguage)=> {
            this.selectedLanguage = changedLanguage;
        })
    }
}
