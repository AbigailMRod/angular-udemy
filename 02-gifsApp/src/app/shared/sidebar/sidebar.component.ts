import { Component, Injectable } from '@angular/core';
import { GifsService } from '../../gifs/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [
  ]
})
export class SidebarComponent {

  buscar(termino:string){
    this.giftService.buscarGifs(termino);
  }


  get historial(){
    return this.giftService.historial;
  }



  constructor(private giftService: GifsService) { }

}
