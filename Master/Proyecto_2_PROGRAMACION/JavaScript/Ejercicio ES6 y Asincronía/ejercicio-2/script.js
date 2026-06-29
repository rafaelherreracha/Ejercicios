/*
2.1 Dado el siguiente array, crea una copia usando spread operators.
const pointsList = [32, 54, 21, 64, 75, 43]

2.2 Dado el siguiente objeto, crea una copia usando spread operators.
const toy = {name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor'};

2.3 Dado los siguientes arrays, crea un nuevo array juntandolos usando
spread operatos.
const pointsList = [32, 54, 21, 64, 75, 43];
const pointsLis2 = [54,87,99,65,32];

2.4 Dado los siguientes objetos. Crea un nuevo objeto fusionando los dos

con spread operators.
const toy = {name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor'};
const toyUpdate = {lights: 'rgb', power: ['Volar like a dragon', 'MoonWalk']}

2.5 Dado el siguiente array. Crear una copia de él eliminando la posición 2
pero sin editar el array inicial. De nuevo, usando spread operatos.
const colors = ['rojo', 'azul', 'amarillo', 'verde', 'naranja'];
*/

//2-1
const pointsList = [32, 54, 21, 64, 75, 43]
const copyPoints = [...pointsList]
console.log(copyPoints)


//2-2
const toy = {name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor'};
const copyToy = {...toy}

console.log(copyToy)

//2-3
const pointsList1 = [32, 54, 21, 64, 75, 43];
const pointsLis2 = [54,87,99,65,32];

const copyLists = [...pointsList1,...pointsLis2]
console.log(copyLists)

// 2-4
const toy4 = {name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor'};
const toyUpdate = {lights: 'rgb', power: ['Volar like a dragon', 'MoonWalk']}

const copyToys = {...toy4, ...toyUpdate}
console.log(copyToys)

//2-5
const colors = ['rojo', 'azul', 'amarillo', 'verde', 'naranja'];

const colorsFiltered = [
  ...colors.slice(0, 2), // Copia ['rojo', 'azul']
  ...colors.slice(3)    // Copia ['verde', 'naranja']
];

console.log(colorsFiltered)