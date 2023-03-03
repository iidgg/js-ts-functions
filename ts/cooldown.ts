type CallbackFunction = (...args: any[]) => void;

function createCooldownFunction(callback: CallbackFunction, cooldownTime: number): CallbackFunction {
  let lastCalledTime = 0;

  return function(...args: any[]) {
    const currentTime = Date.now();

    if (currentTime - lastCalledTime >= cooldownTime) {
      callback(...args);
      lastCalledTime = currentTime;
    } else {
      console.log(`Function called too soon. Cooldown remaining: ${cooldownTime - (currentTime - lastCalledTime)}ms`);
    }
  }
}

// Test

function myFunction() {
  console.log('Function called');
}

const function1 = createCooldownFunction(myFunction, 5000);

function1(); // Function called
function1(); // Function called too soon. Cooldown remaining: 4998ms

// Src ../cooldown.js
