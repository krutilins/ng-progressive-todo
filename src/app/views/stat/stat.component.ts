import { Component, Input, OnInit } from '@angular/core';
import { Stat } from 'src/app/model/Stat';
import { TaskStatistics } from 'src/app/model/TaskStatistics';
import { DataHandlerService } from 'src/app/service/data-handler.service';

@Component({
  selector: 'app-stat',
  templateUrl: './stat.component.html',
  styleUrls: ['./stat.component.scss']
})
export class StatComponent implements OnInit {

  tasksStatistics: TaskStatistics;
  stats: Stat[] = [];

  constructor(private dataHanadler: DataHandlerService) { }

  ngOnInit(): void {
    this.dataHanadler.tasksSubject.subscribe(tasks => {
      const completedTasks = tasks.filter(task => task.completed === true).length;
      const uncompletedTasks = tasks.length - completedTasks;
      this.tasksStatistics = new TaskStatistics(completedTasks, uncompletedTasks);

      this.stats = [];

      this.stats.push({
        title: `${this.tasksStatistics.completedTasks} из ${this.tasksStatistics.tasksCount}`,
        icon: `done`,
        description: `Завершенные задачи`
      });

      this.stats.push({
        title: `${this.tasksStatistics.uncompletedTasks} из ${this.tasksStatistics.tasksCount}`,
        icon: `thumb_down_alt`,
        description: `Незавершенные задачи`
      });

      this.stats.push({
        title: `${Math.round(this.tasksStatistics.completedTasks / this.tasksStatistics.tasksCount * 100) || 0} %`,
        icon: `poll`,
        description: `Процент завершенных задач`
      });

      this.stats.push({
        title: `${Math.round(this.tasksStatistics.uncompletedTasks / this.tasksStatistics.tasksCount * 100) || 0} %`,
        icon: `thumb_down_alt`,
        description: `Процент незавершенных задач`
      });
    });
  }

}
