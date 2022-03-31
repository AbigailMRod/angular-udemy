import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, Validator } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit {

   /*  miFormulario: FormGroup = new FormGroup({
      nombre      : new FormControl('Teclado inhalámbrico Logitech'),
      precio      : new FormControl(2500),
      existencias : new FormControl(5)
    }) */

    miFormulario: FormGroup = this.formBuilder.group({
      nombre:       [, [Validators.required, Validators.minLength(3)]],
      precio:       [, [Validators.required, Validators.min(0)]],
      existencias:  [, [Validators.required, Validators.min(0)]]
    })


  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    //si falta uno de los datos, la aplicacón va a reventar, es mejor usa el reset
    this.miFormulario.setValue({
      nombre: 'Teclado inhalámbrico Logitech',
      precio: 0,
      existencias:0
    })
  }

  campoValido(campo: string){
    return this.miFormulario.controls[campo].errors && 
            this.miFormulario.controls[campo].touched
  }

  guardar(){
    if(this.miFormulario.invalid){
      this.miFormulario.markAllAsTouched();
      return
    }
    console.log(this.miFormulario.value);
    this.miFormulario.reset();
  }
 

}
