import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { TestData } from '../data/TestData';
import { Category } from '../model/Category';
import { Task } from '../model/Task';

@Injectable({
  providedIn: 'root'
})
export class DataHandlerService {

  tasksSubject = new BehaviorSubject<Task[]>(TestData.tasks);
  categoriesSubject = new BehaviorSubject<Category[]>(TestData.categories);

  constructor() {
    this.fillTasks();
  }

  fillTasks(): void {
    this.tasksSubject.next(TestData.tasks);
  }

  fillTasksByCategory(category: Category): void {
    if (category === TestData.categories[0]) {
      this.tasksSubject.next(TestData.tasks);
    } else {
      this.tasksSubject.next(
        TestData.tasks.filter(task => task.category === category)
      );
    }
  }
}
