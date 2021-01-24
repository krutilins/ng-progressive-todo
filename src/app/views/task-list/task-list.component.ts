import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/model/Task';
import { DataHandlerService } from 'src/app/service/data-handler.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {

  tasks: Task[];

  constructor(private dataHandler: DataHandlerService) { }

  ngOnInit(): void {
    this.tasks = this.dataHandler.getTasks();
  }

}
