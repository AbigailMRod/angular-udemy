import { Component, Input, OnInit } from '@angular/core';
import { Heroe } from '../../interfaces/heroes.interface';
import { HeroeComponent } from '../../pages/heroe/heroe.component';

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
  styles: [`
  mat-card{
    margin-top:20px
  }
  `
  ]
})
export class HeroeTarjetaComponent {

  @Input() heroe!:Heroe;


}
