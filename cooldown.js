function createCooldownFunction(callback, cooldownTime) {
  let lastCalledTime = 0;

  return function(...args) {
    const currentTime = Date.now();

    if (currentTime - lastCalledTime >= cooldownTime) {
      callback(...args);
      lastCalledTime = currentTime;
    } else {
      console.log(`Function called too soon. Cooldown remaining: ${cooldownTime - (currentTime - lastCalledTime)}ms`);
    }
  }
}

// To use this function, you would pass in a callback function to be executed, along with a cooldown time in milliseconds.
// The function will check the current time against the time the function was last called.
// If the cooldown period has passed, it will call the callback function and update the lastCalledTime variable.
// If the cooldown period has not passed, it will log a message indicating how much time is left in the cooldown period.

// Test

const function1 = createCooldownFunction(myFunction1, 5000);
const function2 = createCooldownFunction(myFunction2, 10000);

function1(); // myFunction1 called
function1(); // Function called too soon. Cooldown remaining: 4998ms
function2(); // myFunction2 called
function2(); // Function called too soon. Cooldown remaining: 9998ms

// Typescript prepared at /ts/cooldown.ts
