import Blob from "cross-blob"
const myArray = [{test: 1234, foo: false, bar: true}];

var b = new Blob(['hi', 'constructing', 'a', 'blob']);

console.log(b.size);