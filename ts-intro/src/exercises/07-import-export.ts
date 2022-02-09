import { Producto, calculaISV } from './06-desestructuracion2';

/*
    ===== Código de TypeScript =====
*/



const carritoCompras: Producto[]= [
    {
        descripcion: 'Telefono 2',
        precio: 200
    },
    {
        descripcion: 'Ipod',
        precio: 500
    }
];


const [total, isv] = calculaISV(carritoCompras);

console.log('Total: ', total);
console.log('Impuesto sobre ventas: ', isv);