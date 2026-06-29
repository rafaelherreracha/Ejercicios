/*
4.1 Dado el siguiente array, utiliza .filter() para generar un nuevo array
con los valores que sean mayor que 18
const ages = [22, 14, 24, 55, 65, 21, 12, 13, 90];

4.2 Dado el siguiente array, utiliza .filter() para generar un nuevo array
con los valores que sean par.
const ages = [22, 14, 24, 55, 65, 21, 12, 13, 90];

4.3 Dado el siguiente array, utiliza .filter() para generar un nuevo array
con los streamers que tengan el gameMorePlayed = 'League of Legends'.
const streamers = [
	{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
	{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'},
	{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
	{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];

4.4 Dado el siguiente array, utiliza .filter() para generar un nuevo array
con los streamers que incluyan el caracter 'u' en su propiedad .name. Recomendamos
usar la funcion .includes() para la comprobación.
const streamers = [
	{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
	{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'},
	{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
	{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];

4.5 utiliza .filter() para generar un nuevo array con los streamers que incluyan
el caracter 'Legends' en su propiedad .gameMorePlayed. Recomendamos usar la funcion
.includes() para la comprobación.
Además, pon el valor de la propiedad .gameMorePlayed a MAYUSCULAS cuando
.age sea mayor que 35.
*/

// 4-1
const ages = [22, 14, 24, 55, 65, 21, 12, 13, 90];
const edades = ages.filter(key =>{
    if(key > 18){
        return key
    }
})

console.log(edades)

// 4-2
const ages2 = [22, 14, 24, 55, 65, 21, 12, 13, 90];
const edades2 = ages2.filter(key => {
    if(key % 2 == 0){
        return key
    }
})

console.log(edades2)


// 4-3
const streamers = [
	{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
	{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'},
	{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
	{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];

const streamerLol = streamers.filter(key => {
    if(key.gameMorePlayed === "League of Legends"){
        return key
    }
})

console.log(streamerLol)
// 4-4
const streamers2 = [
	{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
	{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'},
	{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
	{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];

const streamer4 = streamers2.filter(key =>{
    if(key.name.includes('u')){
        return key
    }
})

console.log(streamer4)

// 4-5
const streamers3 = [
	{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
	{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'},
	{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
	{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];

const streamer5 = streamers3.filter(key => {
    if (key.gameMorePlayed.includes('Legends')) {
        
        if (key.age > 35) {
            
            key.gameMorePlayed = key.gameMorePlayed.toUpperCase(); 
        }
        
        // Al retornar true, conservamos al streamer en el nuevo array
        return true; 
    }
});
console.log(streamer5)