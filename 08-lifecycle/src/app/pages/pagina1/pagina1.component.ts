import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-pagina1',
  templateUrl: './pagina1.component.html',
  styles: [
  ]
})
export class Pagina1Component implements 
              OnInit, 
              OnChanges,
              DoCheck,
              AfterContentInit,
              AfterContentChecked,
              AfterViewInit,
              AfterViewChecked,
              OnDestroy {

  nombre: string = 'Abigail';
  segundos: number =0;
  timerSubscription!: Subscription;


  /* lo primero que se crea es la instancia del contructor y ahí se poene cosas
  que queremos que se inicialicen antes de que se contruya el componente */ 
  constructor() { 
    console.log('constructor')
  }
  ngOnInit(): void {
    console.log('ngOnInit');
    this.timerSubscription= interval(1000).subscribe(i => {
      this.segundos = i;
    })
  }

  /**Solo es llamado cuando dentro del componente hay inputs, pero no del tipo 
   * que hay en HTML, sino de inputs que hay de un padre a un hijo @input
   */
  
  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges')
  }
  ngDoCheck(): void {
    console.log('ngDoCheck')
  }
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit')
  }
  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked')
  }
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit')
  }
  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked')
  }

  /** Se llama inmediatamente después de que Angular destruye el componente o
   * directiva. Es útil cuando hay que hacer limpiezas de Observables
   */
  ngOnDestroy(): void {
    console.log('ngOnDestroy');
    this.timerSubscription.unsubscribe();
    console.log('timer limpiadao');
  }

  /** Angular tiene que ver que cosas se tiene que renderizar nuevamente y esas son
   * ngDoCheck -----------se ejecuta antes de los cambios
   * ngAfterContentChecked ------
   * ngAfterViewChecked --- cuando ya se hacer los cambios y se verifica
   */
  guardar(){}

  /** 
   * Para más información https://angular.io/guide/lifecycle-hooks
   */
}
