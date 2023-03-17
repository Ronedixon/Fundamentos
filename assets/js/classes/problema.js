const ron = {
    nombre:'Ronald',
    edad: 39,
    imprimir() {
        console.log(`n ombre: ${ this.nombre} - edad: ${ this.edad}`);
    }
}

const edi = {
    nombre: 'Edixon',
    edad: 20,
    imprimir() {
        console.log(`nombre: ${ this.nombre} - edad: ${ this.edad}`);
    }
};

// ron.imprimir();

function Persona(nombre, edad ) {
    console.log('se ejecuto esta linea');

    this.nombre = nombre;
    this.edad = edad;

    this.imprimir = function ( ) {
        console.log(`nombre: ${ this.nombre} - edad: ${ this.edad}`)
    }

}

const maria = new Persona ('Maria', 18);
const julia = new Persona ('julia', 40);
// console.log(maria);
maria.imprimir( );
julia.imprimir( );