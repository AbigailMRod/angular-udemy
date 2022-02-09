/*
    ===== Código de TypeScript =====
*/

export interface Producto{
    descripcion: string;
    precio: number;
}

const telefono: Producto={
    descripcion: 'Xiaomi Redmi 9',
    precio: 150
}
 
const tableta: Producto={
    descripcion: 'Ipad 5',
    precio:540
}

export function calculaISV(productos: Producto[]): [number, number]{
    let total=0;
    //se puede desestructurar si solo queremos el precio, haciendo uso de las llaves
    //Esto es la desestructuración de argumentos
    productos.forEach(({precio})=>{
        total += precio;
    })
     return [total ,total *0.15];
}


const articulos=[telefono, tableta];

const [total, isv]= calculaISV(articulos);

console.log('Total; ', total);
console.log('Impuesto sobre ventas; ', isv);