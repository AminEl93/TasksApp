import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompletedTabPage } from './completed-tab.page';

const routes: Routes = [
    {
        path: '',
        component: CompletedTabPage,
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class CompletedTabPageRoutingModule { }
