import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllTasksComponent } from './all-tasks/all-tasks.component';
import { FolderComponent } from './folder/folder.component';
import { SearchComponent } from './search/search.component';
import { TodayTasksComponent } from './today-tasks/today-tasks.component';

const routes: Routes = [
  {path:'folder/:id',component: FolderComponent},
  {path:'search/:querry', component: SearchComponent},
  {path:'all', component: AllTasksComponent},
  {path:'today', component: TodayTasksComponent},
  {path:'',redirectTo:'/all', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
