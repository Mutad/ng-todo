import { Component, OnInit } from '@angular/core';
import { Folder } from '../models/folder';
import { FolderDataService } from '../services/folder-data.service';
import { TaskDataService } from '../services/task-data.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  searchField:string = '';

  constructor(
    private folderService:FolderDataService,
    private taskService:TaskDataService,
  ) { }

  ngOnInit(): void {
  }

  search(){
    
  }

  get folders(){
    console.log(this.folderService.folders.length)
    return this.folderService.folders;
  }

  addFolder(){
    this.folderService.add(new Folder({title:'New List'}))
  }
}
