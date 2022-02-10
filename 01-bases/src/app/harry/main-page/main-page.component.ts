import { Component } from '@angular/core';
import { Personaje } from '../interfaces/harry.interface';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {

  personajes: Personaje[] = [
    {
      nombre: 'Harry Potter',
      poder:1500

    },
    {
      nombre:'Hermione Granger',
      poder:1700
    },
    {
      nombre:'Ron Weasley',
      poder: 1400
    },
    {
      nombre: 'Albus Dumbledore',
      poder:3000
    },
    {
      nombre: 'Luna Lovegood',
      poder: 1200 
    },
    {
      nombre: 'Draco Malfoy',
      poder: 1300
    }
  ];

  nuevo: Personaje={
    nombre: 'Severus Snape',
    poder: 222
  }

  agregarNuevoPersonaje(argumento:Personaje){
    this.personajes.push(argumento);
  }
  

}
