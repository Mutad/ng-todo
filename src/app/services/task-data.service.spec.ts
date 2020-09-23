import { inject, TestBed } from '@angular/core/testing';
import { Task } from '../models/task';

import { TaskDataService } from './task-data.service';

describe('TaskDataService', () => {
  let service: TaskDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TaskDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('#getAll()', () => {

    it('should return an empty array by default', inject([TaskDataService], (service: TaskDataService) => {
      expect(service.getAll()).toEqual([]);
    }));

    it('should return all todos', inject([TaskDataService], (service: TaskDataService) => {
      let todo1 = new Task({ title: 'Hello 1', complete: false });
      let todo2 = new Task({ title: 'Hello 2', complete: true });
      service.add(todo1);
      service.add(todo2);
      expect(service.getAll()).toEqual([todo1, todo2]);
    }));

    describe('#save(todo)', () => {

      it('should automatically assign an incrementing id', inject([TaskDataService], (service: TaskDataService) => {
        let todo1 = new Task({ title: 'Hello 1', complete: false });
        let todo2 = new Task({ title: 'Hello 2', complete: true });
        service.add(todo1);
        service.add(todo2);
        expect(service.getSingle(1)).toEqual(todo1);
        expect(service.getSingle(2)).toEqual(todo2);
      }));
    });

    describe('#deleteTodoById(id)', () => {

      it('should remove todo with the corresponding id', inject([TaskDataService], (service: TaskDataService) => {
        let todo1 = new Task({title: 'Hello 1', complete: false});
        let todo2 = new Task({title: 'Hello 2', complete: true});
        service.add(todo1);
        service.add(todo2);
        expect(service.getAll()).toEqual([todo1, todo2]);
        service.delete(1);
        expect(service.getAll()).toEqual([todo2]);
        service.delete(2);
        expect(service.getAll()).toEqual([]);
      }));
  
      it('should not removing anything if todo with corresponding id is not found', inject([TaskDataService], (service: TaskDataService) => {
        let todo1 = new Task({title: 'Hello 1', complete: false});
        let todo2 = new Task({title: 'Hello 2', complete: true});
        service.add(todo1);
        service.add(todo2);
        expect(service.getAll()).toEqual([todo1, todo2]);
        service.delete(3);
        expect(service.getAll()).toEqual([todo1, todo2]);
      }));
  
    });
  
    describe('#updateTodoById(id, values)', () => {
  
      it('should return todo with the corresponding id and updated data', inject([TaskDataService], (service: TaskDataService) => {
        let todo = new Task({title: 'Hello 1', complete: false});
        service.add(todo);
        let updatedTodo = service.update(1, {
          title: 'new title'
        });
        expect(updatedTodo.title).toEqual('new title');
      }));
  
      it('should return null if todo is not found', inject([TaskDataService], (service: TaskDataService) => {
        let todo = new Task({title: 'Hello 1', complete: false});
        service.add(todo);
        let updatedTodo = service.update(2, {
          title: 'new title'
        });
        expect(updatedTodo).toEqual(null);
      }));
  
    });
  
    describe('#toggleTodoComplete(todo)', () => {
  
      it('should return the updated todo with inverse complete status', inject([TaskDataService], (service: TaskDataService) => {
        let todo = new Task({title: 'Hello 1', complete: false});
        service.add(todo);
        let updatedTodo = service.toggleComplete(todo);
        expect(updatedTodo.complete).toEqual(true);
        service.toggleComplete(todo);
        expect(updatedTodo.complete).toEqual(false);
      }));
  
    });

  });
});
