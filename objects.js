//hash-table--dictionary
//
// var carInfo={make:"toyota",year:1990,model:'camry'};
// undefined
// carInfo
// {make: "toyota", year: 1990, model: "camry"}
// carInfo["make"]
// "toyota"
// carInfo[make]
// Uncaught ReferenceError: make is not defined
//     at <anonymous>:1:9
// carInfo[year]
//  Uncaught ReferenceError: year is not defined
//     at <anonymous>:1:9

// var myNew={a:'hello',b:[1,2,3],c:{inside:['a','b']}};
// undefined
// myNew
// {a: "hello", b: Array(3), c: {…}}a: "hello"b: Array(3)0: 11: 22: 3length: 3__proto__: Array(0)concat: ƒ concat()constructor: ƒ Array()copyWithin: ƒ copyWithin()entries: ƒ entries()every: ƒ every()fill: ƒ fill()filter: ƒ filter()find: ƒ find()findIndex: ƒ findIndex()flat: ƒ flat()flatMap: ƒ flatMap()forEach: ƒ forEach()includes: ƒ includes()indexOf: ƒ indexOf()join: ƒ join()keys: ƒ keys()lastIndexOf: ƒ lastIndexOf()length: 0map: ƒ map()pop: ƒ pop()push: ƒ push()reduce: ƒ reduce()reduceRight: ƒ reduceRight()reverse: ƒ reverse()shift: ƒ shift()slice: ƒ slice()some: ƒ some()sort: ƒ sort()splice: ƒ splice()toLocaleString: ƒ toLocaleString()toString: ƒ toString()unshift: ƒ unshift()values: ƒ values()Symbol(Symbol.iterator): ƒ values()Symbol(Symbol.unscopables): {copyWithin: true, entries: true, fill: true, find: true, findIndex: true, …}__proto__: Objectc: inside: Array(2)0: "a"1: "b"length: 2__proto__: Array(0)__proto__: Object__proto__: Objectconstructor: ƒ Object()hasOwnProperty: ƒ hasOwnProperty()isPrototypeOf: ƒ isPrototypeOf()propertyIsEnumerable: ƒ propertyIsEnumerable()toLocaleString: ƒ toLocaleString()toString: ƒ toString()valueOf: ƒ valueOf()__defineGetter__: ƒ __defineGetter__()__defineSetter__: ƒ __defineSetter__()__lookupGetter__: ƒ __lookupGetter__()__lookupSetter__: ƒ __lookupSetter__()get __proto__: ƒ __proto__()set __proto__: ƒ __proto__()
//

//carInfo['year']=2006;
//2006
//carInfo
//Object{make;'toyota',year:2006, model:'camry'}
//carInfo['year']+=1
//2007
//console.dir(carInfo);
//Object
//make:'toyota'
//model:'camry'
//year:2007

////iteration
// for (key in carInfo){
//   console.log(key);
// }
//make
//year
//model

// for (key in carInfo){
//   console.log(key);
//   console.log(carInfo[k]);
// }
//make
//toyota
//year
//2007
//model
//camry



//object methods
// var simple={
//     prop:'hello',
//     myMethod:function(){ console.log('the myMethod was called')}}
// undefined
//
// simple
// {prop: "hello", myMethod: ƒ}
// myMethod: ƒ ()arguments: nullcaller: nulllength: 0name: "myMethod"prototype: {constructor: ƒ}__proto__: ƒ ()[[FunctionLocation]]: VM3521:3[[Scopes]]: Scopes[1]prop: "hello"__proto__: Object
// console.dir(simple)
// ObjectmyMethod: ƒ ()prop: "hello"__proto__: Object
// undefined

// simple.myMethod
// ƒ (){ console.log('the myMethod was called')}

// simple.myMethod()
// the myMethod was called
// undefined

// myObj
// {name: "jose", greet: ƒ}greet: ƒ ()name: "jose"__proto__: Object
// myObj.greet()
// hello jose
// undefined



//exercise

// var employee={
//   name:"john smith",
//   job:"programmer",
//   age:31,
//   namelength:function() {
//     console.log(this.name.length);
//   }
// }
// undefined
// employee.namelength()
// 10
// undefined

// var employee={
//   name:"john smith",
//   job:"programmer",
//   age:31,
//   lastname:function () {
//     console.log(this.name.split(' ')[1]);}
//   }
//   undefined
// employee.lastname()
// smith
// undefined
