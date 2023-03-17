const personaje = { 
     nombre: 'Tony Stark',
     codeName: 'Iroman' ,
     vivo: false,
     edad: 40,
     coords: {
            lat: 34.034,
            lng: -118.70
     },
     trajes: ['Mark 1, ?Mark 2', 'Mark V', 'Hulkbuster'] ,
     dirección: {
        zip: '10880, 90265' ,
     ubicación: 'Malibu, California',

    },
    'ultima-pelicula': 'Infinity War'
};

console.log( personaje );
console.log('nombre', personaje.nombre);
console.log('nombre', personaje['nombre']);
console.log('edad', personaje['edad']);

console.log('coords',  personaje.coords);
console.log('lat',  personaje.coords.lat);
console.log('lng',  personaje.coords.lng);

console.log('lNo. Trajes', personaje.trajes.length  );
console.log('último Trajes', personaje.trajes[ personaje.trajes.length - 1] );

const x = 'vivo';
console.log('vivo', personaje [x]);

console.log('ultima-pelicula', personaje[ 'ultima-pelicula']); 


// Mas detalles

delete personaje.edad ;
console.log(  personaje );

personaje.casado  = true;

const entriesPares = Object.entries(  personaje);
console.log( entriesPares );

// personaje=true;
console.log( personaje);

personaje.dinero = 100000000;
personaje.casado = false;
personaje.dirección.ubicación= 'Costa Rica';
Object.freeze( personaje);


const propiedades = Object.getOwnPropertyNames( personaje);
const valores = Object.values( personaje);
console.log({ valores});




