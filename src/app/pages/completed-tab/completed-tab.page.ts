import { Component } from '@angular/core';
import { TasksService } from 'src/app/services/tasks.service';

@Component({
    selector: 'completed-tab',
    templateUrl: 'completed-tab.page.html',
    styleUrls: ['completed-tab.page.scss']
})

export class CompletedTabPage {

  constructor(private _tasksService: TasksService) {}

}
