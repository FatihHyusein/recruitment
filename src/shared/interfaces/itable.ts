export interface ITable {
    sort(header:string, sortBy:Object, event:any):Object;
    changePage(page:number):number;
    setPagination(itemsCount:number):number[];
    search(searchText:string, event:any):Promise<string>;
}
