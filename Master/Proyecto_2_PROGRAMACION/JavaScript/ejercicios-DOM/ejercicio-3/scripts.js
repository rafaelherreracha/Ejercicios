/*  
1.1 Basandote en el array siguiente, crea una lista ul > li
dinámicamente en el html que imprima cada uno de los paises.
const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];

1.2 Elimina el elemento que tenga la clase .fn-remove-me.

1.3 Utiliza el array para crear dinamicamente una lista ul > li de elementos
en el div de html con el atributo data-function="printHere".
const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];

1.4 Crea dinamicamente en el html una serie de divs que contenga un elemento
h4 para el titulo y otro elemento img para la imagen.
const countries = [
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}
];

1.5 Basandote en el ejercicio anterior. Crea un botón que elimine el último
elemento de la serie de divs.

1.6 Basandote en el ejercicio anterior. Crea un botón para cada uno de los
divs que elimine ese mismo elemento del html.
*/

//1.1 Basandote en el array siguiente, crea una lista ul > li dinámicamente en el html que imprima cada uno de los paises.
const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];
const nuevoUL = document.createElement("ul")

for(const key  of countries){
    const nuevoLI = document.createElement("li")
    nuevoLI.textContent = key
    nuevoUL.appendChild(nuevoLI)
}

document.body.appendChild(nuevoUL)


//1.2 Elimina el elemento que tenga la clase .fn-remove-me.

const eliminarElement = document.querySelector(".fn-remove-me")
eliminarElement.remove()


//1.3 Utiliza el array para crear dinamicamente una lista ul > li de elementos en el div de html con el atributo data-function="printHere".
const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];
const nuevoUL2 = document.createElement("ul")


const imprimirDiv = document.querySelector(`[data-function="printHere"]`)
console.log(imprimirDiv)

for(const key of cars){
	const nuevoLI2 = document.createElement("li")
	nuevoLI2.textContent = key
	nuevoUL2.appendChild(nuevoLI2)
}

console.log(nuevoUL2)
console.log(imprimirDiv)
imprimirDiv.appendChild(nuevoUL2)


//1.4 Crea dinamicamente en el html una serie de divs que contenga un elemento h4 para el titulo y otro elemento img para la imagen.
const paises = [
	{title: 'Random title1', imgUrl: 'https://picsum.photos/300/200?random=1'},
	{title: 'Random title2', imgUrl: 'https://picsum.photos/300/200?random=2'},
	{title: 'Random title3', imgUrl: 'https://picsum.photos/300/200?random=3'},
	{title: 'Random title4', imgUrl: 'https://picsum.photos/300/200?random=4'},
	{title: 'Random title5', imgUrl: 'https://picsum.photos/300/200?random=5'}
];



for(const key of paises){
	
	const nuevoDiv4 = document.createElement("div")
	nuevoDiv4.className = "div-pais";

	const nuevoTituloH4 = document.createElement("h4")
	nuevoTituloH4.textContent = key.title

	const nuevoImagen = document.createElement("img")
	nuevoImagen.src = key.imgUrl

	nuevoDiv4.appendChild(nuevoTituloH4)
	nuevoDiv4.appendChild(nuevoImagen)

	document.body.appendChild(nuevoDiv4)

	const nuevoBotonParaDiv = document.createElement("button")

	
}




//1-5 Basandote en el ejercicio anterior. Crea un botón que elimine el último elemento de la serie de divs.
const nuevoBoton = document.createElement("button")
nuevoBoton.textContent = "Eliminar"

document.body.appendChild(nuevoBoton)


nuevoBoton.addEventListener("click", () =>{
	const todosLosDiv = document.querySelectorAll(".div-pais")
	if (todosLosDiv.length > 0) {
        todosLosDiv[todosLosDiv.length - 1].remove();
    }

})





//1.6 Basandote en el ejercicio anterior. Crea un botón para cada uno de los divs que elimine ese mismo elemento del html.



//


//


