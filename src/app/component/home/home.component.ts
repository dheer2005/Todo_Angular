import { Component } from '@angular/core';
import { CardsComponent } from "../cards/cards.component";
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { TodoServiceService } from '../../service/todo-service.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CardsComponent, RouterOutlet, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  
constructor(private router: Router) { }

  navigate(){
    this.router.navigateByUrl('/addCard');
  }
}
