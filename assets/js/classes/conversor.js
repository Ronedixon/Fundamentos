// necesito un metodo de la clase que se llame covertir
    // covertir: 
       // recibir por parametro cantidad de pesos a convertir    
        // crear constante qu se llame precio dolar
        // dividir cantidad de peso entre el precio del dolar y el resultado guardarlo en una variable
        // devolver el resultado de la conversión

function convertir(peso){
    const dolar = 4500;
   let resultado =  peso / dolar;
    return resultado;   
};
console.log(convertir(150000));
