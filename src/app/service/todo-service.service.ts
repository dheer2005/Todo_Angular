import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class TodoServiceService {
  id: number = 1;
  notesData: any[] = [];

  notesDataObj: any = {
    id: this.id,
    title: '',
    description: ''
  }


  constructor(private router: Router) { }

  create(obj: any){
    this.notesData.push(obj);
    this.router.navigateByUrl('home');
  }

  remove(id: number){
    this.notesData = this.notesData.filter(e=>e.id!=id);
  }
  
  getList(){
    return this.notesData;
  }

  update(obj: any){
    if(obj.id != 0){
      // this.notesData[obj.id] = {...obj};
      let note = this.notesData.find(e=>e.id==obj.id);
      if(note){
        note.title=obj.title;
        note.description=obj.description
      }
    }
    this.router.navigateByUrl('home');
  }
}
