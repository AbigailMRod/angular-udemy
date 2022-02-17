import { Component } from '@angular/core';
import { Color, Heroe } from '../../interfaces/ventas.interfaces';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styles: [
  ]
})
export class OrdenarComponent {

  toggleMayusculas:boolean=false;
  
  orderBy: string= '';
  heroes: Heroe[]=[
    {
      nombre:'Spiderman',
      vuela: false,
      color: Color.rojo
    },
    {
      nombre:'Black Panter',
      vuela: false,
      color: Color.negro
    },
    {
      nombre:'Capitan América',
      vuela: false,
      color: Color.azul
    },
    {
      nombre:'Hulk',
      vuela: false,
      color: Color.verde
    },
    {
      nombre:'Ironman',
      vuela: true,
      color: Color.rojo
    },
  ]

  cambiar(){
    this.toggleMayusculas = !this.toggleMayusculas;
  }

  cambiarOrden(valor:string){
    this.orderBy = valor;

  }
  
}
