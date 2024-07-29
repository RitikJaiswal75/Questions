const myObj = {
  foo: "1",
  bar: "2",
};

myObj.test = "hello";

Object.defineProperty(myObj, "test2", {
  value: "world",
  writable: false,
});

Object.keys(myObj).forEach((key) => {
  console.log(key);
});

console.log(Object.getOwnPropertyNames(myObj));
