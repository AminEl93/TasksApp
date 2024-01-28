import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PendingTabPage } from './pending-tab.page';

const routes: Routes = [
    {
        path: '',
        component: PendingTabPage,
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class PendingTabPageRoutingModule { }