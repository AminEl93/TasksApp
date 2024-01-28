import { Injectable } from '@angular/core';
import { List } from '../models/list.model';

@Injectable({
    providedIn: 'root'
})

export class TasksService {
    
    public lists: List[] = [];

    constructor() {
        console.log('Servicio de las tareas inicializado!')
    }
    
}