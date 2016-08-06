import {Pipe, PipeTransform} from '@angular/core';
import {TranslateService} from '../services/translate.service';

@Pipe({
    name: 'translate',
    pure: false
})
export class TranslatePipe implements PipeTransform {
    constructor(public translateService:TranslateService) {

    }

    transform(key:string):string {
        return this.translateService.getWord(key);
    }
}