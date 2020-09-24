import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { FolderComponent } from './folder/folder.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FolderListComponent } from './folder-list/folder-list.component';
import { TaskListComponent } from './task-list/task-list.component';

import { TagInputModule } from 'ngx-chips';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SearchComponent } from './search/search.component';
import { AllTasksComponent } from './all-tasks/all-tasks.component';
import { TodayTasksComponent } from './today-tasks/today-tasks.component'; 

@NgModule({
  declarations: [
    AppComponent,
    FolderComponent,
    SidebarComponent,
    FolderListComponent,
    TaskListComponent,
    SearchComponent,
    AllTasksComponent,
    TodayTasksComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    TagInputModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
