import { Folder } from './folder';

describe('Folder', () => {
  it('should create an instance', () => {
    expect(new Folder()).toBeTruthy();
  });

  it('should accept values in the constructor',()=>{
    let folder = new Folder({
      title: 'Reminders'
    });
    expect(folder.title).toEqual('Reminders');
  });
});
