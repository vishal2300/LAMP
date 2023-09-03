// console.log('Hello world');
// var myNmae='vishal';
// console.log(myNmae);

// var myAge=24;
// console.log(myAge);
// console.log(typeof(myAge))

// var iAmTvishal=true;
// console.log(iAmTvishal)
// console.log(typeof(iAmTvishal))

// var num=15;
// var newNum= num-- +5 ;
// console.log(num);
// console.log(newNum);

// var a=30;
// var b=10;
// console.log(a !== b)
// var a =5;
// var b =10;

// a=a+b;
// b=a-b;
// a=a-b;
// console.log(" The value of a is "+ a);
// console.log(" The value of b is "+ b);


// var year= 2020;
// if(year % 4 == 0){
// if(year %100 == 0){
// if(year % 4000 ==0){
//     console.log("the yar " + year + " is a leap year");
// }
// else {
//     console.log("the year "+ year + " is a leap year");
// }
// }
// else{
//     console.log("the year " + year+ " is not a leap year");
// }
// }


// 

// var num=0;
 
// while(num <= 1000){
// console.log(num);
// num++;
// }


// for(var num=0; num<=10; num++){
//     debugger
//     console.log(num);
// }

// for(var num=0; num<=20; num++){
//     var tableOf =8;
//     console.log(tableOf + " * " + num + " = " + tableOf * num);
// }


// funtion Parameter and function Arrgument
// function sum(a,b){
//     var total=a+b;
//     console.log(total);
// }
//  var funExp= sum(10,40);
// funExp;

// funtion Expresion
// function sum(a,b){
//     return total=a+b;
// }
// var funExp=sum(10,20);
// console.log('the sum of two no is ' + funExp);


//   const sum = () => ` the sum os two number is ${(a=5)+(b=6)}`;
//   console.log(sum());

// var myFriends=['vishal','viju','sound','mukta','kusma'];
// for(i=0; i<myFriends.length; i++){
//      console.log(myFriends[i]);
// }

// var myFriends=['vishal','viju','sound','mukta','kusma'];
// for(let elements in myFriends){
//      console.log(elements);
// }

// var myFriends=['vishal','viju','sound','mukta','kusma'];
// for(let elements of myFriends){
//      console.log(elements);
// }

// var myFriends=['vishal','viju','sound','mukta','kusma'];
// myFriends.forEach ((elements, index, array) => { 
//   console.log(elements + " index : " + index +  " " + array);
// });

// const months = ['jan', 'march', 'april', 'july'];

// const newMonth = months.splice(5, 0, 'dec');
// console.log(months);


// const months = ['jan', 'march', 'april', 'july'];

// const indexOfMonth = months.indexOf('jan');
// if(indexOfMonth != -1){
//      const updateMonth = months.splice(indexOfMonth,1,'Jan');
//      console.log(months);
// } else{
//      console.log('No such data found');
// }


let arr = [25, 36, 49, 64, 81];

let arrsqr = arr.map((curElem) => {
     return Math.sqrt(curElem);
});
console.log(arrsqr);