import { Injectable } from '@angular/core';
import { Folder } from '../models/folder';

@Injectable({
  providedIn: 'root'
})
export class FolderDataService {

  lastId:number = 0;

  folders: Folder[] = [];

  constructor() { 
    this.add(new Folder({title:'Reminders'}));
  }

  add(folder:Folder){
    if (!folder.id){
      folder.id = ++this.lastId;
    }
    this.folders.push(folder);
  }

  delete(id:number){
    this.folders = this.folders.filter(folder=>folder.id!=id);
  }

  update(id:number,values:Object={}):Folder{
    let folder = this.getSingle(id);
    if(!folder){
      return null;
    }
    Object.assign(folder,values);
    return folder;
  }

  getAll():Folder[]{
    return this.folders;
  }

  getSingle(id:number):Folder{
    return this.folders.filter(folder=>folder.id === id).pop();
  }
}
