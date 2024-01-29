import { Injectable } from '@angular/core';
import { List } from '../models/list.model';

@Injectable({
    providedIn: 'root'
})

export class TasksService {
    
    public lists: List[] = [];

    constructor() {
        this.loadStorage();
    }

    // Crear una lista
    createList(title: string){
        const newList = new List(title);
        this.lists.push(newList);
        this.saveStorage();
        return newList.id;
    }    
    
    // Obtener una lista 
    getList(id: string | number) {
        id = Number(id);
        return this.lists.find(listData => listData.id === id);
    }

    // Borrar una lista
    deleteList(list: List) {
        this.lists = this.lists.filter(listData => listData.id !== list.id);    
        this.saveStorage();    
    }

    // Persistencia local: Guardar el storage
    saveStorage() {
        localStorage.setItem('data', JSON.stringify(this.lists));    
    }
    
    // Persistencia local: Cargar el storage
    loadStorage() {
        const lists = localStorage.getItem('data');
        if (lists) {
            this.lists = JSON.parse(lists);
        } else {
            this.lists = [];
        }
    }
}