// In TypeScript, the unknown type allows us to store any value, but we cannot directly assign an unknown variable to another variable unless we are certain of its type.
// You have the following code:

let some: unknown;
some = "Text";
let str: string;
str = some;

export {};

// What needs to be corrected in this code to make it both correct and safe?
// 1.3
let some: unknown;
some = "Text";

let str: string;
if (typeof some === "string") {
  str = some; // ✔ Now it's safe
}
