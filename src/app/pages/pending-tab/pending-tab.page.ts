import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

import { TasksService } from 'src/app/services/tasks.service';

@Component({
    selector: 'pending-tab',
    templateUrl: 'pending-tab.page.html'
})

export class PendingTabPage {

    constructor(
        private _tasksService: TasksService,
        private _router: Router,
        private _alertCtrl: AlertController
    ) { }

    // Añadir una lista
    async addList() {       
        const alert = await this._alertCtrl.create({
            header: 'Nueva Lista',
            inputs:[{
                name:'title',
                type: 'text',
                placeholder:'Nombre de la lista'
            }],
            buttons: [
                {
                    text: 'Cancelar',
                    role: 'cancel'
                },
                {
                    text:'Crear',
                    handler: (data) => {
                        console.log(data);
                        if (data.title.length === 0) return;        
                        const listaId = this._tasksService.createList(data.title);
                        this._router.navigateByUrl(`/tabs/pending-tab/add-list/${listaId}`);        
                    }
                }
            ]
        });    
        alert.present();
    }  
}