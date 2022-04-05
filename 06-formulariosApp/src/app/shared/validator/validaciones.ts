import { FormControl } from '@angular/forms';


//este archivo se sustituye por el servicio de validaciones
export const nombreApellidoPattern: string ='([a-zA-Z]+) ([a-zA-Z]+)';
export const emailPattern         : string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";


  export const  noPuederSerEse= (control: FormControl) => {
    const valor: string = control.value?.trim().toLowerCase();
    if (valor === 'abifq'){
      return{
        noAbiFq: true
      }
    }
    return null;
  }