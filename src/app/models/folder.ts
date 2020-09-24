export class Folder {
    id:number;
    title:string = '';

    constructor(values: Object = {}){
        Object.assign(this,values);
    }
}
