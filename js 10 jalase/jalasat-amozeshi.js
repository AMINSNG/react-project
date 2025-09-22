//  let a = prompt("شماره اول رو وارد کنید")
//   if (a==10) {
//     alert("شما چرا عدد 10 وارد کردی")

//  }
//  let pos
//  let b = prompt( "شماره دوم رو وارد کنید")
//  let sum
//  sum=a*b
//  alert(sum)
//  let array=[1,2,3,4,5,6,7]

/////////222222222222222222///////////////////////

// const a = 5
// const b = 6
// const c = '5'

// a == b
// a === b
// a === c //true
// let h = {
//    amin: 56,
//    ami_n: {
//       amin: 56,

//    }
// }

// function sample(entry){

// console.log(entry)
// }

// sample("Amin")
////////////////////////////33333333333333333333333333333333////////////////////////////////
// function multiply(a, b) {
//   const sum = a * b;
//   console.log(sum);
// }
// const a1 = multiply(3, 5);
// const a2 = multiply(5, 5);

// const a3 = multiply(a1, a2);

// //  const sum =multiply(3,5)
// // console.log(sum)
// function minus() {
//   console.log("Hello");
// }

// function sample(a) {
//   a();
// }

// sample(minus);

/////////////////////////// 444444444444444444444/////////////////////////////

// function amin(params, params2, params3 = 75) {
//   console.log(params);
// }
// amin(12);

// let obj = {
//   obt: {
//     firstName: " hello",
//   },
//   obt2: {
//     name2: " hello",
//   },
// };

// obj.obt.firstName;

// const {
//   obt: { firstName },
//   obt2: { name2 },
// } = obj;

// const {firstName} = obj.obt

// firstName;
// const { obt: city } = obj;
// console.log(city);
// const arr=[34,55,66,78,9]
// const [n1,n2,n3,n4,n5]= arr
// console.log(n1,n5)

// console.log(Object.entries(obj));

// for (const key in obj) {
//   console.log(key);
// }

////////////////////////////////5555555555555555555555555//////////////////////////////////

// const person = {
//   name: "amir",
//   address: "",
//   age: 22,
// };

// const objKey = "name";

// person[objKey];
// person["name"];

// person.fullname = "mohamad amin";
// console.log(person);
// // delete person.name
// let arr = [{ age: 22 }, { age: 32 }, { age: 12 }];

// const filtered = arr.filter(function ({ age }) {
//   if (age > 20) return age;
// });

// console.log(filtered)

///////////////////6666666666666666666666666//////////////////////////////

function sum(a, b) {
  return a + b;
}
console.log(sum(2, 7));

/////arrow function

const sum2 = (a, b) => {
  return a + b;
};
console.log(sum2(23, 5));

const sum3 = (a, b) => a + b;
console.log(23, 6);

let arr = [{ age: 22 }, { age: 32 }, { age: 12 }];
const filtered = arr.filter(({ age }) => age > 22);

const a = null;
const b = undefined;
const c = 6;

if (a || b || c) {
  console.log("hey or");
}

if (a && b && c) {
  console.log("hey and");
}
const d = a || b || c; //// 6 mide
const z = a && b && c;//// false

////////////////////////777777777777777777777///////////////////



