import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { List } from 'src/app/models/list.model';
import { ListItem } from 'src/app/models/list-item.model';

import { TasksService } from 'src/app/services/tasks.service';

@Component({
    selector: 'app-add-list',
    templateUrl: './add-list.page.html'
})

export class AddListPage implements OnInit {

    public list: List | undefined;
    public lista2!: List;
    public itemName: string = '';

    constructor(private _tasksService: TasksService, private _route: ActivatedRoute) {
        const listId = this._route.snapshot.paramMap.get('listId');
        this.list = this._tasksService.getList(listId || 0);
    }    

    ngOnInit() { }

    // Añadir una tarea
    addItem() {
        if (this.itemName.length === 0) return;    
        const newItem = new ListItem(this.itemName);
        this.list!.items.push(newItem);    
        this.itemName = '';
        this._tasksService.saveStorage();
    }

    // Cambiar el estado del checkbox de una tarea
    changeCheck() {
        const pending = this.list!.items.filter(itemData => !itemData.completed).length;    
        if (pending === 0) {
            this.list!.completedIn = new Date();
            this.list!.completed = true;
        } else {
            this.list!.completedIn = new Date(NaN);
            this.list!.completed = false;
        }    
        this._tasksService.saveStorage();    
        console.log(this._tasksService.lists);    
    }

    // Borrar una tarea
    deleteItem(i: number) {
        this.list!.items.splice(i, 1);
        this._tasksService.saveStorage();    
    }
}