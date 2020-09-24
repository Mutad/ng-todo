import { Component, Input, OnInit } from '@angular/core';
import { Task } from '../models/task';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  @Input()
  task:Task = null;

  constructor() { }

  ngOnInit(): void {
  }

  editTitle($event){
    if ($event.key === "Enter"){
      this.task.title = $event.target.textContent;
      $event.target.blur();
      return;
    }
  }

  editDescription($event){
    if ($event.key === "Enter"){
      this.task.description = $event.target.textContent;
      $event.target.blur();
      return;
    }
  }

}
