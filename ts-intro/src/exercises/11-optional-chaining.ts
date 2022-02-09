/*
    ===== Código de TypeScript =====
*/

//Encadenamiento opcional


interface Pasajero{
    nombre: string;
    //el signo ? implica que la propiedad es opcional 
    hijos?: string[]
}

const pasajero1: Pasajero={
    nombre: 'Fernadno'
}

const pasajero2: Pasajero={
    nombre: 'Melisa',
    hijos:['Natalia', 'Gabriel']
}


function imprimerHijos(pasajero: Pasajero): void{
    // el signo ? le dice al programa que intente hacer lo que sigue si es seguro
    // si no lo es, no se rompe el código y simplemente lo deja como undefined

    const cuantosHijos= pasajero.hijos?.length || 0;

    console.log(cuantosHijos)
}

imprimerHijos(pasajero1);