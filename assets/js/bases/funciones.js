
function saludar ( nombre  ) {
    // console.log( arguments);
    // console.log  ('Hola  ' + nombre );
    return [1, 2, 3,] ;

    // Esto nunca se va a ejecutar
    console.log( 'Soy un condigo que está despues de return');
}

const saludar2 = function  ( nombre  ) {
   console.log  ('Hola ' + nombre);
 }

const saludaFlecha =  () => {
    console.log ('Hola flecha');
}

const saludaFlecha2 =  ( nombre ) => {
    console.log ('Hola  ' + nombre );
}

const retornoDeSaludar = saludar ( 'Ronald' , 39, true, 'Venezuela' );


// saludar2( 'Ronald' );

// saludaFlecha( );
// saludaFlecha2 (' Valery');


function sumar( a, b)  {
    return a + b;
}

// const sumar2 = (a,b) => {
 //   return a + b;
// }

const sumar2 = (a,b) => a + b;

function getAleatorio () {
    return Math.random( );
}

// en una función de flecha, que no tenga llaves  {  }
//getAleatorio2 (  )



const  getAleatorio2 = (  ) => Math.random(  );


console.log (  getAleatorio ( ) );
console.log (  getAleatorio2 ( ) );