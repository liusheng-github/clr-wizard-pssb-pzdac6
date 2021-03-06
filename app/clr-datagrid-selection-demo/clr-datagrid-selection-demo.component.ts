import { Component, OnInit, Input } from '@angular/core';

import {State} from "clarity-angular/data/datagrid";
import {FetchResult, Inventory} from "../inventory/inventory";
import {User} from "../inventory/user";

@Component({
  selector: 'app-clr-datagrid-selection-demo',
  providers: [Inventory],
  templateUrl: './clr-datagrid-selection-demo.component.html',
  styleUrls: ['./clr-datagrid-selection-demo.component.scss']
})
export class ClrDatagridSelectionDemoComponent implements OnInit {

  @Input() datagridTitle: string;

  clientNoTrackByUsers: User[];
  clientNoTrackBySelected: User[] = [];
  clientTrackByIndexUsers: User[];
  clientTrackByIndexSelected: User[] = [];
  clientTrackByIdUsers: User[];
  clientTrackByIdSelected: User[] = [];
  serverTrackByIdUsers: User[];
  serverTrackByIdSelected: User[] = [];
  users: User[];


    singleSelected: User;

    trackByIndexUsers: User[];
    trackByIndexSingleSelected: User;

    trackByIdUsers: User[];
    trackByIdSingleSelected: User;

    trackByIdServerUsers: User[];
    trackByIdServerSingleSelected: User;

    loading: boolean = true;
    total: number;

    constructor(private inventory: Inventory) {
        this.inventory.size = 100;
        this.inventory.latency = 500;
        this.inventory.reset();
        this.users = this.trackByIndexUsers = this.trackByIdUsers = this.inventory.all;
    }

    refresh(state: State) {
        // this.loading = true;
        const filters: {[prop: string]: any[]} = {};
        if (state.filters) {
            for (const filter of state.filters) {
                const {property, value} = <{property: string, value: string}>filter;
                filters[property] = [value];
            }
        }
        this.inventory.filter(filters)
            .sort(<{by: string, reverse: boolean}>state.sort)
            .fetch(state.page.from, state.page.size)
            .then((result: FetchResult) => {
                setTimeout(() => {
                    this.trackByIdServerUsers = result.users;
                    this.total = result.length;
                    this.loading = false;
                });
            });
    }

    trackByIndex(index: number, item: User) {
        return index;
    }

    trackById(index: number, item: User) {
        return item.id;
    }
    
    ngOnInit() {
    }

}