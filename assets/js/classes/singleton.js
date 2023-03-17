

class Singleton {

    static instancia;
    nombre = '';

    constructor(nombre = '' ){

        if( !!Singleton.instancia){
            return Singleton.instancia;
        }
       
        Singleton.instancia = this;
        this.nombre = nombre;

    }
}

const instancia1 = new Singleton('Iroman');
const instancia2 = new Singleton('Spiderman');
const instancia3 = new Singleton('BlackPhanter');

console.log(`Nombre de la instancia es : ${ instancia1.nombre}`);
console.log(`Nombre de la instancia es : ${ instancia2.nombre}`);
console.log(`Nombre de la instancia es : ${ instancia3.nombre}`);
