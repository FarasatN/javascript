// var hot=false
// var temp=23
// // if(temp<80){
// //   hot=true;
// // }
// // console.log(hot);//true
//
// // if(temp<80){
// //   console.log("hot outside");
// // }else{
// //   console.log('its not hot today');
// // }
//
// if(temp>40){
//   console.log("very hot");
// }
// else if (temp<=40&&temp>=30){
//   console.log("hot");
// }
// else if (temp<30&&temp>=20) {
//   console.log("warm");
// }
// else {
//   console.log("cool");
// }

var meat=10;
var cheese=10;
var report='blank';
if (meat>=10&&cheese>=10) {
  report='strong sales of both meat and cheese';
}else if (meat===0&&cheese===0) {
  report='nothing sold';
}else {
  report='we had some sales of items'
}
console.log(report);
