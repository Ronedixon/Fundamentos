

let a = 5;


if ( a >= 10 ) { // undefine, null, una asignación
    console.log ( 'A es mayor ó igual a 10');

} else {
    console.log ('A es menor a 10');
}

// console.log('Fin de progama');


const hoy = new Date( );   // { }
let  dia = hoy.getDay(); // 0: Domingo, 1: lunes, 2: martes.......

console.log( {dia} );

if ( dia === 0) {
    console.log( 'Domingo');
}   else if (dia === 1 ) {
        console.log (' Lunes');


  //      if ( dia === 1) {
 //           console.log('lunes');
 //       } else {
//  console.log (' no es lunes ni domingo');
//        }
} else if (dia === 2) {
    console.log('Martes');
} else {
    console.log (' No es Lunes, martes o domingo ......');
}


// ejercicio practico.
día = 1;

const díasLetras ={
    0: 'Domingo',
    1: 'Lunes',
    2: 'Martes',
    3: 'Miercoles',
    4: 'Jueves',
    5: 'Viernes',
    6: 'Sabado',

}

console.log( díasLetras [ dia]) ;

const díasLetras2 = [  'Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes','Sabado',];
console.log( díasLetras2 [ dia]  );