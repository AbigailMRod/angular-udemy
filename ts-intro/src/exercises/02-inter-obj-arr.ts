/*
    ===== Código de TypeScript =====
*/

let habilidades: string[] = ['Bash', 'Counter', 'Healig'];


interface Personaje {
    nombre:string;
    hp:number;
    habilidades:string[];
    puebloNatal?: string; //para indicar que es un parámetro opcional
}

const personaje: Personaje = {
    nombre: 'Abi',
    hp: 100,
    habilidades: ['Bash', 'Counter', 'Happy']
}

personaje.puebloNatal = 'Pueblo paleta';


console.table(personaje);
