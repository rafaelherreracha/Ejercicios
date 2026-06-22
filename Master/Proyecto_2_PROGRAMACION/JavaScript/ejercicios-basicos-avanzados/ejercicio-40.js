/*
Crea una función llamada findArrayIndex que reciba como parametros un array de textos y un texto y devuelve la posición del array cuando el valor del array sea igual al valor del texto que enviaste como parámetro.
Haz varios ejemplos y compruébalos.



const mainCharacters = [
  "Luke",
  "Leia",
  "Han Solo",
  "Chewbacca",
  "Rey",
  "Anakin",
  "Obi-Wan",
];
Usando la función anterior benefíciate de poder conocer el indice del array para crear una función llamada removeItem que, pasándole un array y un texto como parámetros (los mismos parámetros que en el anterior ejercicio), llame a la función anteriormente creada findArrayIndex y obtén el indice para posteriormente usar la función de javascript .splice() para eliminar el elemento del array.
Es decir, tienes que crear una función que elimine elementos del array y retorne el nuevo array sin el elemento, apoyándote en findArrayIndex.

Finalmente retorna el array.

De nuevo haz varios ejemplos para practicar y comprueba que funcionan correctamente.
*/

function findArrayIndex(array, text) {
  // Recorremos el array buscando el texto
  for (let i = 0; i < array.length; i++) {
    if (array[i] === text) {
      return i; // Retornamos el índice en cuanto lo encontramos
    }
  }
  return -1; // Retornamos -1 si el texto no existe en el array
}

function removeItem(array, text) {
  // Obtenemos el índice usando nuestra función anterior
  const index = findArrayIndex(array, text);

  // Si index es distinto de -1, significa que el elemento existe
  if (index !== -1) {
    array.splice(index, 1); // Eliminamos 1 elemento en la posición encontrada
  } else {
    console.log(`El elemento "${text}" no se encuentra en el array.`);
  }

  return array; // Retornamos el array modificado
}