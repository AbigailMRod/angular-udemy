/*
    ===== Código de TypeScript =====
*/

/* las clases pueden ser private, public y statis y eso dependerá del alcance que queremos que tengas
private: la propiedad solo va a ser visible dentro de la clase 
public: fuera de la clase también se puede ver la propiedad 
static: voy a poder acceder al valor de la propiedad sin crear una instacia de la clase  */

class PersonaNormal {
  constructor(public nombre: string, public direccion: string) {}
}

class Heroe extends PersonaNormal{
  /*     alterEgo: string;
    edad: number;
    nombreReal: string;

    imprimirNombre(){
        return this.alterEgo + ' ' + this.nombreReal;
    }
    //El constructor es una función que se va a llamar cuando creo una instancia de mi clase 

    constructor(alterEgo: string){
        //si no va el thi. es porque está usando el argumento que se da en el constructor, si se pone el
        //this. es porque se está llamando a la instancia creada de la clase  
        this.alterEgo= alterEgo;
        
    } */

  //LO MÁS COMÚN ES UTILIZAR
  constructor(public alterEgo: string, public edad: number, public nombreReal: string) {
      super(nombreReal, 'New York');
  }
}

const ironMan = new Heroe('IronMan', 45, 'Tony Stark');
console.log(ironMan);
