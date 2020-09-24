import { Component, OnInit } from '@angular/core';
import { NgbDate } from '@ng-bootstrap/ng-bootstrap';
import { TaskDataService } from '../services/task-data.service';

@Component({
  templateUrl: './today-tasks.component.html',
  styleUrls: ['./today-tasks.component.css']
})
export class TodayTasksComponent implements OnInit {

  constructor(
    private taskService:TaskDataService
  ) { }

  ngOnInit(): void {
  }

  get tasks(){
    let dt = new Date()
    let ngdt = new NgbDate(dt.getUTCFullYear(),dt.getUTCMonth(),dt.getDate());
    return this.taskService.tasks.filter(task=>task.expireDate.day == ngdt.day &&task.expireDate.month == ngdt.month && task.expireDate.year == ngdt.year);
  
  }

}
