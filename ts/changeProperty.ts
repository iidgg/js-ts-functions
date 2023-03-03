interface Person {
  name: string;
  age: number;
}

const array: Person[] = [{ name: "John", age: 30 }, { name: "Jane", age: 25 }];

function changeProperty(
  arr: Person[],
  oldProp: keyof Person,
  newProp: keyof Person
): Person[] {
  return arr.map((obj) => ({ ...obj, [newProp]: obj[oldProp] }));
}

const newArray = changeProperty(array, "age", "years");

console.log(newArray);
// Output: [{name: "John", years: 30}, {name: "Jane", years: 25}]

// Src ../changeProperty.js
