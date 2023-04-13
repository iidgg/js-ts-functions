function compareObjects(obj1, obj2) {
  // Check if both are objects
  if (typeof obj1 == "object" && typeof obj2 == "object") {
    // Check if both have the same number of properties
    if (Object.keys(obj1).length !== Object.keys(obj2).length) {
      return false;
    }
    // Check each property recursively
    for (let prop in obj1) {
      if (!compareObjects(obj1[prop], obj2[prop])) {
        return false;
      }
    }
    return true; // If all properties match
  } else {
    // Check if both are of the same type and value
    return obj1 === obj2;
  }
}
