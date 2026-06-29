/*
1.1 En base al siguiente javascript, crea variables en base a las propiedades
del objeto usando object destructuring e imprimelas por consola. Cuidado,
no hace falta hacer destructuring del array, solo del objeto.

const game = {title: 'The Last of Us 2', gender: ['action', 'zombie', 'survival'], year: 2020}

1.2 En base al siguiente javascript, usa destructuring para crear 3 variables
llamadas fruit1, fruit2 y fruit3, con los valores del array. Posteriormente
imprimelo por consola.

const fruits = ['Banana', 'Strawberry', 'Orange'];

1.3 En base al siguiente javascript, usa destructuring para crear 2
variables igualandolo a la función e imprimiendolo por consola.

const animalFunction = () => {
return {name: 'Bengal Tiger', race: 'Tiger'}
};

1.4 En base al siguiente javascript, usa destructuring para crear las
variables name y itv con sus respectivos valores. Posteriormente crea
3 variables usando igualmente el destructuring para cada uno de los años
y comprueba que todo esta bien imprimiendolo.

const car = {name: 'Mazda 6', itv: [2015, 2011, 2020] }
*/

// 1-1

const game = {
  title: 'The Last of Us 2', 
  gender: ['action', 'zombie', 'survival'], 
  year: 2020
};

// Extrayendo las variables del objeto
const { title, gender, year } = game;

// Impresión en consola
console.log(title);  // 'The Last of Us 2'
console.log(gender); // ['action', 'zombie', 'survival']
console.log(year);   // 2020

// 1-2

const fruits = ['Banana', 'Strawberry', 'Orange'];

// Extrayendo los elementos en base a su posición
const [fruit1, fruit2, fruit3] = fruits;

// Impresión en consola
console.log(fruit1); // 'Banana'
console.log(fruit2); // 'Strawberry'
console.log(fruit3); // 'Orange'

// 1-3

const animalFunction = () => {
  return { name: 'Bengal Tiger', race: 'Tiger' };
};

// Destructuring directo de la ejecución de la función
const { name, race } = animalFunction();

// Impresión en consola
console.log(name); // 'Bengal Tiger'
console.log(race); // 'Tiger'

// 1-4

const car = { name: 'Mazda 6', itv: [2015, 2011, 2020] };

// 1. Extraemos las propiedades del objeto car
const { name, itv } = car;

// 2. Extraemos los años del array itv
const [year1, year2, year3] = itv;

// Comprobación en consola
console.log(name);  // 'Mazda 6'
console.log(itv);   // [2015, 2011, 2020]
console.log(year1); // 2015
console.log(year2); // 2011
console.log(year3); // 2020