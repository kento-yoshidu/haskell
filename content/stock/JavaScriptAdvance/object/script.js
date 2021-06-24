const obj = {};

console.log(obj.constructor);
//=> [Function: Object]

const obj2 = new Object();

console.log(obj2.constructor)
//=> [Function: Object]

/*
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

const kento = new Person('kento', 34);

console.log(kento.name)
//=> kento

console.log(kento.age)
//=> 34

const fumika = Person('fumika', 69)

const str = new String('SampleString');

console.log(str.constructor)

*/

const str = 'SampleString';

console.log(str.constructor)
