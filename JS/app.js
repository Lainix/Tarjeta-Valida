var creditNumber = prompt("Ingresa el numero de tarjeta");// obtener el numero de tarjeta mediante un prompt

function isValidCard(creditNumber){ // creamos la funcion de isValidCard
    if(creditNumber.indexOf(" ") !== -1){ //\s
        creditNumber = prompt("Ingresa el numero de tarjeta sin spacios"); // si no cumple el while se estara repitiendo hasta que se cumpla
    } 
    /*else if(creditNumber === null){
        //creditNumber = prompt("Ingresa el numero de tarjeta")
        return creditNumber = prompt("Ingresa el numero de tarjeta sin spacios");
    }*/
    /*creditNumber = prompt("Ingresa el numero de tarjeta");
    if (creditNumber.indexOf(" ") !== -1){
        alert("Tarjeta invalida: Espacios Espacios encontrados");
        return false;
    }
    if(creditNumber === null) // encaso de darle cancelar
        return false;
} */
    var creditNumberReverse = (creditNumber.split("")).reverse();// invertimos el array
    var pairNumbers = [];  // para guardar los numeros pares

    for(var i=0; i<creditNumberReverse.length; i++){ // itinera los numeros ingresados
        if (i % 2 !== 0){ // condicion para obtener los numeros de las posiciones pares 
            var multiplication = creditNumberReverse[i] * 2 // variable para multiplicar los numeros
            if(multiplication >=10){ //condicion para verificar los numeros
                var sum = 0; // la suma va iniciar en 0
                while(multiplication){ // este while es para los numeros inpar 
                    sum+= multiplication % 10; // se extrae el residuo de %10
                    multiplication = Math.floor(multiplication/10) // redondeamos el cociente de la division con Math.floor
                }// while inpares
                pairNumbers.push(sum) // empujamos los numeros en las posiciones par
            }else {
                pairNumbers.push(multiplication)// empujamos los numeros de las posiciones inpar
            } //else pairNumbers.push(multiplication)
        }else
        pairNumbers.push(parseInt(creditNumberReverse[i]));// comvertimos el string en entero y colocamos en el array
    }
    var numberValidate = 0; // creamos una variable numberValidate para dar valor de inicio 0
    for(var j=0; j<pairNumbers.length; j++){// se itineran los numeros pares
        numberValidate+= pairNumbers[j]; // concatenamos los numeros
    }// for
    if(numberValidate % 10 === 0){ // Deacuerdo al algoritmo de Luhn si la suma de todos los numeros divididos entre 10 da residuo 0 entonces es correcto
        return "Numero de tarjeta: " + creditNumber + " es Valido " ; // el numero es valido
    }else{
        return "Numero de tarjeta: " + creditNumber + " es Invalido " ; // el numero es invalido
    }
}
document.write(isValidCard(creditNumber)); // escribimos en el documento resultado (4152313380623160)