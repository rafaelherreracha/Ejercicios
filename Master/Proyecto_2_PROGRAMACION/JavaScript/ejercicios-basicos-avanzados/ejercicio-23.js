/*
Usa un bucle para crear 3 arrays de películas filtrados por categorías.
Pelicula pequeña -> menos de 100 minutos, película mediana -> más de 100
minutos y menos de 200 y pelicula grande -> más de 200 minutos.
Imprime cada array por consola.
const movies = [
{ name: "Titan A.E.", durationInMinutes: 130 },
{ name: "Nightmare before Christmas", durationInMinutes: 225 },
{ name: "Inception", durationInMinutes: 165 },
{ name: "The Lord of the Rings", durationInMinutes: 967 },
{ name: "Star Wars: A New Hope", durationInMinutes: 214 },
{ name: "Terminator", durationInMinutes: 140 },
{ name: "Spirited Away", durationInMinutes: 80 },
{ name: "The Matrix", durationInMinutes: 136 },
{ name: "Amélie", durationInMinutes: 110 },
{ name: "Eternal Sunshine of the Spotless Mind", durationInMinutes: 108 },
];
*/
const movies = [
{ name: "Titan A.E.", durationInMinutes: 130 },
{ name: "Nightmare before Christmas", durationInMinutes: 225 },
{ name: "Inception", durationInMinutes: 165 },
{ name: "The Lord of the Rings", durationInMinutes: 967 },
{ name: "Star Wars: A New Hope", durationInMinutes: 214 },
{ name: "Terminator", durationInMinutes: 140 },
{ name: "Spirited Away", durationInMinutes: 80 },
{ name: "The Matrix", durationInMinutes: 136 },
{ name: "Amélie", durationInMinutes: 110 },
{ name: "Eternal Sunshine of the Spotless Mind", durationInMinutes: 108 },
];

const primerArray = []
const segundoArray = []
const tercerArray = []

for(const key of movies){
    if(key.durationInMinutes < 100){
        primerArray.push(key)
    }else if(key.durationInMinutes >= 100 && key.durationInMinutes < 200){
        segundoArray.push(key)
    }else if(key.durationInMinutes >= 200){
        tercerArray.push(key)
    }
}
console.log("#####################################")
console.log(primerArray)
console.log("#####################################")
console.log(segundoArray)
console.log("#####################################")
console.log(tercerArray)