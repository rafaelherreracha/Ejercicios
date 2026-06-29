/*
Ahora realizaremos una petición a la PokeAPI, queremos mostrar al entrar en la página la imagen de un Pokemon, la magia estará en que cada vez que recargues la página, será un nuevo Pokemon dentro de la primera generación de Pokemon, es decir, del 1 al 151.

Los Pokemon no solo tienen una imagen, si no que tendrán muchas, hay que hallar la manera de encontrar la que más os guste.



Para ello el HTML será muy sencillo, y la URL esta vez os la aportaremos directamente, aunque os aconsejamos echarle un ojo a la documentación ya que es muy completa.

Documentación: https://pokeapi.co/

URL: https://pokeapi.co/api/v2/pokemon/1

Tened en cuenta que esta URL se refiere al pokemon número 1, que es bulbasaur, debemos hallar la manera de con una url similar ir consiguiendo pokemons aleatorios dentro de unos límites.


*/

const idAleatorio = Math.floor(Math.random() * 151) + 1;

// 2. Creamos la URL usando Template Literals (las comillas invertidas `) para meter el ID
const URL_API = `https://pokeapi.co/api/v2/pokemon/${idAleatorio}`;

// 3. Seleccionamos la etiqueta de la imagen del HTML
const imgPokemon = document.querySelector(".random-image");

async function conseguirPokemonAleatorio() {
    try {
        const respuesta = await fetch(URL_API);
        const pokemonData = await respuesta.json();
        
        // 4. ¡Asignamos la imagen shiny al src del HTML!
        imgPokemon.src = pokemonData.sprites.front_shiny;
        
        // (Opcional) Podemos poner el nombre del Pokémon en la consola para saber cuál es
        console.log(`¡Te ha tocado un ${pokemonData.name} Shiny!`);
        
    } catch (error) {
        console.error("Error al traer el Pokémon:", error);
    }
}

conseguirPokemonAleatorio();
