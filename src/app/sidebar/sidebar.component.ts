import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink, NavigationExtras, Router } from '@angular/router';
import { strict } from 'assert';
import { Folder } from '../models/folder';
import { FolderDataService } from '../services/folder-data.service';
import { TaskDataService } from '../services/task-data.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  searchField: string = '';

  constructor(
    private folderService: FolderDataService,
    private taskService: TaskDataService,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  search() {
    this.router.navigate(['search',this.searchField]);
  }

  get folders() {
    return this.folderService.folders;
  }

  addFolder() {
    this.folderService.add(new Folder({ title: 'New List' }))
  }
}
