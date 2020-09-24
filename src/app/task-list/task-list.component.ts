import { Component, Input, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Task } from '../models/task';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  @Input()
  task:Task = null;

  constructor(
    private modalService:NgbModal
  ) { }

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

  openModal(content){
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      console.log(`Closed with: ${result}`);
    console.log(this.task)

    }, (reason) => {
      console.log(`Dismissed`);
    });

  }
}
