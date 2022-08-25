'use strict'
// No cambies los nombres de las funciones.

function factorear(num) {
  // Factorear el número recibido como parámetro y devolver en un array
  // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
  // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
  // Tu código:
  let divPrim = 2; // primer nuñero primo por el q voy a dividir
  let factPrim =[1]; // array donde voy a guardar, con un 1 adentro porq se q en el final siempre va a tener 1 como ultimo divisor

  while (num !== 1) {   //mientras el numero pasado por parámetro sea distinto de 1 y al dividirlo por el numerp primo más chico y de resto 0
    if (num % divPrim === 0) {   
      factPrim.push(divPrim);  // pushearlo dentro del array
      num = num/divPrim;     //sobreescribe el numero pasado por patrámetro por el numero resultante de la división
    }else{
      divPrim ++;         // si el numero resultante es impar, incrementar el 2 de divPrim en 1
    }
  }
  return factPrim;      // sale del while retorna el array
}   


function bubbleSort(array) {
  // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  let swap = true;  // El swap pregunta si hay intercambio
  while (swap) {
    swap = false;
    for (let i = 0; i < array.length -1; i++) {    // itera el array hasta la penúltima posición
      if (array [i] > array [i+1]) {
        let aux = array[i +1];           // guarda en una variable auxiliar el elemento q ya iteró
        array [i +1] = array [i];      // intercambia y sobreescribe la posición
        array [i] = aux;            // vuelve a intercambiar el valor
        swap = true;       // volvemos el swap a true para q vuelva a iniciar el loop, así se evitan pasadas de más
      }    
    }
  }
  return array;     // retorna el array ordenado
}

// otra forma de hacer la función if = [array [i], array[i +1]] = [array [i +1], array [i]]


function insertionSort(array) {
  // Implementar el método conocido como insertionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  for (let i = 1; i < array.length; i++) {   // itera el array a partir de la posición 1 
    let j = i -1;    // seteamos la variable j en i -1 para q recorra el array una posicion atras de i
    let aux = array [i];   // guardamos en auxiliar el valor de la posición i del array
    while (j >= 0 && array [j] > aux) {   // miemtras j sea mayor o igual a 0 y mayor q el numero guardado en aux
      array [j + 1] = array [j];         // sobreescribir j+1 con j
      j --;    // retroceder j dos posiciones del array antes de salir de la función
    }
    array [j +1] = aux;     // sobreescribir j+1 con el valor de aux
  }
  return array;    // retorna el array ordenado
}


function selectionSort(array) {
  // Implementar el método conocido como selectionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando dos arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  for (let i = 0; i < array.length; i++) {         // Itera el array
    let min = i;                                   //  declara variable min para guardar i
    for (let j = i + 1 ; j < array.length; j++) {  // nuevo ciclo for anidado con variable j q comienza en i +1 para comparar dos posiciones de array
     if (array [j] < array [min]) {                // si el elemento j es menor q el elemento min que contiene a i sobreescribir  min con j
      min = j;
     }
    }
    let aux = array[i];           // sobreescrituras locas!!!!
    array[i] = array[min];
    array[min] = aux;
  }
  return array;            // retorna el array ordenado
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  factorear,
  bubbleSort,
  insertionSort,
  selectionSort,
};
