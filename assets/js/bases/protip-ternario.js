
const elMayor = ( a,  b ) => ( a > b ) ? a : b;

const tieneMembresia = ( miembro) => (miembro) ? '2 Dólares' : '10 Dólares';

console.log(  elMayor ( 20, 15) );
console.log( tieneMembresia (false) );


const amigo = false;
const amigoArr =[
    'Peter',
    'Tony',
    'Dr. Strange',
    amigo ? 'Thor' : 'Loki',
    // (() => 'Nick Fury') ( ),
    elMayor (10, 15)
];

console.log (amigoArr);


const nota = 99; // A+, A, B+ ....
const grado = nota >= 95 ? 'A+'   :
                            nota >= 90 ? 'A'     :
                            nota >= 95 ? 'B+'  :
                            nota >= 95 ? 'B'    :
                            nota >= 95 ? 'C+'  :
                            nota >= 95 ? 'C'    :  'F';


console.log({ nota, grado   });




