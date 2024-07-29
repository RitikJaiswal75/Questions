const myObj = {
  foo: "1",
  bar: "2",
};

myObj.test = "hello";

Object.defineProperty(myObj, "test2", {
  value: "world",
});

Object.keys(myObj).forEach((key) => {
  console.log(key);
});

console.log("Printed all the properties of myObj");

const a = [1, 2, 3];
a.myFunction = () => {
  console.log("hello");
};

Object.defineProperty(a, "myFunc2", {
  value: () => {
    console.log("myFunc2 hellow");
  },
});

Object.keys(a).forEach((key) => {
  console.log(key);
});

console.log("Printed all the properties of array object");

a.myFunc2();
