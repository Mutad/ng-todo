import { Injectable } from '@angular/core';
import { Todo } from '../models/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  lastId: number = 0;

  todos: Todo[] = [];

  constructor() { }

  add(todo: Todo) {
    if (!todo.id) {
      todo.id = ++this.lastId;
    }
    this.todos.push(todo);
  }

  delete(id: number) {
    this.todos = this.todos.filter(todo => todo.id != id);
  }

  update(id:number,values: Object = {}): Todo {
    let todo = this.getSingle(id);
    if (!todo) {
      return null;
    }
    Object.assign(todo, values);
    return todo;
  }

  getAll():Todo[]{
    return this.todos;
  }

  getSingle(id: number): Todo {
    return this.todos
      .filter(todo => todo.id === id)
      .pop();
  }

  toggleComplete(todo: Todo):Todo{
    let updatedTodo = this.update(todo.id, {
      complete: !todo.complete
    });
    return updatedTodo;
  }
}
