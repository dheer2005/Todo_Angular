import { Component,OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TodoServiceService } from '../../service/todo-service.service';
import { ActivatedRoute, ParamMap, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-add-new-card',
  standalone: true,
  imports: [CommonModule,FormsModule, RouterLink],
  templateUrl: './add-new-card.component.html',
  styleUrl: './add-new-card.component.css'
})
export class AddNewCardComponent implements OnInit{
  Id: number =0;
  notesDto: any={
    id: this.todoSvc.id,
    title: '',
    description: ''
  }
  constructor(private todoSvc: TodoServiceService, private router: Router, private activated_route: ActivatedRoute){
    
  }

  ngOnInit(): void {
    this.activated_route.paramMap.subscribe((param: ParamMap)=>{
      this.Id = Number(param.get('editId')??'0');
      this.notesDto = this.todoSvc.notesData.find((note) => note?.id == this.Id)??this.notesDto;
    });
  }
  
  findData(id:number){
    let obj = this.todoSvc.notesData.find((note) => note.id == id);
    this.todoSvc.update(obj);
  }

  save(){
    let newObj ={
      id: this.notesDto.id,
      title: this.notesDto.title,
      description: this.notesDto.description
    }
    this.todoSvc.create(newObj);
    this.todoSvc.id += 1;
  }

  removeData(id: number){
    const isDelete = confirm("Do you want to delete");
    if(isDelete){
      this.todoSvc.remove(id);
    this.router.navigateByUrl('home');
    }
    
  }
}
