import { NgbDate } from '@ng-bootstrap/ng-bootstrap';

export class Task {
    id: number;
    folderId: number;
    title: string = '';
    description: string = '';
    expireDate: NgbDate = null;
    tags: any[] = [];
    priority: number = 0;
    complete: boolean = false;

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}
