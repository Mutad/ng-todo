import { Injectable } from '@angular/core';
import { Task } from '../models/task';

@Injectable({
  providedIn: 'root'
})
export class TaskDataService {

  lastId: number = 0;

  tasks: Task[] = [];

  foundTasks: Task[] = [];

  constructor() {
    let tsk = new Task({
      title:'Hello world',
      folderId:1
    });

    let tsk2 = {...tsk};
    tsk2.description = "Lorem ipsum dolor sit amen";
    this.add(tsk2);
    
    this.add({...tsk});
    
  }

  add(task: Task) {
    if (!task.id) {
      task.id = ++this.lastId;
    }
    this.tasks.push(task);
  }

  delete(id: number) {
    this.tasks = this.tasks.filter(task => task.id != id);
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
    return this.tasks;
  }

  getSingle(id: number): Task {
    return this.tasks
      .filter(task => task.id === id)
      .pop();
  }

  toggleComplete(task: Task):Task{
    let updatedTask = this.update(task.id, {
      complete: !task.complete
    });
    return updatedTask;
  }

  getByFolderId(folderId:number){
    return this.tasks.filter(task=>task.folderId == folderId);
  }
}
