/*
Create a type "Gender" using a union type,
which can hold the values ​​"male", "female". Create a variable myGender of this type.
*/

const myGender;

export {};

// 1.8
type Gender = "male" | "female";
let myGender: Gender = "male";
