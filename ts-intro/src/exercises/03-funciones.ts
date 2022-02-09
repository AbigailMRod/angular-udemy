function sumar (a:number,b:number):number{
    return a +b;
}

const sumarFlecha = (a:number,b:number):number =>{
    return a +b;
}


// primero se ponen los argumentos obligartorios, después los opcionales y al final los que tienen un valor por defecto
function multiplicar(numero:number, otroNumero?:number, base:number =2):number{
    return numero * base;
}

/* const resultado= multiplicar(10,20);
console.log(resultado); */


interface PersonajeLOR{
    nombre:string;
    pv: number;
}

function curar(personaje:PersonajeLOR, curar): void{
    personaje.pv  += curar;    
}

const nuevoPersonaje: PersonajeLOR= {
    nombre: 'Abi',
    pv:50
}

curar(nuevoPersonaje,20); 