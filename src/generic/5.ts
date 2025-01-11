/*
You need to implement the KeyValuePair interface, which describes a key-value pair.
Use generics so that this interface can work with any type of key and value.
*/

interface KeyValuePair {
  key;
  value;
}

export {};

// 2.5
interface KeyValuePair<K, V> {
  key: K;
  value: V;
}

// Example usage:
const pair1: KeyValuePair<string, number> = {
  key: "Age",
  value: 30,
};

const pair2: KeyValuePair<number, boolean> = {
  key: 1,
  value: true,
};
