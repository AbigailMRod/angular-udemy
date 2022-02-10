import { Component } from '@angular/core';
import { HarryService } from '../services/harry.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
})
export class PersonajesComponent {


    // @Input() personajes: Personaje[]=[];

    get personajes(){
      return this.harryService.personajes;
    }

    constructor(private harryService: HarryService){}

}
