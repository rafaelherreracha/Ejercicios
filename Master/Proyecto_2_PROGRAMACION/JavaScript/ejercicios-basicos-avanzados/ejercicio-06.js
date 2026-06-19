/*1.1 Crea un bucle for que vaya desde 0 a 9 y muestra el valor de i por consola.

1.2 Crea un bucle for que vaya desde 0 a 9 y muestra el valor de i por consola solo
cuando el resto del numero dividido entre 2 sea 0.

1.3 Crea un bucle para conseguir dormir contando ovejas.
Este bucle tiene que dar 10 vueltas, es decir, 10 console.log.
Muestra por consola un mensaje diciendo 'Intentando dormir 🐑' en cada vuelta del bucle
y cambia el mensaje en la décima vuelta a '¡Dormido!'.
*/

let texto1 = "Ejercicio 1"
// 1-1
console.log(texto1)
for(let i = 0 ; i <= 9 ; i++ ) {
    console.log(i)
}

let texto2 = "Ejercicio 2"
// 1-2
console.log(texto2)
let resto = 0
for(let i = 0 ; i <= 9 ; i++ ) {
    resto = i % 2
    if(resto == 0){
        console.log(`Este numero es divisor de dos ${i}`)
    } else{
        
    }
    
}

// 1-3
let texto3 = "Ejercicio 3"
console.log("Ejercicio 3")

let contador = 0;
do{
console.log(`Intentando dormir 🐑 ${contador}`);
contador++;

}while(contador <= 10)

console.log("¡Dormido! 💤");