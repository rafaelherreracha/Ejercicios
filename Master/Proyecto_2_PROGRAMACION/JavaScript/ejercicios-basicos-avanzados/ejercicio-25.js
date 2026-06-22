/*
Dada una lista de películas, cuenta cuántas son de antes del año 2000 y cuántas
son posteriores, utilizando un bucle.
Imprime ambos conteos por consola.
const movies = [
{ title: 'The Matrix', releaseYear: 1999 },
{ title: 'Star Wars: Episode IV – A New Hope', releaseYear: 1977 },
{ title: 'Inception', releaseYear: 2010 },
{ title: 'Jurassic Park', releaseYear: 1993 },

{ title: 'The Shawshank Redemption', releaseYear: 1994 },
{ title: 'Pulp Fiction', releaseYear: 1994 },
{ title: 'Avatar', releaseYear: 2009 },
{ title: 'The Dark Knight', releaseYear: 2008 },
{ title: 'Fight Club', releaseYear: 1999 },
{ title: 'Forrest Gump', releaseYear: 1994 }
];
*/
const movies = [
{ title: 'The Matrix', releaseYear: 1999 },
{ title: 'Star Wars: Episode IV – A New Hope', releaseYear: 1977 },
{ title: 'Inception', releaseYear: 2010 },
{ title: 'Jurassic Park', releaseYear: 1993 },

{ title: 'The Shawshank Redemption', releaseYear: 1994 },
{ title: 'Pulp Fiction', releaseYear: 1994 },
{ title: 'Avatar', releaseYear: 2009 },
{ title: 'The Dark Knight', releaseYear: 2008 },
{ title: 'Fight Club', releaseYear: 1999 },
{ title: 'Forrest Gump', releaseYear: 1994 }
];
let contadorUno = 0
let contadorDos = 0

for(const key of movies){
    if(key.releaseYear < 2000 ){
        contadorUno++
    }else if(key.releaseYear > 2000){
        contadorDos++
    }
}

console.log(`Hay un total de ${contadorUno} que se lanzaron antes del 2000`)
console.log(`Hay un total de ${contadorDos} que se lanzaron despues del 2000`)


