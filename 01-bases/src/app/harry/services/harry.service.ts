import { Injectable } from "@angular/core";
import { Personaje } from "../interfaces/harry.interface";


@Injectable()
export class HarryService {

    private _personajes: Personaje[] = [
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

      get personajes(): Personaje[]{
          return [...this._personajes];
      }


    constructor(){}

    agregarPersonaje(personaje: Personaje){
        this._personajes.push(personaje);

    }

}