/* 
Valores únicos: Crea una función que reciba por parámetro un array y compruebe si
existen elementos duplicados, en caso que existan los elimina para retornar un array
sin los elementos duplicados.
Pista: puedes generar un nuevo array y devolverlo.
Puedes usar este array para probar tu función:


function removeDuplicates(list) {
    const copiaDuplicate = list
    const noDuplicados = []
    console.log(list)
    

    //Comparamos
    for(let i = 0; i< list.length ; i++){
        let contador = 0
        let palabra = list[i]
        
        
        for(let x = 0 ; x < copiaDuplicate.length ; x++){
            if(palabra === copiaDuplicate[x]){
                contador += 1
                
            }
            
        }

        if(contador == 2){
            console.log(`Esta palabra esta duplicada ${palabra}`)
        }else{
            noDuplicados.push(list[i])
        }

        console.log(`La palabra es ${palabra} y su contador es ${contador}`)
    }

    console.log(copiaDuplicate)
    console.log(noDuplicados)

}

*/ 

const duplicates = [
'sushi',
'pizza',
'burger',
'potatoe',
'pasta',
'ice-cream',
'pizza',
'chicken',
'onion rings',
'pasta',
'soda'
];


function removeDuplicates(list) {
    const noDuplicados = [];

    for (let i = 0; i < list.length; i++) {
        // Si el elemento NO está en el nuevo array, lo añadimos
        if (!noDuplicados.includes(list[i])) {
            noDuplicados.push(list[i]);
        }
    }

    return noDuplicados;
}

removeDuplicates(duplicates)