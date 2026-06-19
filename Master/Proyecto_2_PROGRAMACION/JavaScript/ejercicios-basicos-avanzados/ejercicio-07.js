/*
Completa esta función para que, al recibir dos números por argumento, te devuelva por consola el más alto de los dos.

function greaterNumber(numberOne , numberTwo) {
  // Completar código
}

*/

function greaterNumber(numberOne , numberTwo) {
  if(numberOne > numberTwo){
    console.log(`El numero mas grande es ${numberOne}`)
  }else if(numberTwo > numberOne) {
    console.log(`El numero mas grande es ${numberTwo}`)
  } else{
    console.log("Ambos son iguales")
  }
}

greaterNumber(7,7)