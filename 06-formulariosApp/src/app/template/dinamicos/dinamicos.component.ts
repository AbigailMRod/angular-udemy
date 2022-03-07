import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';


interface Persona{
  nombre: string;
  favoritos:Favorito[];
}

interface Favorito{
  id: number;
  nombre: string;
}


@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent   {

  @ViewChild('miFormulario') miFormulario!: NgForm; 
  
  nuevaPelicula: string= '';

  persona: Persona= {
    nombre:'Abigail',
    favoritos:[
      {
        id:1,
        nombre: 'Harry Potter'
      },
      {
        id:2,
        nombre: 'The Big Bang Theory'
      }
    ]
  }

  nombreValido(): boolean{
    return this.miFormulario?.controls.nombre?.invalid 
            && this.miFormulario?.controls.nombre?.touched;
  }

  agregarPelicula(){
    const peliFavorita:Favorito ={
      id: this.persona.favoritos.length + 1,
      nombre: this.nuevaPelicula
    }
    this.persona.favoritos.push({...peliFavorita});
    this.nuevaPelicula='';
  }

  guardar(){
    console.log('Formulario poteado')
  }

  borrar(index: number){
    this.persona.favoritos.splice(index,1);
  }

}
