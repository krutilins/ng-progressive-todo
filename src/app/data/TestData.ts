import { Category } from '../model/Category';
import { Priority } from '../model/Priority';
import { Task } from '../model/Task';

export class TestData {
  static categories: Category[] = [
    {id: 1, title: 'Работа'},
    {id: 2, title: 'Семья'},
    {id: 3, title: 'Учеба'},
    {id: 4, title: 'Отдых'},
    {id: 5, title: 'Спорт'},
    {id: 6, title: 'Еда'},
    {id: 7, title: 'Финансы'},
    {id: 8, title: 'Гаджеты'},
    {id: 9, title: 'Здоровье'},
    {id: 10, title: 'Автомобиль'},
  ];

  static priorities: Priority[] = [
    {id: 1, title: 'Низкий', color: '#e5e5e5'},
    {id: 2, title: 'Средний', color: '#85D1B2'},
    {id: 3, title: 'Высокий', color: '#F1828D'},
    {id: 4, title: 'Очень срочно', color: '#F1128D'}
  ];

  static tasks: Task[] = [
    {
      id: 1,
      title: 'Залить бензин полный бак',
      priority: TestData.priorities[2],
      completed: false,
      category: TestData.categories[9],
      date: new Date('202-01-15')
    },
    {
      id: 2,
      title: 'Почистить зубы',
      priority: TestData.priorities[1],
      completed: false,
      category: TestData.categories[8]
    },
    {
      id: 3,
      title: 'Сверстать один блок html',
      priority: TestData.priorities[4],
      completed: false,
      date: new Date('2020-01-17')
    },
    {
      id: 4,
      title: 'Убраться в комнате',
      priority: TestData.priorities[2],
      completed: true,
      category: TestData.categories[1],
      date: new Date('2019-11-17')
    },
    {
      id: 5,
      title: 'Прочесть книгу',
      priority: TestData.priorities[1],
      completed: false,
      category: TestData.categories[5],
      date: new Date('2020-11-17')
    },
    {
      id: 6,
      title: 'Не забыть подышать свежим воздухом',
      priority: TestData.priorities[3],
      completed: true,
      category: TestData.categories[4],
      date: new Date('2019-11-12')
    },
    {
      id: 7,
      title: 'Уделить время семье',
      priority: TestData.priorities[2],
      completed: true,
      category: TestData.categories[4]
    },
    {
      id: 8,
      title: 'Уделить время отдыху',
      priority: TestData.priorities[2],
      completed: false,
      category: TestData.categories[7],
      date: new Date('2019-11-13')
    },
    {
      id: 9,
      title: 'Попить воды',
      priority: TestData.priorities[4],
      completed: true,
      category: TestData.categories[5],
      date: new Date('2019-11-15')
    },
    {
      id: 10,
      title: 'Посмотерть видео на youtube',
      priority: TestData.priorities[2],
      completed: false,
      date: new Date('2019-11-16')
    },
    {
      id: 11,
      title: 'Саморазвитие',
      priority: TestData.priorities[2],
      completed: true,
      category: TestData.categories[5],
      date: new Date('2019-11-11')
    },
    {
      id: 12,
      title: 'Покататься на велосипеде',
      priority: TestData.priorities[4],
      completed: true,
      category: TestData.categories[7],
      date: new Date('2019-11-11')
    },
    {
      id: 13,
      title: 'Сделать свой браузер',
      priority: TestData.priorities[1],
      completed: true,
      category: TestData.categories[8],
      date: new Date('2019-11-11')
    }
  ];
}
