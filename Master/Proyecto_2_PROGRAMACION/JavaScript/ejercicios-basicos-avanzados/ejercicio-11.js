/*
Calcular promedio mezclado: Crea una función que reciba por parámetro un array y
cuando es un valor number lo sume y de lo contrario cuente la longitud del string y lo
sume.
Es un poco locura, pero podremos ejercitar nuestra lógica con este ejercicio.
Puedes usar este array para probar tu función:

*/

const mixedElements = [
6,
1,
"Marvel",
1,
"hamburguesa",
"10",
"Prometeo",
8,
"Hola mundo",
];
function averageWord(list) {
  let suma = 0;

  for (let i = 0; i < list.length; i++) {
    const element = list[i];
    
    if (typeof element === "string") {
      // Si es string, sumamos su longitud
      suma += element.length;
    } else if (typeof element === "number") {
      // Si es number, sumamos el valor
      suma += element;
    }
  }

  // Calculamos el promedio dividiendo la suma total por la cantidad de elementos
  const promedio = suma / list.length;
  
  console.log("Suma total:", suma);
  console.log("Promedio:", promedio);
  return promedio;
}

averageWord(mixedElements);