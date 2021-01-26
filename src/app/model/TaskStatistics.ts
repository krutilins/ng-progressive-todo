export class TaskStatistics {
  completedTasks: number;
  uncompletedTasks: number;
  tasksCount: number;

  constructor(completedTasks: number, uncompletedTasks: number) {
    this.completedTasks = completedTasks;
    this.uncompletedTasks = uncompletedTasks;
    this.tasksCount = completedTasks + uncompletedTasks;
  }
}
