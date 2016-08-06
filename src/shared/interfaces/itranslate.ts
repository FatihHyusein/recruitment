export interface ITranslate {
    getLanguages():Promise<string[]>;
    changeLanguage(language:string):void;
    getWord(key:string):string;
}
