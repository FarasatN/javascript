// function hello(){
//   console.log('hello ');
// }

// function addnum(num1,num2) {
//   console.log(num1+num2);
// }

// function hellosomeone(name="Frank") {
//   console.log('hello '+name);
// }
// //hello('Jose')

// function formal(name='Sam',title='Sir') {
//   // console.log(title+' '+name);
//   return title+' '+name
// }
// var output=formal()

// function times(numInput){
//   //local scope
//   var v='local v'
//   var result=numInput*5;
//   return result
// }

// //Global Scope
// var v='global v'
// var stuff='global stuff'
// function fun(stuff){
//   console.log(v);
//   stuff='reassign stuff inside func'
//   console.log(stuff);
// }
// fun()
// console.log(stuff);

// function sleepin(weekday,vacation) {
//   return (!weekday||vacation);
// }

// function monkeyTrouble(asmile,bsmile){
//   return (asmile&&bsmile) || (!asmile&&!bsmile)
// }

// function stringTimes(str,m){
//   var returnStr='';
//   var i=0;
//   while (i<n) {
//     returnStr+=str;
//     i++
//   }
//   return returnStr;
// }

// function luckysum(a,b,c) {
//   if (a==13) {
//     return 0;
//   }
// }else if (b===13) {
//   return a
// }else if (c===13) {
//   return a+b
// }else {
//   return a+b+c}
// }

function caught_speeding(speed,is_birthday){
  if (is_birthday){
    speed-=5
  }
  if (speed<=60){
  return 0
}
if (60<speed<=80) {
  return 1
}
return 2
}
