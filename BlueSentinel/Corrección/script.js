//Manipulación de Arrays

let ciudades = ["Nueva York", "Los Ángeles", "Chicago", "Miami"];

//Eliminar la ciudad de "Los Angeles"
const resultado1 = ciudades.splice(1, 1);
console.log(ciudades);

// Eliminar la primer ciudad del array resultante
ciudades.shift("Nueva York");
console.log(ciudades);

// Agregar 2 ciudades al inicio del array
ciudades.unshift("San Francisco", "Dallas");
console.log(ciudades);
