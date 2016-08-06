import {Injectable} from '@angular/core';

import {ITable} from '../interfaces/itable';

@Injectable()
export class TableService implements ITable {
    private delayedSearchId;
    private itemsPerPage = 10;
    private totalPages;
    private pagesAsArray:number[];

    sort(header:any, sortBy:Object, event:any):Object {
        let asc = 'asc',
            desc = 'desc';
        let headerExists = false;

        for (let i in sortBy) {
            if (sortBy.hasOwnProperty(i) && i === header) {
                headerExists = true;

                let newOrder = (sortBy[i] == desc) ? asc : desc;
                sortBy[i] = newOrder;

                if (event.shiftKey === false) {
                    sortBy = {};
                    sortBy[header] = newOrder;
                }

                break;
            }
        }

        if (!headerExists) {
            sortBy[header] = asc;

            if (event.shiftKey === false) {
                sortBy = {};
                sortBy[header] = asc;
            }
        }

        return sortBy;
    }


    public changePage(page):number {
        if (page > this.totalPages) {
            return this.totalPages;
        }
        if (page < 1) {
            return 1;
        }

        return page;
    }

    public setPagination(itemsCount:number):number[] {
        this.pagesAsArray = [];
        this.totalPages = Math.ceil(itemsCount / this.itemsPerPage);

        for (var i = 1; i <= this.totalPages; i++) {
            this.pagesAsArray.push(i);
        }

        return this.pagesAsArray;
    }

    public search(text:string, event:any):Promise<string> {
        return new Promise<string>((resolve, reject) => {
            if (text.length === 0) {
                resolve(text);
            }

            if (text.length > 1) {
                if (this.delayedSearchId) {
                    window.clearTimeout(this.delayedSearchId);
                }

                this.delayedSearchId = setTimeout(function () {
                    resolve(text);
                }, 300);


            } else {
                reject('');
            }
        });
    }
}
