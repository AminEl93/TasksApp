import { Component } from '@angular/core';
import { TasksService } from 'src/app/services/tasks.service';

@Component({
    selector: 'pending-tab',
    templateUrl: 'pending-tab.page.html',
    styleUrls: ['pending-tab.page.scss']
})

export class PendingTabPage {

  constructor(private _tasksService: TasksService) {}

}
