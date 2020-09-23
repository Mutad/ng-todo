import { Injectable } from '@angular/core';
import { Task } from '../models/task';

@Injectable({
  providedIn: 'root'
})
export class TaskDataService {

  lastId: number = 0;

  todos: Task[] = [];

  constructor() { }

  add(task: Task) {
    if (!task.id) {
      task.id = ++this.lastId;
    }
    this.todos.push(task);
  }

  delete(id: number) {
    this.todos = this.todos.filter(task => task.id != id);
  }

  update(id:number,values: Object = {}): Task {
    let task = this.getSingle(id);
    if (!task) {
      return null;
    }
    Object.assign(task, values);
    return task;
  }

  getAll():Task[]{
    return this.todos;
  }

  getSingle(id: number): Task {
    return this.todos
      .filter(task => task.id === id)
      .pop();
  }

  toggleComplete(task: Task):Task{
    let updatedTodo = this.update(task.id, {
      complete: !task.complete
    });
    return updatedTodo;
  }
}
