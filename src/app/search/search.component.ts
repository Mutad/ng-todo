import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Task } from '../models/task';
import { TaskDataService } from '../services/task-data.service';

@Component({
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchField: string = '';
  foundTasks: Task[] = [];

  constructor(
    private taskService: TaskDataService,
    private router: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.router.params.subscribe(params => {
      this.searchField = params['querry'];

      let querry = this.searchField.toLowerCase();
      this.foundTasks = this.taskService.getAll().filter(task => {
        if (
          task.title.toLowerCase().includes(querry)
          ||
          task.description.toLowerCase().includes(querry)
          ||
          task.tags.filter(tag => tag.display.toLowerCase() == querry).length != 0
        )
          return true;
      });
    });
  }

  get tasks() {
    console.log(this.taskService.foundTasks);
    return this.foundTasks.sort((a, b) => a.folderId - b.folderId);
  }

}
