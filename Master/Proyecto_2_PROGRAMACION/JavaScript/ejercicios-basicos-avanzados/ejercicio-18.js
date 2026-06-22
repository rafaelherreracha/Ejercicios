/* 
 Usa un bucle for para recorrer todos los destinos del array y elimina los elementos
que tengan el id 11 y el id 40.
Imprime en un console log el array resultante.
Puedes usar este array:
const placesToTravel = [
{ id: 5, name: "Japan" },
{ id: 11, name: "Venecia" },
{ id: 23, name: "Murcia" },
{ id: 40, name: "Santander" },
{ id: 44, name: "Filipinas" },
{ id: 59, name: "Madagascar" },
];
*/

const placesToTravel = [
{ id: 5, name: "Japan" },
{ id: 11, name: "Venecia" },
{ id: 23, name: "Murcia" },
{ id: 40, name: "Santander" },
{ id: 44, name: "Filipinas" },
{ id: 59, name: "Madagascar" },
];

// Recorremos desde el último elemento (length - 1) hasta el primero (0)
for (let i = placesToTravel.length - 1; i >= 0; i--) {
  if (placesToTravel[i].id === 11 || placesToTravel[i].id === 40) {
    placesToTravel.splice(i, 1); // Eliminamos 1 elemento en la posición i
  }
}
/* 
Si eliminas un elemento en la posición i mientras vas hacia adelante, el siguiente elemento "sube" a la posición i, y el bucle se salta esa posición en la siguiente vuelta. Al hacerlo hacia atrás, si eliminas un elemento, el cambio de índices solo afecta a los elementos que ya has procesado, por lo que no pierdes ninguno.
*/