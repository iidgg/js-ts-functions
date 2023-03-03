function changeProperty(arr, oldProp, newProp) {
  return arr.map(obj => ({...obj, [newProp]: obj[oldProp]}));
}

// the code above, the changeProperty() function takes three arguments: 
// the array of objects,
// the old property name,
// and the new property name.

// It then uses the map() method to create a new array with the same objects
// but with the new property name and the old value.
// The spread operator (...) is used to copy all the other properties of the object.

// Test

const array = [{name: "John", age: 30}, {name: "Jane", age: 25}];
const newArray = changeProperty(array, "age", "years");

console.log(newArray);
// Expected output: [{name: "John", years: 30}, {name: "Jane", years: 25}]
