// 5️⃣ ***** EJERCICIO 5 RECURSIÓN***** - liquidacion() 5️⃣
//
// Implementar la función 💲 liquidacion() 💲 la cuál recibirá por parámetros un array de objetos anidados que
// Representarán algunas prendas de ropa en una vidriera, cada una podrá contener, o no, una etiqueta que indique su estado.
// Tendrás que recursivamente iterar el array, y retornar uno nuevo, sólo con los objetos que tengan la etiqueta "LIQUIDACION" asociada.
//
// EJEMPLOS:
//  Dado el siguiente arreglo: [{ camiseta: { LIQUIDACION: true } }, { gorro: { DESCUENTO: true } }, { abrigo: {} }, { pantalones: { LIQUIDACION: true } }]
//  liquidacion() Devuelve ➡
//  [{ pantalones: { LIQUIDACION: true } }, { camiseta: { LIQUIDACION: true } }]
//
// REQUISITOS:
//  🟢 Retornar un nuevo arreglo que contenga las prendas de ropa en LIQUIDACION
//  🟢 Implementar recursividad🔄!
//  🟢 Si el arreglo está vacío, retornar un mensaje que diga "No hay prendas en liquidación"
//
// CUIDADO: ⚠️ ⚠️ ⚠️ ⚠️  las prendas tiene que ir agregandose de derecha a izquierda como se muestra en el ejemplo de mas arriba. ⚠️ ⚠️ ⚠️ ⚠️
//
// TIP: tambien podes usar un rest parameter.

function liquidacion(array, respuesta = []) {
  // Tu código aquí:
  if (array.length !== 0) {
    const actual = array.pop();
    const key = Object.keys(actual);
    if (actual[key].LIQUIDACION) {
      respuesta.push(actual);
    }
    return liquidacion(array, respuesta);
  } else {
    return respuesta;
  }
}

// ⚠️ NO MODIFICAR NADA POR DEBAJO DE ESTA LÍNEA ⚠️
module.exports = {
  liquidacion,
};
