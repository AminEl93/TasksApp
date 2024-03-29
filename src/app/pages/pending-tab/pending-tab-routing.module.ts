import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PendingTabPage } from './pending-tab.page';

const routes: Routes = [
    { path: '', component: PendingTabPage },
    {
        path: 'add-list/:listId',
        loadChildren: () => import('../add-list/add-list.module').then(m => m.AddListPageModule)
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class PendingTabPageRoutingModule { }