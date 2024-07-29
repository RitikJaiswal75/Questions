"use strict";

const myObj = {
  foo: "1",
  bar: "2",
};

Object.freeze(myObj);
try {
  myObj.test = 1;
} catch (e) {
  console.log(e.message);
}

try {
  myObj.bar = "hello";
} catch (e) {
  console.log(e.message);
}

console.log("myObj.bar", myObj.bar);

Object.keys(myObj).forEach((key) => {
  console.log(key);
});

console.log(Object.getOwnPropertyNames(myObj));

console.log("Object2");

const myObj2 = {
  foo: "1",
  bar: "2",
};

Object.preventExtensions(myObj2);

try {
  myObj2.test = 1;
} catch (e) {
  console.log(e.message);
}

Object.keys(myObj2).forEach((key) => {
  console.log(key);
});

try {
  myObj2.bar = "world";
} catch (e) {
  console.log(e);
}

console.log("myObj2.bar", myObj2.bar);

console.log(Object.getOwnPropertyNames(myObj2));
