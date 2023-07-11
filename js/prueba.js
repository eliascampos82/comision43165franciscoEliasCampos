//javascript
// Definir el saldo inicial del cajero automático
let saldo = 1000;

// Función para retirar dinero del cajero automático
function retirarDinero(cantidad) {
  if (cantidad > saldo) {
    alert("No hay suficiente saldo en el cajero automático");
  } else {
    saldo -= cantidad;
    alert("Retiraste $ " + cantidad +" pesos. Saldo restante: $ " + saldo + " pesos");
  }
}

// Función para depositar dinero en el cajero automático
function depositarDinero(cantidad) {
  saldo += cantidad;
  alert("Depositaste $ " + cantidad + " pesos. Saldo actual: $ " + saldo + " pesos" );
}

// Función para consultar el saldo del cajero automático
function consultarSaldo() {
  alert("El saldo actual es: $ "+ saldo +" pesos");
}

// Ejemplo de uso
consultarSaldo(); // El saldo actual es: 1000 pesos
retirarDinero(500); // Retiraste 500 pesos. Saldo restante: 500 pesos
depositarDinero(200); // Depositaste 200 pesos. Saldo actual: 700 pesos
consultarSaldo(); // El saldo actual es: 700 pesos