//mutable ARRAY

// var country1= 'USA'
// undefined
// var countries=['usa','ssri','china']
// undefined
// countries
// (3) ["usa", "ssri", "china"]
// countries[0]
// "usa"
// countries[0]='uk'
// "uk"
// countries
// (3) ["uk", "ssri", "china"]

// var myArr=['one','two','three']
// undefined
// var lastItem=myArr.pop()
// undefined
// lastItem
// "three"
// myArr
// (2) ["one", "two"]
// myArr.push("new_item")
// 3
// myArr
// (3) ["one", "two", "new_item"]
// 0: "one"
// 1: "two"
// 2: "new_item"
// length: 3
// __proto__: Array(0)
// myArr[myArr.length-1]
// "new_item"

// var matrix=[[1,2,3],[4,5,6],[7,8,9]]
//
//
// undefined
// matrix
// (3) [Array(3), Array(3), Array(3)]
// (3) [Array(3), Array(3), Array(3)]
// 0: (3) [1, 2, 3]
// 1: (3) [4, 5, 6]
// 2: (3) [7, 8, 9]
// length: 3
// __proto__: Array(0)
// concat: ƒ concat()
// constructor: ƒ Array()
// copyWithin: ƒ copyWithin()
// entries: ƒ entries()
// every: ƒ every()
// fill: ƒ fill()
// filter: ƒ filter()
// find: ƒ find()
// findIndex: ƒ findIndex()
// flat: ƒ flat()
// flatMap: ƒ flatMap()
// forEach: ƒ forEach()
// includes: ƒ includes()
// indexOf: ƒ indexOf()
// join: ƒ join()
// keys: ƒ keys()
// lastIndexOf: ƒ lastIndexOf()
// length: 0
// map: ƒ map()
// pop: ƒ pop()
// push: ƒ push()
// reduce: ƒ reduce()
// reduceRight: ƒ reduceRight()
// reverse: ƒ reverse()
// shift: ƒ shift()
// slice: ƒ slice()
// some: ƒ some()
// sort: ƒ sort()
// splice: ƒ splice()
// toLocaleString: ƒ toLocaleString()
// toString: ƒ toString()
// unshift: ƒ unshift()
// values: ƒ values()
// Symbol(Symbol.iterator): ƒ values()
// Symbol(Symbol.unscopables): {copyWithin: true, entries: true, fill: true, find: true, findIndex: true, …}
// __proto__: Object

//matrix.length
//3

////array iteration
// ar arr=['a','b','c']
// undefined
// arr
// (3) ["a", "b", "c"]
// for(var i=0;i<arr.length;i++)
//     console.log(arr[i])
//  a
//  b
//  c
// undefined
// for (letter of arr){
//   console.log(letter);
// }
// a
// b
// c
// undefined

// for(jelly of arr){
//     console.log('hello')
// }
// hello
// hello
// hello
// undefined

// for (letter of arr){
//     alert(letter)}
// undefined

//arr.forEach(alert);


// function addAwesome(name){
//     console.log(name+' is awesome!');}
// undefined
// addAwesome('django')
// VM2515:2 django is awesome!
// undefined
// var topics=['python','django','science']
// undefined
// topics.forEach(addAwesome)
// VM2515:2 python is awesome!
// VM2515:2 django is awesome!
// VM2515:2 science is awesome!
// undefined

var roster=[]

function addNew(){
  var newName=prompt('What name would you like to add?')
  roster.push(newName);
}

function remove(){
  var remName=prompt("What name would you like to remove?")
  var index=roster.indexOf(remName);
  roster.splice(index,1)
}

function display(){
  console.log(roster);
}

var start = prompt("Would you like to start the roster web app? y/n")
var request = 'empty';

if (start==='y'){
  while(request!=='quit'){
    request=prompt("Please select an action: add,remove, display, or quit.")
    if (request=='add') {
      addNew()
    }else if (request==='display') {
      display();
    }else if(request==='remove'){
      remove();
    }else {
      alert("Not recognized")
      //request='quit'
    }
  }
}
alert("Thanks for using the Web App! Please refresh to start over !")
