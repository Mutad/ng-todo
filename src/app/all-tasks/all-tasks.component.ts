import { Component, OnInit } from '@angular/core';
import { TaskDataService } from '../services/task-data.service';

@Component({
  templateUrl: './all-tasks.component.html',
  styleUrls: ['./all-tasks.component.css']
})
export class AllTasksComponent implements OnInit {

  constructor(
    private taskService:TaskDataService
  ) { }

  ngOnInit(): void {
  }

  showCompleted:boolean = false;
  toggleCompleted() {
    this.showCompleted = !this.showCompleted;
  }

  get tasks(){
    let arr = this.tasksUncompleted;
    if (this.showCompleted == true)
    {
      arr = arr.concat(this.tasksCompleted);
    }
    return arr;
  }

  get tasksCompleted() {
    return this.taskService.tasks.filter(task => task.complete == true);
  }

  get tasksUncompleted() {
    return this.taskService.tasks.filter(task => task.complete == false);
  }

}
