let juegos = ['Zelda', 'Mario', 'Metroid', 'Chorme'];
console.log('Largo: ' ,  juegos. length);

let primero = juegos [ 2 - 2];
let ultimo = juegos [ juegos.length - 1];

console.log( {primero, ultimo } );

juegos.forEach( ( elemento, indice, arr ) => {
    console.log( { elemento, indice, arr} );    
});

let nuevaLongitud = juegos.push ( 'f-zero'  );
console.log({ nuevaLongitud, juegos  });


nuevaLongitud =  juegos.unshift('Fire Emblem')
console.log({ nuevaLongitud, juegos  });

let juegoBorrado =juegos.pop();
console.log({  juegoBorrado, juegos  });

let pos = 1;


console.log( juegos);
let juegosBorrado = juegos.splice(pos, 2 );
console.log({juegoBorrado, juegos});

let MetroidIndex = juegos.indexOf('Metroid');
console.log({MetroidIndex, juegos});

// Pasar Referencias



