import { Component, OnInit } from '@angular/core';
import { TodoServiceService } from '../../service/todo-service.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.css'
})
export class CardsComponent implements OnInit {
  editId: number = 0;
  notesList2: any[] = [];
  filter: string = '';

  constructor(private todoSvc: TodoServiceService, private router: Router){
  }

  ngOnInit(): void {
      this.notesList2 = this.todoSvc.notesData;
  }


  edit(item: any){
    this.editId = item.id
    this.router.navigate([`addCard/${this.editId}`]);
  }
  
  onKeyPress(event: any)
  {
    this.filter = event.target.value;
  }

  search(){
    console.log(this.notesList2);
    return this.filter === '' ? this.notesList2: this.notesList2.filter((cards:any)=> cards?.title.includes(this.filter) || cards?.description.includes(this.filter));
  }

}
