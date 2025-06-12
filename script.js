// Función contador como en LeetCode
function createCounter(init) {
    let current = init;
  
    return {
      increment: function () {
        current++;
        return current;
      },
      decrement: function () {
        current--;
        return current;
      },
      reset: function () {
        current = init;
        return current;
      }
    };
  }
  
  // Creamos un contador que comienza en 0
  const counter = createCounter(0);
  
  // Mostrar valor en la página
  const valueDisplay = document.getElementById("value");
  
  function updateDisplay(newValue) {
    valueDisplay.textContent = newValue;
  }
  
  // Funciones para botones
  function increment() {
    const result = counter.increment();
    updateDisplay(result);
  }
  
  function decrement() {
    const result = counter.decrement();
    updateDisplay(result);
  }
  
  function reset() {
    const result = counter.reset();
    updateDisplay(result);
  }