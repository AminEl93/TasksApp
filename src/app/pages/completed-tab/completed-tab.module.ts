import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CompletedTabPage } from './completed-tab.page';

import { CompletedTabPageRoutingModule } from './completed-tab-routing.module';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
    imports: [
        IonicModule,
        CommonModule,
        FormsModule,
        CompletedTabPageRoutingModule,
        ComponentsModule
    ],
    declarations: [CompletedTabPage]
})

export class CompletedTabPageModule { }