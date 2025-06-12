// Definimos una función llamada 'expect' que recibe el valor actual que queremos probar
var expect = function(actualValue) {

    // Retornamos un objeto que contiene dos funciones: toBe y notToBe
    return {
  
      // Función para comprobar si el valor actual es IGUAL al valor esperado
      toBe: function(expectedValue) {
        // Compara los dos valores usando === (igualdad estricta)
        if (actualValue === expectedValue) {
          return true; // Si son iguales, devuelve true
        } else {
          // Si NO son iguales, lanza un error con el mensaje "Not Equal"
          throw new Error("Not Equal");
        }
      },
  
      // Función para comprobar si el valor actual es DIFERENTE al valor esperado
      notToBe: function(expectedValue) {
        // Compara usando !== (desigualdad estricta)
        if (actualValue !== expectedValue) {
          return true; // Si son diferentes, devuelve true
        } else {
          // Si son iguales, lanza un error con el mensaje "Equal"
          throw new Error("Equal");
        }
      }
    };
  };