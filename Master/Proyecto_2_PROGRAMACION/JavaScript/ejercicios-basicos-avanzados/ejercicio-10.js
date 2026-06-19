/*
Calcular un promedio es una tarea extremadamente común, así que prueba a implementar esa funcionalidad en la siguiente función.

Puedes usar este array para probarla:

const numbers = [12, 21, 38, 5, 45, 37, 6];
function average(numberList) {
  // Completar
}
*/

const numbers = [12, 21, 38, 5, 45, 37, 6];

function average(numberList) {
  
  let numMedia = numberList.length;
  let sumTotal = 0
  let media = 0

  for(let i = 0 ; i < numberList.length ; i++ ){
    sumTotal += numberList[i];
  }

  media = sumTotal / numMedia;
  
  return media;

}

console.log(average(numbers))