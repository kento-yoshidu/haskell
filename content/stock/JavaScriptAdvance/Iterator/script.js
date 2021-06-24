const iterator = {};

iterator.next = () => {
  const iteratorResult = { value: 1, done: false };
  return iteratorResult;
}

const obj = {};
obj[Symbol.iterator] = () => {
  return iterator;
}

const test = obj[Symbol.iterator]();
console.log(test.next());