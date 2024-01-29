import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PendingTabPageRoutingModule } from './pending-tab-routing.module';
import { ComponentsModule } from '../../components/components.module';

import { PendingTabPage } from './pending-tab.page';

@NgModule({
    imports: [
        IonicModule,
        CommonModule,
        FormsModule,
        PendingTabPageRoutingModule,
        ComponentsModule  
    ],
    declarations: [PendingTabPage]
})

export class PendingTabPageModule { }