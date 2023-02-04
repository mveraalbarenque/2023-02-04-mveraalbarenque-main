// 6️⃣ ***** EJERCICIO 6 ALGORITMOS***** - ordenarRopa() 6️⃣
// Se desordenó todo el inventario de ropa! hay prendas por todas partes.
// Por el momento tendremos que solucionar el problema creando la función 🧦 ordenarRopa() 🧦, la cual recibirá por parámetros
// un array de objetos anidados, que representarán cada prenda. Cada objeto tendrá dentro una propiedad nombre y un precio entero.
// Tendrás que implementar un algoritmo de ordenamiento para poder organizar toda la ropa de MAYOR a MENOR según el precio.
//
//
// EJEMPLOS:
// Dado el siguiente arreglo:
// [{ nombre: 'Camiseta', precio: 12}, { nombre: 'Pantalon', precio: 2 }, { nombre: 'Saco', precio: 23 }, { nombre: 'Gorra', precio: 4 }]
//
// ordenarRopa(array) Devuelve ➡
// [{ nombre: 'Saco', precio: 23 }, { nombre: 'Camiseta', precio: 12 }, { nombre: 'Gorra', precio: 4 }, { nombre: 'Pantalon', precio: 2 }]
//
// REQUISITOS:
//  🟢 Implementar algún algoritmo de ordenamiento para ordenar el arreglo de MAYOR a MENOR
//  🟢 NO utilizar el método sort de array!

function ordenarRopa(ropa) {
  // Tu código aquí:
  let cambio = true;
  while (cambio) {
    cambio = false;
    for (let i = 0; i < ropa.length - 1; i++) {
      const actual = ropa[i];
      const mayor = ropa[i + 1];
      if (actual.precio < mayor.precio) {
        [ropa[i], ropa[i + 1]] = [mayor, actual];
        cambio = true;
      }
    }
  }
  return ropa;
}

// ⚠️ NO MODIFICAR NADA POR DEBAJO DE ESTA LÍNEA ⚠️
module.exports = {
  ordenarRopa,
};
