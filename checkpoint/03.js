// 3️⃣ ***** EJERCICIO 3 CLOSURES***** - chequearDisponibilidad() 3️⃣
// Implementar la función 🔍chequearDisponibilidad()🔍, la cuál recibirá inicialmente por parámetros
// un arreglo con prendas de ropa.
// Después podrá ser nuevamente invocada, recibiendo por parámetros un arreglo de las prendas disponibles para vender
// Debes retornar el mensaje correspondiente dependiendo de cuantas prendas hayan disponibles, o
// si no hay ninguna retornar "No se encontraron las prendas solicitadas"
//
// EJEMPLOS:
// Se solicitan las siguientes prendas: ["Camiseta Verde", "Pantalón Rojo", "Gorra Azul"]
// Y a continuación está disponible el siguiente stock: ["Pantalón Rojo", "Zapatos Grises", "Gorra Azul"]
// chequearDisponibilidad(prendas)(stock) Devuelve ➡
//  "2 de las 3 prendas solicitadas se encuentran en stock"
//
// O si probamos con otras prendas para solicitar: ["Pantalón Rojo", "Sweater Celeste"]
// chequearDisponibilidad(prendas2)(stock) Devuelve ➡
// "1 de las 2 prendas solicitadas se encuentran en stock"
//
// REQUISITOS:
//  🟢 Retornar un mensaje que indique la cantidad de prendas disponibles acorde al stock
//  🟢 Retornar "No se encontraron las prendas solicitadas" si no se encontró disponibilidad
//  🟢 Retornar "Todas las prendas fueron encontradas" si las prendas solicitadas se encontraron
//
// ACLARACIÓN: Chequear el output de los test, para poder colocar los mensajes como corresponden!

function chequearDisponibilidad(ropas) {
  // Tu código aquí:
  //cambiar nombre -->  chequear()
  let cont = 0;
  const chequear = (ropas, stock) => {
    const buscadas = stock.length;
    let encontrada = false;

    ropas.forEach((obj) => {
      stock.forEach((item) => {
        if (obj === item) {
          cont++;
          encontrada = true;
        }
      });
    });

    if (!encontrada) return "No se encontraron las prendas solicitadas";

    if (cont === buscadas) {
      return "Todas las prendas fueron encontradas";
    } else {
      return (
        cont +
        " de las " +
        buscadas +
        " prendas solicitadas se encuentran en el stock"
      );
    }
  };

  return (stock) => {
    return stock.length <= 0
      ? "No se encontraron las prendas solicitadas"
      : chequear(ropas, stock);
  };
}

// ⚠️ NO MODIFICAR NADA POR DEBAJO DE ESTA LÍNEA ⚠️
module.exports = {
  chequearDisponibilidad,
};
