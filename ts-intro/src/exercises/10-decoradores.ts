/*
    ===== Código de TypeScript =====
*/


/* Un decorador es una función que expande su clase añdiendole funcionalidades especiales */

function classDecorator <T extends {new (...args: any[]): {}}>(
    constructor: T
){
    return class extends constructor{
        newProperty= 'new property';
        hello= 'override';
    };
}


/* Los decoradores sirven para añadir o expandir funcionalidades  */

@classDecorator
class miSuperClase{
    public miPropiedad: string= 'ABC123';

    imprimir(){
        console.log('Hola mundo');
    }
}

console.log(miSuperClase);

const miClase= new miSuperClase();

console.log(miClase.miPropiedad);