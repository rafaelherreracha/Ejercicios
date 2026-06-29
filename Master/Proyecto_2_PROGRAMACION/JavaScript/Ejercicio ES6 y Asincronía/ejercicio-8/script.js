/*

*/
const URL_API = "https://thronesapi.com/api/v2/Characters";

// 1. Seleccionamos los elementos del HTML que vamos a necesitar
const selectPersonajes = document.querySelector("#character-list");
const imgPersonaje = document.querySelector(".character-image");

async function conseguirPersonajes() {
    try {
        const respuesta = await fetch(URL_API);
        const personajes = await respuesta.json();
        
        // Llamamos a la función encargada de rellenar el select pasándole los datos
        rellenarSelect(personajes);
        
    } catch (error) {
        console.error("Hubo un error:", error);
    }
}
// 2. Nueva función para meter los personajes en el select
function rellenarSelect(listaDePersonajes) {
    listaDePersonajes.forEach(personaje => {
        // Creamos el elemento <option>
        const opcion = document.createElement("option");
        
        // Le asignamos el texto que verá el usuario (el nombre)
        opcion.textContent = personaje.firstName; // O personaje.fullName
        
        // Guardamos la URL de la imagen en el 'value' del option para usarla luego
        opcion.value = personaje.imageUrl; 
        
        // Metemos el <option> dentro de nuestro <select>
        selectPersonajes.appendChild(opcion);
    });
}

// 3. Escuchamos el cambio en el select
selectPersonajes.addEventListener('change', (event) => {
    // PISTA A: Aquí consigues la URL de la imagen del personaje seleccionado
    const urlImagen = event.target.value; 
    const imagen = document.querySelector("img")
    console.log(urlImagen)
    // PISTA B: Ahora debes asignarle esa 'urlImagen' al atributo '.src' de tu etiqueta 'imgPersonaje'
    // Tu código aquí abajo:
    imagen.src = urlImagen
    
});
// Ejecutamos la función al cargar el archivo
conseguirPersonajes();