import { Routes } from '@angular/router';
import { AddNewCardComponent } from './component/add-new-card/add-new-card.component';
import { HomeComponent } from './component/home/home.component';
import { CardsComponent } from './component/cards/cards.component';

export const routes: Routes = [
    
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'addCard',
        component: AddNewCardComponent
    },
    {
        path: 'addCard/:editId',
        component: AddNewCardComponent
    },
    {
        path: 'cards',
        component: CardsComponent
    },
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    }
];
