const albums = [
    "De Mysteriis Dom Sathanas",
    "Reign of Blood",
    "Ride the Lightning",
    "Painkiller"
];

// 1. Seleccionamos el contenedor del HTML donde queremos meter la lista
const container = document.querySelector("#albums-container");

// 2. Creamos dinámicamente el elemento UL
const listaUL = document.createElement("ul");
listaUL.className = "albums-list"; // Le asignamos una clase para darle estilos en CSS

// 3. Recorremos el array con un bucle for...of
for (const album of albums) {
    // Creamos el elemento LI para cada álbum
    const elementoLI = document.createElement("li");
    elementoLI.className = "album-item";

    // Creamos un elemento span para poner un icono decorativo de un disco/nota
    const icono = document.createElement("span");
    icono.textContent = "💿";
    icono.className = "album-icon";

    // Creamos un texto para el nombre del álbum
    const nombreAlbum = document.createTextNode(album);

    // Metemos el icono y el texto dentro del LI
    elementoLI.appendChild(icono);
    elementoLI.appendChild(nombreAlbum);

    // Metemos el LI dentro del UL
    listaUL.appendChild(elementoLI);
}

// 4. Finalmente, metemos la lista completa dentro del contenedor de la página
container.appendChild(listaUL);