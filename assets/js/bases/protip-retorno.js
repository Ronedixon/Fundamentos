
// function crearPersonas ( nombre, apellido) {
 //    return {       nombre ,        apellido    }
// }

const crearPersona = ( nombre, apellido)  =>   ({nombre ,    apellido});



const persona =  crearPersona ( ' Ronald', 'Rodriguez');
console.log( persona );


function imprimeArgumentos (){
    console.log( arguments);
}

imprimeArgumentos(10, true, false, 'Ronald ', 'Saludo');


const imprimeArgumentos2 = ( edad, ... args  ) => {
    // console.log({ edad,  args});
  return args;
}



const argumentos = imprimeArgumentos2(10, true, false, 'Ronald ', 'Saludo');
console.log({ argumentos});

const [ casado, vivo, nombre, saludo ] = imprimeArgumentos2(39, true, false, 'Ronald', 'Hola');
console.log({ casado, vivo, nombre, saludo});


const { apellido:  nuevoApellido  } =  crearPersona( ' Ronald', 'Rodriguez');
console.log({nuevoApellido});


const tony = { 
    nombre: 'Tony Stark',
    codeName: 'Iroman' ,
    vivo: false,
    edad: 40,
     trajes: ['Mark 1, ?Mark 2', 'Mark V', 'Hulkbuster'] ,
   };
   
// const imprimePropiedades = ( personaje) => {
 //   console.log ( personaje.nombre);
 //   console.log ( personaje.codeName);
 //   console.log ( personaje.vivo);
 //   console.log ( personaje.edad);
 //   console.log ( personaje.trajes);
// };

const imprimePropiedades = ({nombre, codeName, vivo, edad = 15, trajes}) => {
    console.log ({nombre});
    console.log ( {codeName});
    console.log ({vivo});
    console.log ( {edad});
    console.log ( {trajes});

};

imprimePropiedades ( tony);