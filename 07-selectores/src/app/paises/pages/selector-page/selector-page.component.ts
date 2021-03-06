import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PaisesService } from '../../services/paises.service';
import { Pais, PaisSmall } from '../../interfaces/pases.interface';
import { switchMap, tap } from "rxjs/operators";

@Component({
  selector: 'app-selector-page',
  templateUrl: './selector-page.component.html'
})
export class SelectorPageComponent implements OnInit {

  miFormulario: FormGroup = this.fb.group({
    region:   ['', [Validators.required]],
    pais:     ['', [Validators.required]],
    frontera: ['', [Validators.required]]

  });

  //llenar selectores
  regiones: string[]=[];
  paises: PaisSmall[]= [];
  fronteras: PaisSmall[]=[];

  //UI
  cargando: boolean = false;

  constructor(private fb: FormBuilder,
              private paisesService: PaisesService) { }


  ngOnInit(): void {
    this.regiones = this.paisesService.regiones;

    //cuando cambie la región 
    // this.miFormulario.get('region')?.valueChanges
    //   .subscribe(region => {
    //     console.log(region);
    //     this.paisesService.getPaisesRegion(region)
    //       .subscribe(paises => {
    //         console.log(paises)
    //         this.paises = paises;
    //       })
    //   })

    this.miFormulario.get('region')?.valueChanges
      .pipe(
        tap(( _ ) =>{
          this.miFormulario.get('pais')?.reset('');
          // this.miFormulario.get('frontera')?.disable();
          this.cargando= true;
        }),
        switchMap(region=> this.paisesService.getPaisesRegion(region))
      )
      .subscribe( paises => {
        this.paises = paises;
        this.cargando= false;
      });

      //cuando cambie el pais
      this.miFormulario.get('pais')?.valueChanges
      .pipe(
        tap(() =>{
          this.miFormulario.get('frontera')?.reset('');
          // this.miFormulario.get('frontera')?.enable();
          this.cargando=true;
        }),
        switchMap(codigo=> this.paisesService.getPaisCodigo(codigo)),
        switchMap(pais => this.paisesService.getPaisesPorCodigos(pais?.borders!))
      )
      .subscribe( paises => {
        // this.fronteras = pais?.borders || [];
        this.fronteras =  paises;
        this.cargando=false;
      });
  }

  guardar(){
    console.log(this.miFormulario.value);
  }
}
