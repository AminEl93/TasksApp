import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddListPage } from './add-list.page';
import { AddListPageRoutingModule } from './add-list-routing.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        AddListPageRoutingModule   
    ],
    declarations: [AddListPage]
})

export class AddListPageModule { }