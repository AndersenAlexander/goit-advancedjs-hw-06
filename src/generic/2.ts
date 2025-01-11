/*
You have a type AllType. There is a compare function that takes two objects. These objects contain AllType fields.
Your task is to use Pick and generics to indicate that the fields of these objects belong to AllType.
The compare function should return AllType.
*/

type AllType = {
  name: string;
  position: number;
  color: string;
  weight: number;
};

function compare(top, bottom): AllType {
  return {
    name: top.name,
    color: top.color,
    position: bottom.position,
    weight: bottom.weight,
  };
}

export {};

// 2.2
type AllType = {
  name: string;
  position: number;
  color: string;
  weight: number;
};


  T extends Pick<AllType, "name" | "color">,
  U extends Pick<AllType, "position" | "weight">
>(top: T, bottom: U): AllType {
  return {
    name: top.name,
    color: top.color,
    position: bottom.position,
    weight: bottom.weight,
  };
}

// Example usage
const topObj = { name: "TopName", color: "blue", position: 1, weight: 10 };
const bottomObj = {
  name: "AnotherName",
  color: "red",
  position: 2,
  weight: 20,
};
compare(topObj, bottomObj);
