import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FolderComponent } from './folder/folder.component';

const routes: Routes = [
  {path:'folder/:id',component: FolderComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
