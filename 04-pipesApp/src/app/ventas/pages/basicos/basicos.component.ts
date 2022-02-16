import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent{
  constructor() { }

  nombreLower: string = 'abigail';
  nombreUpper: string = 'ABIGAIL';
  nombreCompleto: string= 'aBigAil MuÑOz';

  fecha: Date = new Date(); //el día de hoy


 

}
