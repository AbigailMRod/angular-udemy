import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent {

  //i18nSelect
  nombre:string='Abigail';
  genero:string='femenino';

  invitacionMapa={
    'masculino':'invitarlo',
    'femenino':'invitarla'
  }


  //i18nPlural
  clientes:string[]=['Maria', 'Juan', 'Abigail', 'Ramses', 'Concepcion'];

  clientesMapa={
    '=0': 'no tenemos ningún cliente esperando',
    '=1': 'tenemos un cliente esperando.',
    'other': 'tenemos # clientes esperando'
  }

  cambiarCliente(){
    this.nombre='Ramses';
    this.genero='masculino';

  }

  borrarCliente(){
    this.clientes.pop()
  }


  //KeyValuePipe

  persona={
    nombre: 'Abigail',
    edad: 25,
    direccion:'Ciudad de México'
  }

  //Json pipe
  heroes=[
    {
      nombre:'Spiderman',
      vuela:false
    },
    {
      nombre:'Ironman',
      vuela:false
    },
    {
      nombre:'Superman',
      vuela:true
    },
    {
      nombre:'Flas',
      vuela:false
    },
    {
      nombre:'Black Panther',
      vuela:false
    },
  ]

  //async pipe
  //con un observable
  miObservable=interval(1000);

  //con una promesa
  valorPromesa = new Promise((resolve, reject)=>{
    setTimeout(() => {
      resolve('Fin de la promesa, tenemos data de promesa')
    }, 3500);
  })


  
}
