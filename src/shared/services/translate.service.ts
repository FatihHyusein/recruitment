import {Injectable} from '@angular/core';

import {ITranslate} from '../interfaces/itranslate';
import {HttpService} from './http.service';

@Injectable()
export class TranslateService implements ITranslate {
    private currentLanguage:Object = {};

    constructor(private http:HttpService) {
    }

    getLanguages():Promise<string[]> {
        return this.http.getResource('assets/i18n/languages.json');
    }

    changeLanguage(language:string):Promise<string> {
        let selectedLang = language;
        return new Promise<string>((resolve, reject) => {
            this.http.getResource(`assets/i18n/${language}.json`).then((lang)=> {
                this.currentLanguage = lang;
                resolve(selectedLang);
            });
        });
    }

    getWord(key:string):string {
        return this.currentLanguage[key] || key;
    }


}
