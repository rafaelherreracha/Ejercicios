/* 
1.1 Usa querySelector para mostrar por consola el botón con la clase .showme

1.2 Usa querySelector para mostrar por consola el h1 con el id #pillado

1.3 Usa querySelector para mostrar por consola todos los p

1.4 Usa querySelector para mostrar por consola todos los elementos con
	la clase.pokemon

1.5 1.5 Usa querySelector para mostrar por consola todos los elementos con el atributo data-function="testMe".


1.6 Usa querySelector para mostrar por consola el 3 personaje con el atributo
data-function="testMe".

*/


//1.1 Usa querySelector para mostrar por consola el botón con la clase .showme
let boton = document.querySelector(`.showme`)
console.log(boton)

//1.2 Usa querySelector para mostrar por consola el h1 con el id #pillado
let textPillado = document.querySelector(`#pillado`)
console.log(textPillado)

//1.3 Usa querySelector para mostrar por consola todos los p
let todosP = document.querySelectorAll(`p`)
console.log(todosP)


//1.4 Usa querySelector para mostrar por consola todos los elementos con la clase.pokemon

let pokemon = document.querySelectorAll(`.pokemon`)
console.log(pokemon)

//1.5 Usa querySelector para mostrar por consola todos los elementos con el atributo data-function="testMe".  
const elementosTest = document.querySelectorAll('[data-function="testMe"]');
console.log(elementosTest)

for(const key of elementosTest){
    console.log(key)

}

//1.6 Usa querySelector para mostrar por consola el 3 personaje con el atributo data-function="testMe".

console.log(elementosTest[2])

