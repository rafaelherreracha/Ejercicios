/* 

1.1 Añade un botón a tu html con el id btnToClick y en tu javascript añade el
evento click que ejecute un console log con la información del evento del click

1.2 Añade un evento 'focus' que ejecute un console.log con el valor del input.

1.3 Añade un evento 'input' que ejecute un console.log con el valor del input.

*/

// 1-1 Añade un botón a tu html con el id btnToClick y en tu javascript añade el evento click que ejecute un console log con la información del evento del click

const createButton = document.createElement("button")
createButton.textContent = "Prueba1"

createButton.addEventListener("click",(event) =>{
    console.log(event)
})


document.body.appendChild(createButton)

// 1-2 Añade un evento 'focus' que ejecute un console.log con el valor del input.

const inputFocus = document.querySelector('.focus');

inputFocus.addEventListener('focus', (event) => {
    // Imprime el valor que tenga el input en el momento de hacer foco
    console.log(event.target.value);
});

// 1-3 Añade un evento 'input' que ejecute un console.log con el valor del input.

const inputValor = document.querySelector('.value');

inputValor.addEventListener('input', (event) => {
    // Imprime el valor en tiempo real cada vez que escribes o borras una letra
    console.log(event.target.value);
});