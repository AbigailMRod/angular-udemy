import { Component } from '@angular/core';
import { Personaje } from '../interfaces/harry.interface';
import { HarryService } from '../services/harry.service';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {

    nuevo: Personaje={
    nombre: 'Severus Snape',
    poder: 222
  }

  constructor(){}
  
}
