export class Task {
    id: number;
    title: string = '';
    description: string = '';
    expireDate: number = Date.now();
    tags: string[] = [];
    priority:number = 0;
    complete: boolean = false;

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}
