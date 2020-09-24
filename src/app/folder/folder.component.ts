import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Folder } from '../models/folder';
import { FolderDataService } from '../services/folder-data.service';
import { TaskDataService } from '../services/task-data.service';

@Component({
  templateUrl: './folder.component.html',
  styleUrls: ['./folder.component.css']
})
export class FolderComponent implements OnInit {
  folder:Folder = null;

  constructor(
    private folderService:FolderDataService,
    private taskService:TaskDataService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params=>{
      this.folder = this.folderService.getSingle(+params['id']);
    })
  }

  taskCounter(folderId){
    return this.taskService.getByFolderId(folderId).length;
  }

  get tasks(){
    return this.taskService.getByFolderId(this.folder.id);
  }

  addTask(){
    
  }
}
