function deepCopy(obj) {
  if (typeof obj !== 'object' || obj === null) {
    return obj;
  }

  let copy = Array.isArray(obj) ? [] : {};

  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      copy[key] = deepCopy(obj[key]);
    }
  }

  return copy;
}

// Example usage
let originalObject = {
  name: 'John',
  age: 30,
  address: {
    city: 'New York',
    state: 'NY'
  }
};

let clonedObject = deepCopy(originalObject);

clonedObject.name = 'Jane';
clonedObject.address.city = 'Los Angeles';

console.log(originalObject); // { name: 'John', age: 30, address: { city: 'New York', state: 'NY' } }
console.log(clonedObject); // { name: 'Jane', age: 30, address: { city: 'Los Angeles', state: 'NY' } }
