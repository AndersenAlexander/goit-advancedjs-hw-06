/*
There is a function getPromise() that returns a promise that is allowed in an array containing strings and numbers.
Complete this function using generics so that it returns the correct type.
*/

function getPromise() {
  return new Promise((resolve) => {
    resolve(["Text", 50]);
  });
}

getPromise().then((data) => {
  console.log(data);
});

export {};

// 2.1
function getPromise(): Promise<[string, number]> {
  return new Promise((resolve) => {
    resolve(["Text", 50]);
  });
}

getPromise().then((data) => {
  // data is of type [string, number]
  console.log(data[0].toUpperCase()); // 'TEXT'
  console.log(data[1].toFixed(2)); // '50.00'
});
