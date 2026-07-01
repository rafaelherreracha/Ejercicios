
const URL_API = "https://thronesapi.com/api/v2/Characters";

// 1. Seleccionamos los elementos del HTML que vamos a necesitar
const selectPersonajes = document.querySelector("#character-list");
const imgPersonaje = document.querySelector(".character-image");

/*
Usamos async para decirle que abrimos un proceso en segundo plano
Usamos fetch para que recoja la informacion de la URL
Usamos await para esperar a que llegue esa respuesta 

*/
async function conseguirPersonajes() {
    try {

        const respuesta = await fetch(URL_API);
        const personajes = await respuesta.json();
        
        
        rellenarSelect(personajes);
        
    } catch (error) {
        console.error("Hubo un error:", error);
    }
}


function rellenarSelect(listaDePersonajes) {

    listaDePersonajes.forEach(personaje => {
        
        const opcion = document.createElement("option");
        
        opcion.textContent = personaje.firstName; 
        
        opcion.value = personaje.imageUrl; 
        
        selectPersonajes.appendChild(opcion);
    });
}


selectPersonajes.addEventListener('change', (event) => {

    const urlImagen = event.target.value; 
    const imagen = document.querySelector("img")
    console.log(urlImagen)

    imagen.src = urlImagen
    
});

conseguirPersonajes();