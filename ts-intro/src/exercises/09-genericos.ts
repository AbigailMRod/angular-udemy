/*
    ===== Código de TypeScript =====
*/

/* <T> se utiliza para indicar que puede ser de cualquier tipo, es decir, es un genérico */
 
function queTipoSoy <T> (argumento: T){
    return argumento;
}


let soyString= queTipoSoy ('Hola Mundo');
let soyNumber= queTipoSoy (100);
let soyArreglo= queTipoSoy ([1,2,3,4,5,6,7,8,9,10]);
//podriamos especificar el tipo de dato que es, aunque venga de un genérico 
let soyExplicito= queTipoSoy<number> (200);