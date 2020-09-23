import { Component,Input } from '@angular/core';
import { Task } from './models/task';
import { TaskDataService } from './services/task-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'task';

  newTask:Task = new Task();

  constructor(
    private todoDataService:TaskDataService,
  ){}

  addTodo() {
    this.todoDataService.add(this.newTask);
    this.newTask = new Task();
  }

  toggleTodoComplete(task) {
    this.todoDataService.toggleComplete(task);
  }

  removeTodo(task) {
    this.todoDataService.delete(task.id);
  }

  get tasks() {
    return this.todoDataService.getAll();
  }
}
