import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, IonList } from '@ionic/angular';

import { TasksService } from 'src/app/services/tasks.service';
import { List } from 'src/app/models/list.model';

@Component({
    selector: 'app-lists',
    templateUrl: './lists.component.html'
})

export class ListsComponent  implements OnInit {
    
    @ViewChild(IonList) list!: IonList;
    @Input() completedList = true;
    
    constructor(
        public _tasksService: TasksService,
        private _router: Router,
        private _alertCtrl: AlertController
    ) { }

    ngOnInit() { }

    // Lista seleccionada dependiendo de la pestaña en la que estés
    selectedList(list: List) {
        if (this.completedList) {
            this._router.navigateByUrl(`/tabs/completed-tab/add-list/${list.id}`);
        } else {
            this._router.navigateByUrl(`/tabs/pending-tab/add-list/${list.id}`);
        }    
    }

    // Editar una lista
    async editList(list: List) {
        const alert = await this._alertCtrl.create({
            header: 'Editar lista',
            inputs: [{
                name: 'title',
                type: 'text',
                value: list.title,
                placeholder: 'Nombre de la lista'
            }],
            buttons: [
                {
                    text: 'Cancelar',
                    role: 'cancel',
                    handler: () => {
                        this.list.closeSlidingItems();
                    }
                },
                {
                    text: 'Actualizar',
                    handler: (data) => {
                        if (data.title.length === 0) return;            
                        list.title = data.title;
                        this._tasksService.saveStorage();
                        this.list.closeSlidingItems();
                    }
                }
            ]
        });    
        alert.present();    
    }
    
    // Borrar una lista
    deleteList(list: List) {    
        this._tasksService.deleteList(list);    
    }
}