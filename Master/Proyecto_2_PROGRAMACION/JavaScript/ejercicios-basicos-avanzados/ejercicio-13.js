/* 
Buscador de nombres: Crea una función que reciba por parámetro un array y el
valor que desea comprobar que existe dentro de dicho array. Esta función
comprueba si existe el elemento, y en caso de que exista nos devuelve un true y la
posición de dicho elemento y por la contra un false.
Puedes usar este array para probar tu función:

function nameFinder(nameList, name) {
    let resultado = false
    
    if(nameList.includes(name)){
        resultado = true
        return resultado
    }
    

    return resultado

}


*/

const names = [
'Peter',
'Steve',
'Tony',
'Natasha',
'Clint',
'Logan',
'Xabier',
'Bruce',
'Peggy',
'Jessica',
'Marc'
];

function nameFinder(nameList, name) {
  // indexOf nos da la posición, o -1 si no existe
  const position = nameList.indexOf(name);

  if (position !== -1) {
    return { existe: true, posicion: position };
  } else {
    return { existe: false };
  }
}

console.log(nameFinder(names, "jose"))