var firstname=prompt('first name please: ');
var lastname=prompt('last name please: ');
var age =prompt('how old are you? ');
var height=prompt('what is your height? ')
var petname=prompt('what is your nickname? ')
alert('thank you so much for the information! ')

//logic

//Four Conditions
var nameCond=null;
var ageCond=null;
var heightCond=null;
var petCond=null;


//name Condition
if (firstname[0]===lastname[0]) {
    nameCond=true;
}else {
  nameCond=false;
}

//age Condition
if (age>20&&age<30) {
  ageCond=true;
}else {
  ageCond=false;
}

//height Condition
if (height>=170) {
  heightCond=true;
}else {
  heightCond=false
}

//nickname Condition
if (petname[petname.length-1]==='y') {
  petCond=true;
}else {
  petCond=false;
}

//check all Conditions
if (nameCond&&ageCond&&heightCond&&petCond) {
  console.log('WELCOME SPY!');
}else {
  console.log('NOTHING TO SEE HERE');
}
