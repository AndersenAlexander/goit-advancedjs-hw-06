/*
You have a merge function that combines two objects.
Use generics to indicate that these objects can be of any type.
*/

function merge(objA, objB) {
  return Object.assign(objA, objB);
}

export {};

// 2.3
function merge<T, U>(objA: T, objB: U): T & U {
  return Object.assign({}, objA, objB);
}

// Example usage:
const merged = merge({ name: "John" }, { age: 30 });
console.log(merged.name, merged.age);
