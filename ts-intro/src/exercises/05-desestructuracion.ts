/*
    ===== Código de TypeScript =====
*/

interface Reproductor{
    volumen:number;
    segundo: number;
    cancion: string;
    detalles: Detalles
}

interface Detalles{
    autor: string;
    anio: number; 
}

const reproductor: Reproductor = {
    volumen:90,
    segundo:36,
    cancion: 'Hola',
    detalles:{
        autor: 'Ed Sheran',
        anio:2005
    }
}

//desestructuración de objetos
//En la desestructuración de objetos importa el nombre y no la posición 

const {volumen, segundo, cancion, detalles} = reproductor;
const {autor} = detalles;

console.log('El volumen actual es de: ', volumen );
console.log('El segundo actual es de: ', segundo);
console.log('La canción actual es de: ', cancion);
console.log('El autor es : ', autor);


//Desestructuración de arreglos 
// En la desestructuración de arreglos no importa el nombre si no la posición 

const dbz:string[] = ['Goku', 'Vegeta', 'Trunks'];
const [p1, p2]=dbz

console.log('Perosnaje1: ', p1);
console.log('Perosnaje2: ', p2);
console.log('Perosnaje3: ', dbz[2]);