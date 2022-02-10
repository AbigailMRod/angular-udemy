import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Personaje } from '../interfaces/harry.interface';
import { HarryService } from '../services/harry.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
})
export class AgregarComponent {
  @Input()
  nuevo: Personaje = {
    nombre: '',
    poder: 0,
  };

  constructor(private harryService: HarryService){}

  // @Output() nuevoPersonaje: EventEmitter<Personaje> = new EventEmitter();

  agregar() {
    if (this.nuevo.nombre.trim().length === 0) {
      return;
    }
    // this.nuevoPersonaje.emit(this.nuevo);

    this.harryService.agregarPersonaje(this.nuevo);

    this.nuevo = {
      nombre: '',
      poder: 0,
    };
  }
}
