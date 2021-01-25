export class TaskStatistics {
  completedTasks: number;
  uncompletedTasks: number;

  constructor(completedTasks: number, uncompletedTasks: number) {
    this.completedTasks = completedTasks;
    this.uncompletedTasks = uncompletedTasks;
  }
}
