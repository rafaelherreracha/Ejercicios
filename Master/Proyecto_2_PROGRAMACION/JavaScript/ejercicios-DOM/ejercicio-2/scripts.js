/* 
2.1 Inserta dinamicamente en un html un div vacio con javascript.

2.2 Inserta dinamicamente en un html un div que contenga una p con javascript.

2.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un
	loop con javascript.

2.4 Inserta dinamicamente con javascript en un html una p con el
	texto 'Soy dinámico!'.

2.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.

2.6 Basandote en el siguiente array crea una lista ul > li con
los textos del array.
const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];

2.7 Elimina todos los nodos que tengan la clase .fn-remove-me

2.8 Inserta una p con el texto 'Voy en medio!' entre los dos div.
	Recuerda que no solo puedes insertar elementos con .appendChild.

2.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase
	.fn-insert-here


*/

//2.1 Inserta dinamicamente en un html un div vacio con javascript.

const nuevoDiv = document.createElement("div")

nuevoDiv.textContent = "¡Soy un nuevo div!"; 
nuevoDiv.className = "mi-nueva-clase";       
nuevoDiv.style.backgroundColor = "yellow"; 

document.body.appendChild(nuevoDiv)

//2.2 Inserta dinamicamente en un html un div que contenga una p con javascript.

const nuevoDiv2 = document.createElement("div")
const nuevop2 = document.createElement("p")

nuevop2.textContent = "Esto es un <p></p> dentro de un div"

nuevoDiv2.appendChild(nuevop2)

document.body.appendChild(nuevoDiv2)

// 2.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un loop con javascript.
const nuevoDiv3 = document.createElement("div")

for(let i = 0 ; i < 6 ; i++){
    
    const nuevoP3 = document.createElement("p")
    nuevoP3.textContent = "Ejercicio 2-3"
    nuevoDiv3.appendChild(nuevoP3)
    document.body.appendChild(nuevoDiv3)
    

}

// 2-4 Inserta dinamicamente con javascript en un html una p con el texto 'Soy dinámico!'.

const nuevoDiv4 = document.createElement("div")
const nuevoP4 = document.createElement("p")
nuevoP4.textContent = "Soy Dinámico!!!"

nuevoDiv4.appendChild(nuevoP4)

document.body.appendChild(nuevoDiv4)

//2.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.

const nuevoP5 = document.createElement("p")
nuevoP5.textContent = "Wubba Lubba dub dub"

const busquedaH2 = document.querySelector(".fn-insert-here")

busquedaH2.appendChild(nuevoP5)

//2-6 Basandote en el siguiente array crea una lista ul > li con los textos del array. const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];
const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];
const nuevoDiv6 = document.createElement("div")
nuevoDiv6.style.backgroundColor = "beige"

const nuevoUl = document.createElement("ul")

for(const key of apps){
    const nuevoLi = document.createElement("li")
    const nuevoP6 = document.createElement("p")
    nuevoP6.textContent = key

    nuevoLi.appendChild(nuevoP6)
    nuevoUl.appendChild(nuevoLi)

    nuevoDiv6.appendChild(nuevoUl)
    

    
}

document.body.appendChild(nuevoDiv6)

//2-7 Elimina todos los nodos que tengan la clase .fn-remove-me

const eliminarFn = document.querySelectorAll(".fn-remove-me")

    eliminarFn.forEach( key => {
        key.remove();
    })


// 2-8 Inserta una p con el texto 'Voy en medio!' entre los dos div. Recuerda que no solo puedes insertar elementos con .appendChild.

const nuevoP8 = document.createElement("p")

nuevoP8.textContent = "Voy en medio!!"

// 2. Seleccionamos todos los divs
const todosLosDivs = document.querySelectorAll("div");

// 3. Insertamos el párrafo usando el segundo div como referencia (índice 1)
// insertBefore necesita el elemento padre y el elemento de referencia
document.body.insertBefore(nuevoP8, todosLosDivs[1]);

//2-9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase .fn-insert-here

// 1. Seleccionamos todos los divs con la clase específica
const divsDestino = document.querySelectorAll("div.fn-insert-here");

// 2. Iteramos sobre cada uno de ellos
divsDestino.forEach(div => {
    // Creamos el párrafo para cada contenedor
    const nuevoP = document.createElement("p");
    nuevoP.textContent = "Voy dentro!";
    
    // Lo añadimos al div actual
    div.appendChild(nuevoP);
});

