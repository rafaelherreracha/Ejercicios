/*

Usa un for para remplazar todas las comidas que no sean veganas con las frutas del
array de frutas.
Recuerda no usar frutas duplicadas.
Finalmente, imprime el array resultante.
const fruits = ["Strawberry", "Banana", "Orange", "Apple"];

const foodSchedule = [
{ name: "Heura", isVegan: true },
{ name: "Salmon", isVegan: false },
{ name: "Tofu", isVegan: true },
{ name: "Burger", isVegan: false },

{ name: "Rice", isVegan: true },
{ name: "Pasta", isVegan: true },
];
*/

const foodSchedule = [
{ name: "Heura", isVegan: true },
{ name: "Salmon", isVegan: false },
{ name: "Tofu", isVegan: true },
{ name: "Burger", isVegan: false },
{ name: "Rice", isVegan: true },
{ name: "Pasta", isVegan: true },
];

const fruits = ["Strawberry", "Banana", "Orange", "Apple"];
let fruitIndex = 0;

for(const key of foodSchedule){
    if(!key.isVegan ){
        // 1. Sustituimos el nombre por la fruta actual
        key.name = fruits[fruitIndex];
        // 2. Marcamos como vegano, ya que ahora es una fruta
        key.isVegan = true;
        
        // 3. Aumentamos el índice para que la próxima vez sea otra fruta
        fruitIndex++;
    }
    
}

console.log(foodSchedule)