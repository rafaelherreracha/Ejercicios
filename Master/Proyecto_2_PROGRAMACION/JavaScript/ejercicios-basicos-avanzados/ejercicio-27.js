/*
Utiliza un bucle para encontrar la serie de dibujos animados más antigua en el array
y guarda su nombre en una variable.
Imprime el nombre por consola.
const cartoons = [
{ name: 'Bugs Bunny', debut: 1938 },
{ name: 'SpongeBob SquarePants', debut: 1999 },
{ name: 'Tom and Jerry', debut: 1940 },
{ name: 'Mickey Mouse', debut: 1928 },
{ name: 'Scooby-Doo', debut: 1969 },
{ name: 'The Flintstones', debut: 1960 },
{ name: 'Batman: The Animated Series', debut: 1992 },
{ name: 'The Simpsons', debut: 1989 },
{ name: 'Pokémon', debut: 1997 },
{ name: "Dexter's Laboratory", debut: 1996 }
];
*/

const cartoons = [
{ name: 'Bugs Bunny', debut: 1938 },
{ name: 'SpongeBob SquarePants', debut: 1999 },
{ name: 'Tom and Jerry', debut: 1940 },
{ name: 'Mickey Mouse', debut: 1928 },
{ name: 'Scooby-Doo', debut: 1969 },
{ name: 'The Flintstones', debut: 1960 },
{ name: 'Batman: The Animated Series', debut: 1992 },
{ name: 'The Simpsons', debut: 1989 },
{ name: 'Pokémon', debut: 1997 },
{ name: "Dexter's Laboratory", debut: 1996 }
];

let oldestCartoon = cartoons[0];

// 2. Recorremos el array comparando cada uno
for (const cartoon of cartoons) {
  if (cartoon.debut < oldestCartoon.debut) {
    // Si encontramos uno con una fecha menor, lo guardamos como el nuevo más antiguo
    oldestCartoon = cartoon;
  }
}

console.log(`La serie más antigua es: ${oldestCartoon.name} (${oldestCartoon.debut})`);