/*
Crea una función llamada swap que reciba un array y dos parametros que sean indices del array.

La función deberá intercambiar la posición de los valores de los indices que hayamos enviado como parametro. Es decir, intercambiar el lugar de un elemento por otro dentro del array.

Retorna el array resultante.

const fantasticFour = [
  "La antorcha humana",
  "Mr. Fantástico",
  "La mujer invisible",
  "La cosa",
];
*/

const fantasticFour = [
  "La antorcha humana",
  "Mr. Fantástico",
  "La mujer invisible",
  "La cosa",
];

function swap(array, index1, index2) {
  // 1. Guardamos el valor del primer índice en una variable temporal
  let temporal = array[index1];

  // 2. Sobrescribimos el valor del primer índice con el del segundo
  array[index1] = array[index2];

  // 3. Asignamos a la segunda posición el valor que guardamos al principio
  array[index2] = temporal;

  // 4. Retornamos el array ya modificado
  return array;
}