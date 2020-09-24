import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Folder } from '../models/folder';
import { Task } from '../models/task';
import { FolderDataService } from '../services/folder-data.service';
import { TaskDataService } from '../services/task-data.service';

@Component({
  templateUrl: './folder.component.html',
  styleUrls: ['./folder.component.css']
})
export class FolderComponent implements OnInit {
  folder: Folder = null;

  constructor(
    private folderService: FolderDataService,
    private taskService: TaskDataService,
    private route: ActivatedRoute,
  ) { }

  showCompleted:boolean = false;
  toggleCompleted() {
    this.showCompleted = !this.showCompleted;
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.folder = this.folderService.getSingle(+params['id']);
    })
  }

  taskCounter(folderId) {
    return this.taskService.getByFolderId(folderId).length;
  }

  get tasks() {
    let arr = this.tasksUncompleted;
    if (this.showCompleted == true)
    {
      arr = arr.concat(this.tasksCompleted);
    }
    return arr;
  }

  get tasksCompleted() {
    return this.taskService.getByFolderId(this.folder.id).filter(task => task.complete == true);
  }

  get tasksUncompleted() {
    return this.taskService.getByFolderId(this.folder.id).filter(task => task.complete == false);
  }

  addTask() {
    let newTask = new Task({
      title: "New task",
      folderId: this.folder.id
    });
    this.taskService.add(newTask);
    let el = document.querySelector('app-task-list:last-child');
    setTimeout(() => {
      el.scrollIntoView();
    }, 10);
  }
}
