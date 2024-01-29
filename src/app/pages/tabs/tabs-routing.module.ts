import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
    {
        path: 'tabs',
        component: TabsPage,
        children: [            
            {
                path: 'pending-tab',
                loadChildren: () => import('../pending-tab/pending-tab.module').then(m => m.PendingTabPageModule)
            },            
            {
                path: 'completed-tab',
                loadChildren: () => import('../completed-tab/completed-tab.module').then(m => m.CompletedTabPageModule)
            },
            { path: '', redirectTo: '/tabs/pending-tab', pathMatch: 'full' }
        ]
    },
    { path: '', redirectTo: '/tabs/pending-tab', pathMatch: 'full' }
];

@NgModule({
    imports: [RouterModule.forChild(routes)]
})

export class TabsPageRoutingModule { }