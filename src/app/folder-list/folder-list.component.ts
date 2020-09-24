import { Component, Input, OnInit } from '@angular/core';
import { Folder } from '../models/folder';
import { TaskDataService } from '../services/task-data.service';

@Component({
  selector: 'app-folder-list',
  templateUrl: './folder-list.component.html',
  styleUrls: ['./folder-list.component.css']
})
export class FolderListComponent implements OnInit {

  @Input()
  folder:Folder;

  constructor(
    private taskService:TaskDataService,
  ) { }

  ngOnInit(): void {
  }

  renameFolder($event){
    if ($event.key === "Enter"){
      this.folder.title = $event.target.textContent;
      $event.target.blur();
      return;
    }
  }

  taskCounter(folderId){
    return this.taskService.getByFolderId(folderId).length;
  }
}
