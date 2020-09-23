import { Component,Input } from '@angular/core';
import { Todo } from './models/todo';
import { TodoDataService } from './services/todo-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo';

  newTodo:Todo = new Todo();

  constructor(
    private todoDataService:TodoDataService,
  ){}

  addTodo() {
    this.todoDataService.add(this.newTodo);
    this.newTodo = new Todo();
  }

  toggleTodoComplete(todo) {
    this.todoDataService.toggleComplete(todo);
  }

  removeTodo(todo) {
    this.todoDataService.delete(todo.id);
  }

  get todos() {
    return this.todoDataService.getAll();
  }
}
